import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Box } from "@chakra-ui/react";
import QRCode from "../QRCode/QRCode";
import QRForm from "../QRForm/QRForm";

const QRBuilder = () => {
  const { colors, glow } = useSelector((state: RootState) => state.qrform);

  return (
    <Box
      maxW={500}
      m="20px auto 0 auto"
      paddingX={5}
      paddingY={10}
      boxShadow="0 0 15px #000000, 0 0 15px #000000"
      rounded="lg"
    >
      <QRCode
        bgColor={colors.bgColor}
        color={colors.contentColor}
        glow={glow}
      />
      <QRForm />
    </Box>
  );
};

export default QRBuilder;
