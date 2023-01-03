import React from "react";
import { chakra } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <chakra.main paddingY={24}>
      <Navbar />
      {children}
    </chakra.main>
  );
};

export default Layout
