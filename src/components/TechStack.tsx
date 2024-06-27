import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import TechCard from "./TechCard";
import { TechItem } from "../types/portfolioData";
import techStackData from "../assets/json/techStackData.json";

const TechStack: React.FC = () => {
  const techItem: TechItem[] = techStackData;
  return (
    <Box py={10}>
      <Heading size="sm" mb={4}>
        技術スタック
      </Heading>
      <SimpleGrid columns={{ base: 3, md: 5, lg: 6 }} spacing={4}>
        {techItem.map((tech) => (
          <TechCard key={tech.name} Tech={tech} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechStack;
