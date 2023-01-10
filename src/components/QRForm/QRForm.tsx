import React from "react";
import { useQRForm } from "../../hooks/useQRForm";
import { chakra, Stack, Flex, Radio } from "@chakra-ui/react";
import QRFormColorInput from "../QRFormColorInput/QRFormColorInput";
import QRFormSwitch from "../QRFormSwitch/QRFormSwitch";
import QRFormImagePicker from "../QRFormImagePicker/QRFormImagePicker";
import QRFormTextInput from "../QRFormTextInput/QRFormTextInput";
import QRFormHeading from "../QRFormHeading/QRFormHeading";
import QRFormButton from "../QRFormButton/QRFormButton";
import QRFormRadioGroup from "../QRFormRadioGroup/QRFormRadioGroup";

const QRForm = () => {
  const {
    state,
    handleSwitchGlowToggle,
    handleSwitchWithImgToggle,
    handleImgFileChange,
    handleGetAsImage,
    debouncedHandleColorChange,
    debouncedHandleContentChange,
  } = useQRForm();

  const { colors, glow, withImg, selectedImgURL } = state;

  return (
    <chakra.form marginTop={12} onSubmit={(e) => e.preventDefault()}>
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
        </Flex>
        <QRFormHeading text="Glow" />
        <Flex alignItems="center" gap="3">
          <QRFormRadioGroup defaultValue="1" isDisabled={!glow}>
            <Radio value="1">Type 1</Radio>
            <Radio value="2">Type 2</Radio>
          </QRFormRadioGroup>
          <QRFormSwitch
            text="Glow"
            idForLabel="glow"
            isChecked={glow}
            onChange={handleSwitchGlowToggle}
          />
        </Flex>
        <QRFormHeading text="Image" />
        <Flex alignItems="center">
          <QRFormImagePicker
            isDisabled={!withImg}
            onChange={handleImgFileChange}
            selectedImgURL={selectedImgURL}
          />
          <QRFormSwitch
            text="Image"
            idForLabel="image"
            isChecked={withImg}
            onChange={handleSwitchWithImgToggle}
          />
        </Flex>
        <QRFormHeading text="Content" />
        <QRFormTextInput
          defaultValue=""
          onChange={debouncedHandleContentChange}
        />
        <QRFormButton onClick={handleGetAsImage} />
      </Stack>
    </chakra.form>
  );
};

export default QRForm;
