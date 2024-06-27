import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import WorkCard from "../components/WorkCard";
import { WorkItem } from "../types/portfolioData";
import worksData from "../assets/json/worksData.json";
import { CustomCSS } from "../styles/CustomCSS";

const Works: React.FC = () => {
  const workItems: WorkItem[] = worksData;

  const websiteWorks = workItems.filter((work) => work.category == "web");
  const applicationWorks = workItems.filter((work) => work.category == "app");
  const otherWorks = workItems.filter((work) => work.category == "other");

  return (
    <Box my={20}>
      <Heading size="md" mb="50px" textAlign="center">
        実績一覧
      </Heading>
      <Tabs variant="unstyled">
        <TabList justifyContent="center">
          <Tab sx={CustomCSS.TabButton} _selected={CustomCSS.TabSelected}>
            全て
          </Tab>
          <Tab sx={CustomCSS.TabButton} _selected={CustomCSS.TabSelected}>
            ウェブサイト
          </Tab>
          <Tab sx={CustomCSS.TabButton} _selected={CustomCSS.TabSelected}>
            アプリケーション
          </Tab>
          <Tab sx={CustomCSS.TabButton} _selected={CustomCSS.TabSelected}>
            その他
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              columns={{ base: 1, sm: 2, xl: 3 }}
              justifyItems="center"
              spacing={5}
            >
              {workItems.map((work) => (
                <WorkCard key={work.title} Work={work} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={{ base: 1, sm: 2, xl: 3 }}
              justifyItems="center"
              spacing={5}
            >
              {websiteWorks.map((work) => (
                <WorkCard key={work.title} Work={work} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={{ base: 1, sm: 2, xl: 3 }}
              justifyItems="center"
              spacing={5}
            >
              {applicationWorks.map((work) => (
                <WorkCard key={work.title} Work={work} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={{ base: 1, sm: 2, xl: 3 }}
              justifyItems="center"
              spacing={5}
            >
              {otherWorks.map((work) => (
                <WorkCard key={work.title} Work={work} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Works;
