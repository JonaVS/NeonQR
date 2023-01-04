import React from "react";
import { FormLabel, Image, Input, InputProps } from "@chakra-ui/react";
import defaultImg from "../../assets/defaultImg.png";

type Props = InputProps;

const QRFormIconPicker = ({ isDisabled = false }: Props) => {
  let disabledStyleProps = {};

  if (isDisabled) {
    disabledStyleProps = {
      filter: "auto",
      blur: "5px",
      brightness: "40%",
    };
  }

  return (
    <FormLabel
      htmlFor="QRIconInput"
      width="40px"
      height="40px"
      margin={0}
      rounded="full"
      backgroundColor="black"
      cursor="pointer"
    >
      <Input
        id="QRIconInput"
        type="file"
        display="none"
        isDisabled={isDisabled}
      />
      <Image
        height="40px"
        width="40px"
        objectFit="contain"
        src={defaultImg}
        {...disabledStyleProps}
      />
    </FormLabel>
  );
};

export default QRFormIconPicker;
