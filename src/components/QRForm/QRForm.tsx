import React from "react";
import { chakra, Stack, Flex } from "@chakra-ui/react";
import QRFormColorInput from "../QRFormColorInput/QRFormColorInput";
import QRFormSwitch from "../QRFormSwitch/QRFormSwitch";
import QRFormIconPicker from "../QRFormIconPicker/QRFormIconPicker";
import QRFormTextInput from "../QRFormTextInput/QRFormTextInput";
import QRFormHeading from "../QRFormHeading/QRFormHeading";
import QRFormButton from "../QRFormButton/QRFormButton";

const QRForm = () => {
  return (
    <chakra.form marginTop={12}>
      <Stack spacing="3.5">
        <QRFormHeading text="Colors" />
        <Flex alignItems="center" gap="3">
          <QRFormColorInput />
          <QRFormColorInput />
          <QRFormSwitch text="Glow" idForLabel="glow" marginLeft="auto" />
        </Flex>
        <QRFormHeading text="Icon" />
        <Flex alignItems="center">
          <QRFormIconPicker />
          <QRFormSwitch text="Icon" idForLabel="icon" marginLeft="auto" />
        </Flex>
        <QRFormHeading text="Content" />
        <QRFormTextInput />
        <QRFormButton/>
      </Stack>
    </chakra.form>
  );
};

export default QRForm;
