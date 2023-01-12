import styled from "@emotion/styled";
import { QRCodeSVG } from "qrcode.react";

type Props = {
  glow: 0 | 1
}

export const StyledQRCodeSVG = styled(QRCodeSVG)<Props>`
  margin: auto;
  filter: ${(props) => props.glow && "url(#f2) brightness(1.1) saturate(1.1)"}; 
  transform:  translateZ(0);
  -webkit-transform: translateZ(0);
  path:nth-of-type(2) {
    fill: ${(props) => props.color};
    filter: ${(props) => props.glow && "url(#f1)"};
  }
`;