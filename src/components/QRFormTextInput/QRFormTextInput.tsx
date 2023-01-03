import { Input } from "@chakra-ui/react";

const QRFormTextInput = () => {
  return (
    <Input
      type="text"
      placeholder="Enter text or a URL"
      variant="flushed"
      borderBottomColor="theme.cyan"
      color="whiteAlpha.900"
      textShadow="0 0 5px #8c00ff, 0 0 10px #8c00ff, 0 0 10px #8c00ff"
      margin={0}
      _focus={{ borderBottom: "solid 1px #8c00ff", boxShadow: "none" }}
      _placeholder={{color: '#555555', textShadow: "none"}}
    />
  );
};

export default QRFormTextInput;
