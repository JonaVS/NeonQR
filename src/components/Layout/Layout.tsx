import React from "react";
import { chakra } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <chakra.main
      position="relative"
      minH="100vh"
      paddingTop="80px"
      paddingBottom="110px"
    >
      <Navbar />
      {children}
      <Footer />
    </chakra.main>
  );
};

export default Layout;
