import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  ScaleFade,
  Card,
} from "@chakra-ui/react";
import experiencesData from "../assets/json/experiencesData.json";
import { WorkItem } from "../types/portfolioData";
import { customCSS } from "../styles/customCSS";
import { Helpers } from "../helpers/DataHelpers";

const Experience: React.FC = () => {
  const experienceItems: WorkItem[] = experiencesData;
  return (
    <Box py={10}>
      <Heading size="sm" mb={4}>
        業務経験
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} spacing={4}>
        {experienceItems.map((exp) => (
          <ScaleFade initialScale={0.5} in={true}>
            <Card p={4} sx={customCSS.cardStyle}>
              <Image
                src={process.env.PUBLIC_URL + exp.image}
                alt={exp.title}
                mb={4}
                w={150}
                h={150}
                m="auto"
              />
              <Text fontSize="sm" fontWeight="bold" textAlign="center">
                {exp.title}
              </Text>
              <Text fontSize="xs" mt={2} whiteSpace="pre-line">
                {Helpers.convertAtToNewline(exp.description)}
              </Text>
            </Card>
          </ScaleFade>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Experience;
