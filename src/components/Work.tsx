import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import WorkCard from "./WorkCard";
import { WorkItem } from "../types/portfolioData";
import worksData from "../assets/json/worksData.json";
import ViewMoreButton from "./ViewMoreButton";

const Works: React.FC = () => {
  const workItems: WorkItem[] = worksData;

  return (
    <Box py={10} textAlign={{ base: "center", sm: "left" }}>
      <Heading size="md" mb={6}>
        実績
      </Heading>
      <SimpleGrid minChildWidth="300px" justifyItems="center" spacing={5}>
        {workItems.slice(0, 4).map((work) => (
          <WorkCard key={work.title} Work={work} />
        ))}
      </SimpleGrid>
      <Box mt={5} mx="auto" textAlign="center">
        <ViewMoreButton toLink="works" ButtonName="実績一覧" />
      </Box>
    </Box>
  );
};

export default Works;
