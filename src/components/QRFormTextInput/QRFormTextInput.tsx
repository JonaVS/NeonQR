import { Input, InputProps } from "@chakra-ui/react";

type Props = InputProps

const QRFormTextInput = (props:Props) => {
  return (
    <Input
      type="text"
      placeholder="Enter text or a URL"
      fontFamily="Bakbak One"
      variant="flushed"
      borderBottomColor="theme.cyan"
      color="whiteAlpha.900"
      textShadow="0 0 5px #8c00ff, 0 0 10px #8c00ff, 0 0 10px #8c00ff"
      margin={0}
      _focus={{ borderBottom: "solid 1px #8c00ff", boxShadow: "none" }}
      _placeholder={{color: '#555555', textShadow: "none"}}
      {...props}
    />
  );
};

export default QRFormTextInput;
