import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import { customCSS } from "../styles/customCSS";

interface CategoryTabsProps<T> {
  items: T[];
  minItemWidth: string;
  categories: string[];
  CardComponent: React.FC<{ item: T }>;
}

const CategoryTabs = <T extends { category: string }>({
  items,
  minItemWidth,
  categories,
  CardComponent,
}: CategoryTabsProps<T>) => {
  return (
    <Tabs variant="unstyled">
      <TabList justifyContent="center">
        {categories.map((category, index) => (
          <Tab
            key={index}
            sx={customCSS.tabButtonStyle}
            _selected={customCSS.tabSelectedStyle}
          >
            {category}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {categories.map((category, index) => {
          const filteredItems =
            category === "全て"
              ? items
              : items.filter(
                  (item) => item.category === category.toLowerCase()
                );
          return (
            <TabPanel key={index} px={0}>
              <SimpleGrid
                minChildWidth={minItemWidth}
                justifyItems="center"
                spacing={5}
              >
                {filteredItems.map((item, idx) => (
                  <CardComponent key={idx} item={item} />
                ))}
              </SimpleGrid>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default CategoryTabs;
