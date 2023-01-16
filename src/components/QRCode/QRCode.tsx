import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import defaultImg from "../../assets/defaultImg.png";
import QRCodeFilters from "../QRCodeFilters/QRCodeFilters";
import { chakra, Flex } from "@chakra-ui/react";
import { QRCodeSVG } from "qrcode.react";

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
    <Flex justifyContent="center">
      <chakra.div id="to-img-target" p={5}>
        {glow && <QRCodeFilters contentColor={contentColor} />}
        <chakra.svg
          as={QRCodeSVG}
          sx={{
            filter: `${glow && "url(#f2) brightness(1.1) saturate(1.1)"}`,
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            "path:nth-of-type(1)": {
              fill: bgColor,
            },
            "path:nth-of-type(2)": {
              fill: glow ? "#d3d3d3" : contentColor,
              filter: `${glow && "url(#f1)"}`,
            },
          }}
          level="Q"
          margin="auto"
          value={content}
          size={250}
          imageSettings={imageSettings}
        />
      </chakra.div>
    </Flex>
  );
};

export default QRCode;
