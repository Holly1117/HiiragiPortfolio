import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#191919",
        color: "#d4d4d4",
      },
    },
  },
});

const Header = {
  backdropFilter: "blur(10px)",
  w: "90%",
  maxW: 800,
  m: "auto",
  border: "1px solid #262626",
  rounded: 30,
  mt: 5,
};

const HeaderButton = {
  color: "#d4d4d4",
  bg: "none",
};

const Footer = {
  bg: "#191919",
  color: "#d4d4d4",
};

const TechCard = {
  bg: "#262626",
  color: "#d4d4d4",
  p: 2,
  rounded: 3,
  boxShadow:
    "rgba(15, 15, 15, 0.2) 0px 0px 0px 1px, rgba(15, 15, 15, 0.2) 0px 2px 4px",
};

const WorkCard = {
  bg: "#262626",
  color: "#d4d4d4",
  rounded: 3,
  boxShadow:
    "rgba(15, 15, 15, 0.2) 0px 0px 0px 1px, rgba(15, 15, 15, 0.2) 0px 2px 4px",
};

const WorkImage = {
  maxH: "130px",
};

const ArtImage = {
  bg: "#262626",
  maxW: "100px",
  minW: "100px",
  maxH: "100px",
  minH: "100px",
  rounded: 3,
};

const ArtModal = {
  rounded: 3,
  bg: "#262626",
  color: "#d4d4d4",
};

const Tabs = {
  justifyContent: "center !important",
};

const TabButton = {
  color: "#7F7F7F",
  fontSize: "xs",
  fontWeight: "bold",
};

const TabSelected = {
  bg: "#262626",
  color: "#d4d4d4",
  rounded: 3,
  fontSize: "xs",
};

export const CustomCSS = {
  Theme,
  Header,
  HeaderButton,
  Footer,
  TechCard,
  WorkCard,
  WorkImage,
  ArtImage,
  ArtModal,
  Tabs,
  TabButton,
  TabSelected,
};
