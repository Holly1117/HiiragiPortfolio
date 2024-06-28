import React from "react";
import { Card, Image, Text, ScaleFade } from "@chakra-ui/react";
import { WorkItem } from "../types/portfolioData";
import { customCSS } from "../styles/customCSS";

interface WorkCardProps {
  Work: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ Work }) => {
  return (
    <ScaleFade initialScale={0.5} in={true}>
      <Card sx={customCSS.cardStyle} _hover={customCSS.hoverEffectStyle}>
        <Image
          src={process.env.PUBLIC_URL + Work.image}
          alt={Work.title}
          sx={customCSS.imageStyle}
        />
        <Text fontSize="sm" fontWeight="bold" textAlign="center" mb={2}>
          {Work.title}
        </Text>
      </Card>
    </ScaleFade>
  );
};

export default WorkCard;
