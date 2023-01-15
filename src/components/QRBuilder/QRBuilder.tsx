import React from "react";
import { Box } from "@chakra-ui/react";
import QRCode from "../QRCode/QRCode";
import QRForm from "../QRForm/QRForm";

const QRBuilder = () => {
  return (
    <Box
      maxW={500}
      m="20px auto 0 auto"
      paddingX={5}
      paddingY={10}
      boxShadow="0 0 15px #000000, 0 0 15px #000000"
      rounded="lg"
    >
      <QRCode />
      <QRForm />
    </Box>
  );
};

export default QRBuilder;
