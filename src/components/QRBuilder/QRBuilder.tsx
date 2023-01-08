import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import QRCode from "../QRCode/QRCode";
import QRForm from "../QRForm/QRForm";;

const QRBuilder = () => {
  return (
    <Box
      maxW={500}
      m="20px auto 0 auto"
      paddingX={5}
      paddingY={10}
      boxShadow="0 0 15px #000000, 0 0 15px #000000"
      rounded="lg"
    >
      {/*
        The div is needed to export the Code as IMG. 
        For some reason if the div is inside the QRcode component 
        the export generates wrong content.
      */}
      <chakra.div id="to-img-target" p={5}>
        <QRCode />
      </chakra.div>
      <QRForm />
    </Box>
  );
};

export default QRBuilder;
