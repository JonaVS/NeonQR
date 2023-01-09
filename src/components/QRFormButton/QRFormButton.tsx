import React from "react";
import { ButtonProps, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = ButtonProps;

//START--Framer motion variants--START
const toPngBtn = {
  tap: {
    scale: 0.9,
    transition: { duration: 0.2, type: "spring" },
  },
};
//END--Framer motion variants--END

const QRFormButton = (props: Props) => {
  return (
    <chakra.button
      as={motion.button}
      variants={toPngBtn}
      whileTap={toPngBtn.tap}
      backgroundColor="#8c00ff"
      minW="36"
      alignSelf="center"
      boxShadow="0 0 5px #8c00ff, 0 0 10px #8c00ff"
      p={2}
      rounded="md"
      {...props}
    >
      Get as PNG
    </chakra.button>
  );
};

export default QRFormButton;
