import React, { useEffect, useState } from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import CategoryTabs from "../components/CategoryTabs";
import WorkCard from "../components/WorkCard";
import { WorkItem } from "../types/portfolioData";
import worksData from "../assets/json/worksData.json";
import ViewMoreButton from "../components/ViewMoreButton";

const Card: React.FC<{ item: WorkItem }> = ({ item }) => (
  <WorkCard Work={item} />
);

const Works: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = [
      "全て",
      ...Array.from(
        new Set(
          worksData.map(
            (item) =>
              item.category.charAt(0).toUpperCase() + item.category.slice(1)
          )
        )
      ),
    ];
    setCategories(uniqueCategories);
  }, []);

  return (
    <Container maxW="container.xl" my="130px">
      <Heading size="md" mb="20px" textAlign="center">
        実績一覧
      </Heading>
      <CategoryTabs
        items={worksData}
        minItemWidth="300px"
        categories={categories}
        CardComponent={Card}
      />
      <Box mt={5} mx="auto" textAlign="center">
        <ViewMoreButton toLink="/" ButtonName="戻る" />
      </Box>
    </Container>
  );
};

export default Works;
