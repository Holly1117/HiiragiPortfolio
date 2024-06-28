import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { customCSS } from "../styles/customCSS";

const Footer: React.FC = () => {
  return (
    <Box as="footer" sx={customCSS.footerStyle}>
      <Flex justify="center">
        <Text fontSize="sm">© hiiragi.dev All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
