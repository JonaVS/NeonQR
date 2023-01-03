import React from "react";
import { StyledQRCodeSVG } from "./QRCode.styles";
import defaultImg from '../../assets/defaultImg.png'

type Props = {
  bgColor?: string | undefined
  color?: string | undefined
}

const QRCode = ({bgColor, color}:Props) => {
  return (
    <>
      <svg height="0">
        <filter id="f1">
          <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor={color} />
        </filter>
        <filter id="f2">
          <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor={color} />
        </filter>
      </svg>
      <StyledQRCodeSVG
        color={color}
        bgColor={bgColor}
        value="https://github.com/JonaVS"
        size={250}
        imageSettings={{
          src: defaultImg,
          excavate: true,
          height: 40,
          width: 40,
        }}
      />
    </>
  );
};

export default QRCode;
