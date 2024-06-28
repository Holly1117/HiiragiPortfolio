import React from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { customCSS } from "../styles/customCSS";
import { ArtItem } from "../types/portfolioData";

interface ImageModalProps {
  Art: ArtItem;
}

const ImageModal: React.FC<ImageModalProps> = ({ Art }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ScaleFade initialScale={0.5} in={true}>
      <Box>
        <Image
          src={process.env.PUBLIC_URL + Art.image}
          alt={Art.title}
          onClick={onOpen}
          sx={customCSS.artImageStyle}
          _hover={customCSS.hoverEffectStyle}
        />
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent sx={customCSS.modalStyle}>
            <Image
              src={process.env.PUBLIC_URL + Art.image}
              alt={Art.title}
              roundedTop={3}
            />
            <Text textAlign="center" m={3} fontWeight="bold">
              {Art.title}
            </Text>
          </ModalContent>
        </Modal>
      </Box>
    </ScaleFade>
  );
};

export default ImageModal;
