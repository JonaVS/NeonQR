import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbrand from "../NavBrand/NavBrand";

const Navbar = () => {
  return (
    <Flex
      bg="#0000005e"
      backdropFilter='auto' 
      backdropBlur='8px'
      p={5}
      justify="space-between"
      alignItems="center"
      position="fixed"
      w="full"
      top={0}
      zIndex="1"
    >
      <Navbrand />
    </Flex>
  );
};

export default Navbar;
