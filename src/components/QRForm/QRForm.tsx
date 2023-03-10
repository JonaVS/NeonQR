import React from "react";
import { useQRForm } from "../../hooks/useQRForm";
import { chakra, Stack, Flex } from "@chakra-ui/react";
import QRFormColorInput from "../QRFormColorInput/QRFormColorInput";
import QRFormSwitch from "../QRFormSwitch/QRFormSwitch";
import QRFormImagePicker from "../QRFormImagePicker/QRFormImagePicker";
import QRFormTextInput from "../QRFormTextInput/QRFormTextInput";
import QRFormHeading from "../QRFormHeading/QRFormHeading";
import QRFormButton from "../QRFormButton/QRFormButton";
import UsageInfo from "../UsageInfo/UsageInfo";

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

  const {colors, glow, withImg, selectedImgURL} = state

  return (
    <chakra.form marginTop={12} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="3.5">
        <Flex alignItems="center">
          <QRFormHeading text="Colors" />
          <UsageInfo
            title="Colors tip"
            messageBody="To see the neon effect, use dark colors for the background and light colors for the content."
          />
        </Flex>
        <Flex alignItems="center" gap="3">
          <QRFormColorInput
            defaultValue={colors.bgColor}
            name="bgColor"
            onChange={debouncedHandleColorChange}
            title="QR Code background color"
          />
          <QRFormColorInput
            defaultValue={colors.contentColor}
            name="contentColor"
            onChange={debouncedHandleColorChange}
            title="QR Code content color"
          />
          <QRFormSwitch
            text="Neon"
            idForLabel="neon"
            isChecked={glow}
            onChange={handleSwitchGlowToggle}
          />
        </Flex>
        <Flex alignItems="center">
          <QRFormHeading text="Image" />
          <UsageInfo
            title="Image | Logo info"
            messageBody="Max file size: 5 Mb. Files formats: png, jpg or jpeg."
          />
        </Flex>
        <Flex alignItems="center">
          <QRFormImagePicker
            isDisabled={!withImg}
            onChange={handleImgFileChange}
            selectedImgURL={selectedImgURL}
            title="QR Code image picker"
            imgAlt="QR Code embedded image"
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
        <QRFormButton type="button" onClick={handleGetAsImage} />
      </Stack>
    </chakra.form>
  );
};

export default QRForm;
