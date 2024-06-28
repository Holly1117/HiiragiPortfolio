import { extendTheme } from "@chakra-ui/react";
import { colors } from "../types/colors";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollbarColor: `${colors.secondary} ${colors.primary}`,
        margin: 0,
      },
      body: {
        backgroundColor: colors.primary,
        color: colors.text,
      },
    },
  },
});

const headerStyle = {
  backdropFilter: "blur(10px)",
  width: "90%",
  maxWidth: 800,
  margin: "auto",
  border: `1px solid ${colors.secondary}`,
  borderRadius: 30,
  marginTop: 5,
  paddingLeft: 7,
  paddingRight: 3,
  py: 2,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
};

const headerButtonStyle = {
  color: colors.text,
  background: "none",
};

const footerStyle = {
  width: "100%",
  backgroundColor: colors.primary,
  color: colors.text,
  padding: 4,
};

const cardStyle = {
  backgroundColor: colors.secondary,
  color: colors.text,
  borderRadius: 3,
  boxShadow:
    "rgba(15, 15, 15, 0.2) 0px 0px 0px 1px, rgba(15, 15, 15, 0.2) 0px 2px 4px",
};

const imageStyle = {
  backgroundColor: colors.secondary,
  maxHeight: "200px",
  marginButton: 2,
  roundedTop: 3,
};

const artImageStyle = {
  backgroundColor: colors.secondary,
  maxHeight: "100px",
  minHeight: "100px",
  borderRadius: 3,
  cursor: "pointer",
};

const modalStyle = {
  borderRadius: 3,
  backgroundColor: colors.secondary,
  color: colors.text,
};

const tabButtonStyle = {
  color: colors.inactiveText,
  fontSize: "xs",
  fontWeight: "bold",
};

const tabSelectedStyle = {
  backgroundColor: colors.secondary,
  color: colors.text,
  borderRadius: 3,
  fontSize: "xs",
};

const viewMoreButtonStyle = {
  borderRadius: 3,
  backgroundColor: colors.secondary,
  color: colors.text,
  paddingX: 10,
};

const hoverEffectStyle = {
  opacity: 0.7,
  transition: "all 0.4s ease",
};

const headerHoverStyle = {
  opacity: 0.7,
  transition: "all 0.4s ease",
  backgroundColor: "transparent",
};

export const customCSS = {
  theme,
  headerStyle,
  headerButtonStyle,
  footerStyle,
  cardStyle,
  imageStyle,
  artImageStyle,
  modalStyle,
  tabButtonStyle,
  tabSelectedStyle,
  viewMoreButtonStyle,
  hoverEffectStyle,
  headerHoverStyle,
};
