import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import TechCard from "./TechCard";
import { TechItem } from "../types/portfolioData";
import certificationsData from "../assets/json/certificationsData.json";

const Certification: React.FC = () => {
  const tecmItems: TechItem[] = certificationsData;
  return (
    <Box py={10}>
      <Heading size="sm" mb={4}>
        資格
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {tecmItems.map((tech) => (
          <TechCard key={tech.name} Tech={tech} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Certification;
