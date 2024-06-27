import React from "react";
import { Card, Text } from "@chakra-ui/react";
import { CustomCSS } from "../styles/CustomCSS";
import { TechItem } from "../types/portfolioData";
interface TechCardProps {
  Tech: TechItem;
}

const TechCard: React.FC<TechCardProps> = ({ Tech }) => {
  return (
    <Card sx={CustomCSS.TechCard} key={Tech.name} variant={"elevated"}>
      <Text fontSize="xs">{Tech.name}</Text>
    </Card>
  );
};

export default TechCard;
