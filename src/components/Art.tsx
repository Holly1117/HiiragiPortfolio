import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ImageModal from "./ImageModal";
import ViewMoreButton from "./ViewMoreButton";
import { ArtItem } from "../types/portfolioData";
import artsData from "../assets/json/artsData.json";

const Art: React.FC = () => {
  const artItems: ArtItem[] = artsData;

  return (
    <Box py={10}>
      <Heading size="sm" mb={4}>
        アート
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        justifyItems="center"
        spacing={5}
      >
        {artItems.slice(0, 8).map((art) => (
          <ImageModal key={art.title} Art={art} />
        ))}
      </SimpleGrid>
      <Box mt={5} mx="auto" textAlign="center">
        <ViewMoreButton toLink="arts" ButtonName="作品一覧" />
      </Box>
    </Box>
  );
};

export default Art;
