import React, { useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CustomCSS } from "../styles/CustomCSS";
import { ArtItem } from "../types/portfolioData";

interface ImageModalProps {
  Art: ArtItem;
}

const ImageModal: React.FC<ImageModalProps> = ({ Art }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Image
        src={process.env.PUBLIC_URL + Art.image}
        alt={Art.title}
        onClick={onOpen}
        cursor="pointer"
        sx={CustomCSS.ArtImage}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent sx={CustomCSS.ArtModal}>
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
  );
};

export default ImageModal;
