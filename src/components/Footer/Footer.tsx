import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="#00000049"
      position="absolute"
      bottom={0}
      width="full"
      padding={4}
      justifyContent={["center", "center", "flex-end"]}
      fontFamily="Bakbak One"
    >
      <Link href="https://github.com/JonaVS" isExternal>
        <Text as="span" textShadow="0 0 5px #8c00ff, 0 0 10px #8c00ff">
          Developed by JonaVS
        </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
