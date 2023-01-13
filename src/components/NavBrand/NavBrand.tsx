import { Flex, Text } from "@chakra-ui/react";

const shadowColor1 = "#10ddd3";
const shadowColor2 = "#9131e0";

const Navbrand = () => {
  return (
    <Flex align="center">
      <Text
        fontSize="xl"
        fontFamily="monoton"
        textShadow={`0 0 5px ${shadowColor1}, 0 0 10px ${shadowColor1}, 0 0 20px ${shadowColor1}`}
        marginLeft="10px"
        cursor="default"
        userSelect="none"
      >
        Neon
        <Text
          as="span"
          textShadow={`0 0 5px ${shadowColor2}, 0 0 10px ${shadowColor2}, 0 0 20px ${shadowColor2}`}
          marginLeft="2px"
        >
          QR
        </Text>
      </Text>
    </Flex>
  );
};

export default Navbrand;
