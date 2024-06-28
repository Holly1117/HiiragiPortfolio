import React, { useEffect, useState } from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import CategoryTabs from "../components/CategoryTabs";
import ViewMoreButton from "../components/ViewMoreButton";
import { ArtItem } from "../types/portfolioData";
import artsData from "../assets/json/artsData.json";
import ImageModal from "../components/ImageModal";

const ArtCard: React.FC<{ item: ArtItem }> = ({ item }) => (
  <ImageModal Art={item} />
);

const Arts: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = [
      "全て",
      ...Array.from(
        new Set(
          artsData.map(
            (item) =>
              item.category.charAt(0).toUpperCase() + item.category.slice(1)
          )
        )
      ),
    ];
    setCategories(uniqueCategories);
  }, []);

  return (
    <Container maxW="container.lg" my="130px" px={0}>
      <Heading size="md" mb="20px" textAlign="center">
        作品一覧
      </Heading>
      <CategoryTabs
        items={artsData}
        minItemWidth="100px"
        categories={categories}
        CardComponent={ArtCard}
      />
      <Box mt={5} mx="auto" textAlign="center">
        <ViewMoreButton toLink="/" ButtonName="戻る" />
      </Box>
    </Container>
  );
};

export default Arts;
