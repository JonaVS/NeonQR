import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

type Props = {
  colorMode: string;
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: Props) => ({
      body: {
        background:
          (props.colorMode === "dark" ||
          props.colorMode === "light") &&
            "linear-gradient(90deg, rgba(18,17,42,1) 6%, rgba(14,14,15,1) 56%, rgba(0,40,48,1) 96%)",
      },
    }),
  },
  colors: {
    theme: {
      cyan: '#00ffff',
      purple: '#8c00ff',
      pink: '#f10ade',
    },
  },
});

export default theme;