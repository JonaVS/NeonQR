import React from "react";
import { StyledQRCodeSVG } from "./QRCode.styles";
import defaultImg from "../../assets/defaultImg.png";

type Props = {
  bgColor?: string | undefined;
  color?: string | undefined;
  glow?: boolean;
  content?: string;
  withImg?: boolean;
};

const QRCode = ({
  bgColor,
  color,
  glow = true,
  content = "https://github.com/JonaVS",
  withImg = true,
}: Props) => {

  const imageSettings = withImg
    ? { src: defaultImg, excavate: true, height: 40, width: 40 }
    : undefined;

  return (
    <>
      <svg height="0">
        <filter id="f1">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation={`${glow ? "0.4" : "0"}`}
            floodColor={color}
          />
        </filter>
        <filter id="f2">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation={`${glow ? "7" : "0"}`}
            floodColor={color}
          />
        </filter>
      </svg>
      <StyledQRCodeSVG
        color={color}
        bgColor={bgColor}
        value={content}
        size={250}
        imageSettings={imageSettings}
      />
    </>
  );
};

export default QRCode;
