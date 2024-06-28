import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
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
      <SimpleGrid minChildWidth="120px" spacing={4}>
        {techItem.map((tech) => (
          <TechCard key={tech.name} Tech={tech} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechStack;
