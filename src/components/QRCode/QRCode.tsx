import React from "react";
import { StyledQRCodeSVG } from "./QRCode.styles";
import defaultImg from "../../assets/defaultImg.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const QRCode = () => {
  const { colors, glow, content, withImg, selectedImgURL } = useSelector(
    (state: RootState) => state.qrform
  );

  const {contentColor, bgColor} = colors

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
      <svg height="0">
        <filter id="f1">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation={`${glow ? "0.4" : "0"}`}
            floodColor={contentColor}
          />
        </filter>
        <filter id="f2">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation={`${glow ? "7" : "0"}`}
            floodColor={contentColor}
          />
        </filter>
      </svg>
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
