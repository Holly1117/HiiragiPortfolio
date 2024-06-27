import { Box, Flex, Text } from "@chakra-ui/react";
import { CustomCSS } from "../styles/CustomCSS";

const Footer = () => {
  return (
    <Box p={4} mt={8} sx={CustomCSS.Footer}>
      <Flex justify="center">
        <Text fontSize="sm">© hiiragi.dev All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
