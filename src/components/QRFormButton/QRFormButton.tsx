import React from "react";
import { Button } from "@chakra-ui/react";

const QRFormButton = () => {
  return (
    <Button
      backgroundColor="#8c00ff"
      minW="36"
      alignSelf="center"
      boxShadow="0 0 5px #8c00ff, 0 0 10px #8c00ff"
      _hover={{
        backgroundColor: "transparent",
        boxShadow: "0 0 5px #00ffff, 0 0 10px #00ffff",
        textShadow: "0 0 5px #8c00ff, 0 0 10px #8c00ff",
      }}
    >
      Get as PNG
    </Button>
  );
};

export default QRFormButton;
