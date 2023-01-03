import React from "react";
import { FormLabel, Image, Input } from "@chakra-ui/react";
import defaultImg from '../../assets/defaultImg.png'

const QRFormIconPicker = () => {
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
      <Input id="QRIconInput" type="file" display="none" />
      <Image
        height="40px"
        width="40px"
        objectFit="contain"
        src={defaultImg}
        filter={{ blur: "5" }}
      />
    </FormLabel>
  );
};

export default QRFormIconPicker;
