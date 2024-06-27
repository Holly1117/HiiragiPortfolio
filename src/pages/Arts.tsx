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
import ImageModal from "../components/ImageModal";
import { ArtItem } from "../types/portfolioData";
import artsData from "../assets/json/artsData.json";
import { CustomCSS } from "../styles/CustomCSS";

const Arts: React.FC = () => {
  const artItems: ArtItem[] = artsData;

  // カテゴリごとにフィルタリング
  const pixelArts = artItems.filter((art) => art.category == "pixel");
  const otherarts = artItems.filter((art) => art.category == "other");

  return (
    <Box my={20}>
      <Heading size="md" mb="50px" textAlign="center">
        作品一覧
      </Heading>
      <Tabs variant="unstyled">
        <TabList justifyContent="center">
          <Tab sx={CustomCSS.TabButton} _selected={CustomCSS.TabSelected}>
            全て
          </Tab>
          <Tab sx={CustomCSS.TabButton} _selected={CustomCSS.TabSelected}>
            ピクセルアート
          </Tab>
          <Tab sx={CustomCSS.TabButton} _selected={CustomCSS.TabSelected}>
            その他
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4 }}
              justifyItems="center"
              spacing={5}
            >
              {artItems.map((art) => (
                <ImageModal key={art.title} Art={art} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4 }}
              justifyItems="center"
              spacing={5}
            >
              {pixelArts.map((art) => (
                <ImageModal key={art.title} Art={art} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4 }}
              justifyItems="center"
              spacing={5}
            >
              {otherarts.map((art) => (
                <ImageModal key={art.title} Art={art} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Arts;
