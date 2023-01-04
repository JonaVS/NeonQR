import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  changeColor,
  changeContent,
  toggleGlowEffect,
  toggleWithImg,
  ColorPayload,
} from "../components/QRForm/QRFormSlice";
import { useDebouncedCallback } from "use-debounce";

export const useQRForm = () => {
  const { colors, glow, withImg } = useSelector((state: RootState) => state.qrform);

  const dispatch = useDispatch();

  useEffect(() => {
    return (): void => {
        debouncedHandleColorChange.cancel;
        debouncedHandleContentChange.cancel;
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

  const handleSwitchGlowToggle = (): void => {
    dispatch(toggleGlowEffect(!glow));
  };

  const handleSwitchWithImgToggle = (): void => {
    dispatch(toggleWithImg(!withImg));
  };

  return {
    state: {colors, glow, withImg},
    handleSwitchGlowToggle,
    handleSwitchWithImgToggle,
    debouncedHandleColorChange,
    debouncedHandleContentChange
  };
};
