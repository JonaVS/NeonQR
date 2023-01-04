import React from "react";
import { useQRForm } from "../../hooks/useQRForm";
import { chakra, Stack, Flex } from "@chakra-ui/react";
import QRFormColorInput from "../QRFormColorInput/QRFormColorInput";
import QRFormSwitch from "../QRFormSwitch/QRFormSwitch";
import QRFormIconPicker from "../QRFormIconPicker/QRFormIconPicker";
import QRFormTextInput from "../QRFormTextInput/QRFormTextInput";
import QRFormHeading from "../QRFormHeading/QRFormHeading";
import QRFormButton from "../QRFormButton/QRFormButton";

const QRForm = () => {
  const {
    state,
    handleSwitchGlowToggle,
    handleSwitchWithImgToggle,
    debouncedHandleColorChange,
    debouncedHandleContentChange,
  } = useQRForm();
  
  const {colors, glow, withImg} = state

  return (
    <chakra.form marginTop={12}>
      <Stack spacing="3.5">
        <QRFormHeading text="Colors" />
        <Flex alignItems="center" gap="3">
          <QRFormColorInput
            defaultValue={colors.bgColor}
            name="bgColor"
            onChange={debouncedHandleColorChange}
          />
          <QRFormColorInput
            defaultValue={colors.contentColor}
            name="contentColor"
            onChange={debouncedHandleColorChange}
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
        <QRFormTextInput defaultValue="" onChange={debouncedHandleContentChange} />
        <QRFormButton />
      </Stack>
    </chakra.form>
  );
};

export default QRForm;
