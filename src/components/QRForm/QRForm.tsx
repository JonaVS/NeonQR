import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeColor, ColorPayload, toggleGlowEffect } from "./QRFormSlice";
import { useDebouncedCallback } from "use-debounce";
import { chakra, Stack, Flex } from "@chakra-ui/react";
import QRFormColorInput from "../QRFormColorInput/QRFormColorInput";
import QRFormSwitch from "../QRFormSwitch/QRFormSwitch";
import QRFormIconPicker from "../QRFormIconPicker/QRFormIconPicker";
import QRFormTextInput from "../QRFormTextInput/QRFormTextInput";
import QRFormHeading from "../QRFormHeading/QRFormHeading";
import QRFormButton from "../QRFormButton/QRFormButton";

const QRForm = () => {
  const { colors, glow } = useSelector((state: RootState) => state.qrform);
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

  const handleSwitchGlowToggle = ():void => {
    dispatch(toggleGlowEffect(!glow))
  }

  useEffect(() => {
    return debouncedOnColorChange.cancel;
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
        <QRFormHeading text="Icon" />
        <Flex alignItems="center">
          <QRFormIconPicker />
          <QRFormSwitch text="Icon" idForLabel="icon" />
        </Flex>
        <QRFormHeading text="Content" />
        <QRFormTextInput />
        <QRFormButton />
      </Stack>
    </chakra.form>
  );
};

export default QRForm;
