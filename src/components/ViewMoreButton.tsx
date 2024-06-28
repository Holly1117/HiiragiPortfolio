import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { customCSS } from "../styles/customCSS";
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
    <Button
      size="md"
      sx={customCSS.viewMoreButtonStyle}
      onClick={handleClick}
      _hover={customCSS.hoverEffectStyle}
    >
      <Text fontSize="sm">{ButtonName}</Text>
    </Button>
  );
};

export default ViewMoreButton;
