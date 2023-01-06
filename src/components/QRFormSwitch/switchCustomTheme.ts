import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const purply = definePartsStyle({
  thumb: {
    bg: "white",
  },
  track: {
    bg: "gray.700",
    _checked: {
      bg: "#8c00ff",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ variants:{purply}});
