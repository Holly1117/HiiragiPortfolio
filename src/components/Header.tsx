import React, { useState } from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { CustomCSS } from "../styles/CustomCSS";
import { CopyIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const Header = () => {
  const toast = useToast();
  const [textToCopy] = useState("https://hiiragi.dev");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    toast({
      title: "URLをコピーしました。",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <Box
      pl={7}
      pr={3}
      py={2}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      sx={CustomCSS.Header}
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold" align="center">
          <Link to="/">Hiiragi Portfolio</Link>
        </Text>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <IconButton
            variant="ghost"
            aria-label="domain copy"
            icon={<CopyIcon />}
            sx={CustomCSS.HeaderButton}
            fontSize={22}
            _hover={{ backgroundColor: "transparent" }}
          />
        </CopyToClipboard>
      </Flex>
    </Box>
  );
};

export default Header;
