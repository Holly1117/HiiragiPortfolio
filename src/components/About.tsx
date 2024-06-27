import React from "react";
import { Box, Flex, Avatar, VStack, Heading, Text } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Box textAlign="center" mt="100px">
      <Box>
        <Avatar size="xl" src="/images/hiiragi_icon.png" />
        <Box>
          <Heading mt={4} size="lg">
            柊 琴音
          </Heading>
          <Text mt={1} mb={4} fontSize="sm">
            自宅警備員
          </Text>
          <Text fontSize="sm">
            高校を卒業後、愛知県のトヨタ自動車で3年間勤務しましたが、プログラマーの夢を追い続け、その後東京のIT企業に転職しました。
            刺激的なプロジェクトに携わりながら成長することができましたが、より柔軟な働き方を求めて会社を離れ、現在は自宅警備員として活動しています。
          </Text>
          <Text fontSize="sm">
            趣味は多岐にわたり、プログラミング、ゲーム、読書、映画鑑賞、温泉など、10以上の多趣味があります。
          </Text>
          <Text fontSize="sm">好きな食べ物は寿司。週に2回は食べています。</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
