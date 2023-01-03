import styled from "@emotion/styled";
import { QRCodeSVG } from "qrcode.react";

export const StyledQRCodeSVG = styled(QRCodeSVG)`
  margin: auto;
  filter: url(#f2) brightness(1);
  path:nth-of-type(1) {
    fill: ${(props) => props.bgColor || "black"};
  }
  path:nth-of-type(2) {
    fill: ${(props) => props.color || "cyan"};
    filter: url(#f1);
  }
`;