import React from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Container,
  Link,
  Badge,
  Stack,
  Divider,
  ScaleFade,
} from "@chakra-ui/react";
import ViewMoreButton from "../components/ViewMoreButton";
import { WorkItem } from "../types/portfolioData";
import { customCSS } from "../styles/customCSS";
import worksData from "../assets/json/worksData.json";

const findItemById = (
  id: string | undefined,
  items: WorkItem[]
): WorkItem | undefined => {
  return items.find((item) => item.id === id);
};

const WorkDetail: React.FC = () => {
  let { workid } = useParams<{ workid: string }>();

  if (!workid || !findItemById(workid, worksData)) {
    return <Navigate to="/" />;
  }

  const workItem = findItemById(workid, worksData);

  if (!workItem) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxW="container.md" my="130px" px={0}>
      <ScaleFade initialScale={0.5} in={true}>
        <Box p={4} textAlign="left">
          <Heading size="lg" mb={2}>
            {workItem.title}
          </Heading>
          <Link fontSize="sm" href={workItem.url} isExternal>
            {workItem.url}
          </Link>
          <Box mt={4}>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gridTemplateColumns={{ base: "1fr", md: "1fr 3fr" }}
              mb={{ base: 4, md: 3 }}
            >
              <Text sx={customCSS.detailTextStyle}>説明</Text>
              <Text fontSize="sm">{workItem.description}</Text>
            </SimpleGrid>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gridTemplateColumns={{ base: "1fr", md: "1fr 3fr" }}
              mb={{ base: 4, md: 3 }}
            >
              <Text sx={customCSS.detailTextStyle}>担当</Text>
              <Text fontSize="sm">{workItem.role}</Text>
            </SimpleGrid>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gridTemplateColumns={{ base: "1fr", md: "1fr 3fr" }}
              mb={{ base: 4, md: 3 }}
            >
              <Text sx={customCSS.detailTextStyle}>技術スタック</Text>
              <Stack direction="row" sx={{ flexWrap: "nowrap" }}>
                {workItem.language.map((language, index) => (
                  <Badge key={index} sx={customCSS.badgeStyle}>
                    {language}
                  </Badge>
                ))}
              </Stack>
            </SimpleGrid>
            {workItem.members ? (
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gridTemplateColumns={{ base: "1fr", md: "1fr 3fr" }}
                mb={{ base: 4, md: 3 }}
              >
                <Text sx={customCSS.detailTextStyle}>メンバー</Text>
                <Stack direction="row" sx={{ flexWrap: "nowrap" }}>
                  {workItem.members.map((member, index) => (
                    <Link
                      key={index}
                      fontSize="sm"
                      href={member.url}
                      isExternal
                    >
                      {`${member.name}様`}
                    </Link>
                  ))}
                </Stack>
              </SimpleGrid>
            ) : (
              <></>
            )}
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gridTemplateColumns={{ base: "1fr", md: "1fr 3fr" }}
              mb={{ base: 4, md: 3 }}
            >
              <Text sx={customCSS.detailTextStyle}>リポジトリ</Text>
              {workItem.repository ? (
                <Link fontSize="sm" href={workItem.repository} isExternal>
                  {workItem.repository}
                </Link>
              ) : (
                <Text fontSize="sm">非公開</Text>
              )}
            </SimpleGrid>
          </Box>
          <Divider my={7} />
          <Box>
            <Image
              src={process.env.PUBLIC_URL + workItem.image}
              sx={customCSS.detailImageStyle}
            />
          </Box>
          <Box mt={20} mx="auto" textAlign="center">
            <ViewMoreButton toLink="/works" ButtonName="実績一覧" />
          </Box>
        </Box>
      </ScaleFade>
    </Container>
  );
};

export default WorkDetail;
