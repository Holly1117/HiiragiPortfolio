import React from "react";
import { Box, Avatar, ScaleFade, Heading, Text, Flex } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Box textAlign="left" mt="100px">
      <Heading size="md" mb={6} mx="auto">
        自己紹介
      </Heading>
      <ScaleFade initialScale={0.5} in={true}>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          alignItems={{ base: "left", sm: "center" }}
        >
          <Avatar
            size="xl"
            src={process.env.PUBLIC_URL + "/images/hiiragi_icon.png"}
            mr={{ base: 0, sm: 10 }}
          />
          <Box mt={{ base: 4, sm: 0 }}>
            <Heading mt={2} size="md">
              柊 琴音
            </Heading>
            <Heading mt={1} mb={4} size="xs" fontWeight="none">
              Hiiragi Kotone
            </Heading>
            <Text fontSize="sm">トヨタ自動車に期間工として3年間勤務。</Text>
            <Text fontSize="sm">
              その後、趣味であるプログラミングを行うためIT企業に転職。
            </Text>
            <Text my={2} fontSize="sm">
              エンジニアとしてより多くのプロジェクトに関わる中で、より柔軟な働き方を求め、独立を決意。
            </Text>
            <Text fontSize="sm">
              現在は個人としてWebとアプリ開発、ドット絵制作を行っております。
            </Text>
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
