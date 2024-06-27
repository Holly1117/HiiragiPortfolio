import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { CustomCSS } from "../styles/CustomCSS";
import { useNavigate } from "react-router-dom";
interface ViewMoreButtonProps {
  toLink: string;
  ButtonName: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  toLink,
  ButtonName,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(toLink);
  };
  return (
    <Button size="lg" sx={CustomCSS.ArtModal} onClick={handleClick}>
      <Text fontSize="sm">{ButtonName}</Text>
    </Button>
  );
};

export default ViewMoreButton;
