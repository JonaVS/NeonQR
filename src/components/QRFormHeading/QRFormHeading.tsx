import React from "react";
import { Heading } from "@chakra-ui/react";

type Props = {
  text: string;
};

const QRFormHeading = ({ text }: Props) => {
  return (
    <Heading
      as="h2"
      textShadow="0 0 5px #8c00ff, 0 0 5px #8c00ff, 0 0 5px #8c00ff"
      size="sm"
      color="whiteAlpha.900"
      fontWeight="bold"
      fontFamily="Bakbak One"
      textTransform="uppercase"
      border="solid transparent 3px"
      borderLeftColor="whiteAlpha.500"
      paddingLeft={2}
    >
      {text}
    </Heading>
  );
};

export default QRFormHeading;
