import React from "react";
import { FormLabel, Image, Input, InputProps } from "@chakra-ui/react";
import defaultImg from "../../assets/defaultImg.png";

type Props = InputProps & {
  selectedImgURL: string | null,
  imgAlt: string
};

const QRFormImagePicker = (props: Props) => {
  let disabledStyleProps = {};

  if (props.isDisabled) {
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
      cursor="pointer"
    >
      <Input
        id="QRIconInput"
        type="file"
        display="none"
        isDisabled={props.isDisabled}
        onChange={props.onChange}
        accept="image/png, image/jpeg, image/jpg,"
        title={props.title}
      />
      <Image
        height="40px"
        width="40px"
        objectFit="cover"
        rounded="full"
        alt={props.imgAlt}
        src={props.selectedImgURL ? props.selectedImgURL : defaultImg}
        {...disabledStyleProps}
      />
    </FormLabel>
  );
};

export default QRFormImagePicker;
