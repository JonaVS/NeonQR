import React from "react";
import { Input, InputProps } from "@chakra-ui/react";

const sharedInputStyles = {
  borderRadius: "50%",
  boxShadow: "0 0 10px #757575",
  border: "none",
};

type Props = InputProps

const QRFormColorInput = (props: Props) => {
  return (
    <Input
      sx={{
        webkitAppearance: "none",
        "::-webkit-color-swatch": {
          ...sharedInputStyles,
        },
        "::-moz-color-swatch": {
          ...sharedInputStyles,
        },
      }}
      margin={0}
      padding={0}
      appearance="none"
      width="40px"
      height="40px"
      backgroundColor="transparent"
      border="none"
      cursor="pointer"
      type="color"
      {...props}
    />
  );
};

export default QRFormColorInput;
