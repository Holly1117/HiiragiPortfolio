import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Image,
  Text,
  ScaleFade,
  Box,
  Badge,
  CardFooter,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { WorkItem } from "../types/portfolioData";
import { customCSS } from "../styles/customCSS";

interface WorkCardProps {
  Work: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ Work }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${Work.id}`);
  };
  return (
    <ScaleFade initialScale={0.5} in={true}>
      <Card
        sx={customCSS.workCardStyle}
        _hover={customCSS.hoverEffectStyle}
        onClick={handleClick}
      >
        <Image
          src={process.env.PUBLIC_URL + Work.image}
          alt={Work.title}
          sx={customCSS.imageStyle}
        />
        <CardBody py={2}>
          <Text fontSize="sm" fontWeight="bold">
            {Work.title}
          </Text>
          <Text fontSize="0.75rem" pt={1}>
            {Work.description}
          </Text>
        </CardBody>
        <CardFooter pt={1} pb={3}>
          <Stack direction="row" sx={{ flexWrap: "nowrap" }}>
            {Work.language.map((language, index) => (
              <Badge key={index} sx={customCSS.cardBadgeStyle}>
                {language}
              </Badge>
            ))}
          </Stack>
        </CardFooter>
      </Card>
    </ScaleFade>
  );
};

export default WorkCard;
