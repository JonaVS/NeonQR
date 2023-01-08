import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { useToast } from "@chakra-ui/react";
import { RootState } from "../store/store";
import {
  changeColor,
  changeContent,
  toggleGlowEffect,
  toggleWithImg,
  ColorPayload,
} from "../components/QRForm/QRFormSlice";
import { optimizeQRCodeImg } from "../utils/imgOptimizer";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { isAppleDevice } from "../utils/deviceChecker";

export const useQRForm = () => {
  const { colors, glow, withImg, selectedImgURL } = useSelector((state: RootState) => state.qrform);

  const dispatch = useDispatch();
  const toast = useToast();

  let fileReader: FileReader

  const mimeType = /image\/(png|jpg|jpeg)/i;

  useEffect(() => {
    return (): void => {
        debouncedHandleColorChange.cancel;
        debouncedHandleContentChange.cancel;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
    };
  }, []);

  const debouncedHandleColorChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const payload: ColorPayload = {
        colorType: event.target.name === "contentColor" ? "contentColor" : "bgColor",
        color: event.target.value,
      };
      dispatch(changeColor(payload));
    },
    300
  );

  const debouncedHandleContentChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch(changeContent(event.target.value));
    },
    300
  );
  
  const handleImgFileChange = ( event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files || event.target.value.length == 0) return;
    const selectedFile = event.target.files[0];
    if (!selectedFile.type.match(mimeType)) {
      toast({
        title: 'Accepted files formats',
        description: "Please select a png, jpg or jpeg file 😀",
        status: 'error',
        duration: 4000,
        isClosable: true,
        variant: "left-accent",
      })
      return
    }
    
    fileReader = new FileReader();
    fileReader.onloadend = () => {
      const rawLoadedImgURL = fileReader.result as string;
      optimizeQRCodeImg(rawLoadedImgURL, dispatch);
    };
    fileReader.readAsDataURL(selectedFile);
  };

  const handleSwitchGlowToggle = (): void => {
    dispatch(toggleGlowEffect(!glow));
  };

  const handleSwitchWithImgToggle = (): void => {
    dispatch(toggleWithImg(!withImg));
  };

  const handleGetAsImage = async ():Promise<void> => {
    const node = document.getElementById("to-img-target");
    if (!node) return
    /*
      On Apple devices, the first time the GET as PNG button is pressed, 
      the returned image from the toPng method will not contain the selected/default image inside the QRCode.

      For now, calling toPng method twice on these devices resolves the issue.
     */
    if (isAppleDevice) await toPng(node)

    const dataURL = await toPng(node)
    saveAs(dataURL, 'testExport.png')
  }

  return {
    state: {colors, glow, withImg, selectedImgURL},
    handleSwitchGlowToggle,
    handleSwitchWithImgToggle,
    handleImgFileChange,
    handleGetAsImage,
    debouncedHandleColorChange,
    debouncedHandleContentChange
  };
};
