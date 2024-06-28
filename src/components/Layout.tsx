import React, { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
