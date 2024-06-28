import React from "react";
import { Card, Text, ScaleFade } from "@chakra-ui/react";
import { customCSS } from "../styles/customCSS";
import { TechItem } from "../types/portfolioData";
interface TechCardProps {
  Tech: TechItem;
}

const TechCard: React.FC<TechCardProps> = ({ Tech }) => {
  return (
    <ScaleFade initialScale={0.5} in={true}>
      <Card sx={customCSS.cardStyle} key={Tech.name} variant="elevated" p={2}>
        <Text fontSize="sm">{Tech.name}</Text>
      </Card>
    </ScaleFade>
  );
};

export default TechCard;
