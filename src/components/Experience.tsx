import React from "react";
import { Box, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import experienceData from "../assets/json/experienceData.json";
import { WorkItem } from "../types/portfolioData";
import { CustomCSS } from "../styles/CustomCSS";

const Experience: React.FC = () => {
  const experienceItems: WorkItem[] = experienceData;
  return (
    <Box py={10}>
      <Heading size="sm" mb={4}>
        業務経験
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} spacing={4}>
        {experienceItems.map((exp) => (
          <Box p={5} sx={CustomCSS.WorkCard}>
            <Image
              src={process.env.PUBLIC_URL + exp.image}
              alt={exp.title}
              mb={4}
              p={5}
              w={150}
              h={150}
              m="auto"
            />
            <Text fontSize="sm" fontWeight="bold" textAlign={"center"}>
              {exp.title}
            </Text>
            <Text fontSize="xs" mt={2} textAlign={"center"}>
              {exp.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Experience;
