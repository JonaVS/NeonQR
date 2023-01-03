import { Flex, Text } from "@chakra-ui/react";

const Navbrand = () => {
  return (
    <Flex align="center">
      <Text
        fontSize="xl"
        fontFamily="monoton"
        textShadow="0 0 5px #10ddd3, 0 0 10px #10ddd3, 0 0 10px #10ddd3, 0 0 20px #10ddd3"
        marginLeft="10px"
      >
        Neon
        <Text
          as="span"
          textShadow="0 0 5px #9131e0, 0 0 10px #9131e0, 0 0 10px #9131e0, 0 0 20px #9131e0"
          marginLeft="2px"
        >
          QR
        </Text>
      </Text>
    </Flex>
  );
};

export default Navbrand;
