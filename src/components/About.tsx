import React from "react";
import { Box, Avatar, ScaleFade, Heading, Text } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Box textAlign="center" mt="100px">
      <ScaleFade initialScale={0.5} in={true}>
        <Box>
          <Avatar
            size="xl"
            src={process.env.PUBLIC_URL + "/images/hiiragi_icon.png"}
          />
          <Box>
            <Heading my={4} size="lg">
              柊 琴音
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
            <Text mt={2} fontSize="xs" color="#262626">
              寿司しか勝たん。
            </Text>
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default About;
