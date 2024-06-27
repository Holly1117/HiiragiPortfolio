import React from "react";
import { Card, Image, Text } from "@chakra-ui/react";
import { WorkItem } from "../types/portfolioData";
import { CustomCSS } from "../styles/CustomCSS";

interface WorkCardProps {
  Work: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ Work }) => {
  return (
    <Card sx={CustomCSS.WorkCard}>
      <Image
        src={Work.image}
        alt={Work.title}
        mb={2}
        roundedTop={3}
        sx={CustomCSS.WorkImage}
      />
      <Text fontSize="sm" fontWeight="bold" textAlign={"center"}>
        {Work.title}
      </Text>
      <Text fontSize="xs" py={2} px={3} textAlign={"center"}>
        {Work.description}
      </Text>
    </Card>
  );
};

export default WorkCard;
