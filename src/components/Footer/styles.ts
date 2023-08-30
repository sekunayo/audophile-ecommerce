import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const footer = css({
  width: "100%",
  height: "365px",
  backgroundColor: colors.dark02,
});

const footerContainer = css({
  width: "75vw",
  margin: "0 auto",
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  padding: "48px 0px",
  position: "relative",
});

const footerText = css({
  display: "flex",
  flexDirection: "column",
  gap: "56px",
});

const footerDescription = css({
  color: "rgba(255,255,255,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  width: "70%",
});

const footerCaption = css({
  color: "rgba(255,255,255,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
});

const footerIcons = css({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "20px",
});

const footerNavListItem = css({
  color: colors.white,
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  transition: "color 0.5s ease-in-out",
  cursor: "pointer",

  "&.active": {
    color: colors.primary01,
  },

  "&:hover": {
    color: colors.primary01,
  },
});

const footerNavList = css({
  display: "flex",
  gap: "34px",
});

const footerNavContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "56px",
});

const footerHorizontalBox = css({
  width: "101px",
  height: "4px",
  backgroundColor: colors.primary01,
  position: "absolute",
  top: 0,
  left: 0,
});

export const styles = {
  footer,
  footerContainer,
  footerDescription,
  footerCaption,
  footerText,
  footerIcons,
  footerNavList,
  footerNavListItem,
  footerNavContainer,
  footerHorizontalBox,
};
