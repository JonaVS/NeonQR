import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  changeColor,
  ColorPayload,
  toggleGlowEffect,
  changeContent,
  toggleWithImg,
} from "./QRFormSlice";
import { useDebouncedCallback } from "use-debounce";
import { chakra, Stack, Flex } from "@chakra-ui/react";
import QRFormColorInput from "../QRFormColorInput/QRFormColorInput";
import QRFormSwitch from "../QRFormSwitch/QRFormSwitch";
import QRFormIconPicker from "../QRFormIconPicker/QRFormIconPicker";
import QRFormTextInput from "../QRFormTextInput/QRFormTextInput";
import QRFormHeading from "../QRFormHeading/QRFormHeading";
import QRFormButton from "../QRFormButton/QRFormButton";

const QRForm = () => {
  const { colors, glow, withImg } = useSelector((state: RootState) => state.qrform)
  const dispatch = useDispatch();

  const debouncedOnColorChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const payload: ColorPayload = {
        colorType: event.target.name === "contentColor" ? "contentColor" : "bgColor",
        color: event.target.value,
      };
      dispatch(changeColor(payload));
    },
    300
  );

  const debouncedOnContentChange = useDebouncedCallback(
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

  useEffect(() => {
    return (): void => {
      debouncedOnColorChange.cancel;
      debouncedOnContentChange.cancel;
    };
  }, []);

  return (
    <chakra.form marginTop={12}>
      <Stack spacing="3.5">
        <QRFormHeading text="Colors" />
        <Flex alignItems="center" gap="3">
          <QRFormColorInput
            defaultValue={colors.bgColor}
            name="bgColor"
            onChange={debouncedOnColorChange}
          />
          <QRFormColorInput
            defaultValue={colors.contentColor}
            name="contentColor"
            onChange={debouncedOnColorChange}
          />
          <QRFormSwitch
            text="Glow"
            idForLabel="glow"
            isChecked={glow}
            onChange={handleSwitchGlowToggle}
          />
        </Flex>
        <QRFormHeading text="Image" />
        <Flex alignItems="center">
          <QRFormIconPicker isDisabled={!withImg} />
          <QRFormSwitch
            text="Image"
            idForLabel="image"
            isChecked={withImg}
            onChange={handleSwitchWithImgToggle}
          />
        </Flex>
        <QRFormHeading text="Content" />
        <QRFormTextInput defaultValue="" onChange={debouncedOnContentChange} />
        <QRFormButton />
      </Stack>
    </chakra.form>
  );
};

export default QRForm;
