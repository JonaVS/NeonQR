import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import QRCode from "../QRCode/QRCode";
import QRForm from "../QRForm/QRForm";

const QRBuilder = () => {
  const [color, setColor] = useState("#00ffff");
  const [bgColor, setBgColor] = useState("#000000");

  return (
    <Box
      maxW={500}
      m="20px auto 0 auto"
      paddingX={5}
      paddingY={10}
      boxShadow="0 0 15px #000000, 0 0 15px #000000"
      rounded="lg"
    >
      <QRCode color={color} bgColor={bgColor} />
      <QRForm />
    </Box>
  );
};

export default QRBuilder;
