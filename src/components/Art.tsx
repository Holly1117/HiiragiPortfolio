import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ImageModal from "./ImageModal";
import ViewMoreButton from "./ViewMoreButton";
import { ArtItem } from "../types/portfolioData";
import artsData from "../assets/json/artsData.json";

const Art: React.FC = () => {
  const artItems: ArtItem[] = artsData;

  return (
    <Box py={10} textAlign={{ base: "center", sm: "left" }}>
      <Heading size="md" mb={6}>
        作品
      </Heading>
      <SimpleGrid minChildWidth="100px" justifyItems="center" spacing={3}>
        {artItems.slice(0, 12).map((art) => (
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
