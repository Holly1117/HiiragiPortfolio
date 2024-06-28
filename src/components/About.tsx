import React from "react";
import { Box, Avatar, ScaleFade, Heading, Text, Flex } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Box textAlign="left" mt="100px">
      <Heading
        size="md"
        mb={6}
        mx="auto"
        textAlign={{ base: "center", sm: "left" }}
      >
        自己紹介
      </Heading>
      <ScaleFade initialScale={0.5} in={true}>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          alignItems={{ base: "center", sm: "center" }}
        >
          <Avatar size="xl" mr={{ base: 0, sm: 10 }} />
          <Box mt={{ base: 4, sm: 0 }}>
            <Heading
              mt={2}
              size="md"
              textAlign={{ base: "center", sm: "left" }}
            >
              柊 琴音
            </Heading>
            <Heading
              mt={1}
              mb={4}
              size="xs"
              fontWeight="none"
              textAlign={{ base: "center", sm: "left" }}
            >
              Hiiragi Kotone
            </Heading>
            <Text mt={1} fontSize="sm" color="#262626">
              寿司しか勝たん。
            </Text>
          </Box>
        </Flex>
      </ScaleFade>
    </Box>
  );
};

export default About;
