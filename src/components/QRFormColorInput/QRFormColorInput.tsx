import React from "react";
import { StyledColorInput } from "./QRFormColorInput.styles";

type Props = React.ComponentPropsWithoutRef<"input"> 

const QRFormColorInput = (props:Props) => {
    return <StyledColorInput type='color' {...props}/>
}

export default QRFormColorInput