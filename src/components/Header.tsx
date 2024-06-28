import React, { useState } from "react";
import { Box, Flex, Text, IconButton, ScaleFade } from "@chakra-ui/react";
import { customCSS } from "../styles/customCSS";
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
    <ScaleFade initialScale={0.5} in={true}>
      <Box sx={customCSS.headerStyle}>
        <Flex justify="space-between" align="center">
          <Text
            fontSize="lg"
            fontWeight="bold"
            align="center"
            _hover={customCSS.headerHoverStyle}
          >
            <Link to="/">Hiiragi Portfolio</Link>
          </Text>
          <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
            <IconButton
              variant="ghost"
              aria-label="domain copy"
              icon={<CopyIcon />}
              sx={customCSS.headerButtonStyle}
              fontSize={22}
              _hover={customCSS.headerHoverStyle}
            />
          </CopyToClipboard>
        </Flex>
      </Box>
    </ScaleFade>
  );
};

export default Header;
