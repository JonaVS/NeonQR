import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import defaultImg from "../../assets/defaultImg.png";
import QRCodeFilters from "../QRCodeFilters/QRCodeFilters";
import { StyledQRCodeSVG } from "./QRCode.styles";

const QRCode = () => {
  const { colors, glow, content, withImg, selectedImgURL } = useSelector(
    (state: RootState) => state.qrform
  );

  const { contentColor, bgColor } = colors;

  const imageSettings = withImg
    ? {
        src: selectedImgURL ? selectedImgURL : defaultImg,
        excavate: true,
        height: 40,
        width: 40,
      }
    : undefined;

  return (
    <>
      <QRCodeFilters contentColor={contentColor} glow={glow} />
      <StyledQRCodeSVG
        color={contentColor}
        bgColor={bgColor}
        value={content}
        size={250}
        imageSettings={imageSettings}
      />
    </>
  );
};

export default QRCode;
