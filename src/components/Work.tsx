import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import WorkCard from "./WorkCard";
import { WorkItem } from "../types/portfolioData";
import worksData from "../assets/json/worksData.json";
import ViewMoreButton from "./ViewMoreButton";

const Works: React.FC = () => {
  const workItems: WorkItem[] = worksData;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/works");
  };

  return (
    <Box py={10}>
      <Heading size="sm" mb={4}>
        実績
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, xl: 3 }}
        justifyItems="center"
        spacing={5}
      >
        {workItems.slice(0, 6).map((work) => (
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
