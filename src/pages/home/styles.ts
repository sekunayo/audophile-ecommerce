import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const home = css({
  minHeight: "100vh",
});
const homeHero = css({
  height: "100vh",
  backgroundColor: colors.dark01,
});

const homeHeroBox = css({
  width: "70vw",
  margin: "0 auto",
  color: colors.white,
  overflowY: "hidden",
});

const homeHeroBoxContent = css({
  display: "flex",
  height: "calc(100vh - 100px)",
  alignItems: "center",
});

const homeHeroBoxContentText = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  "& button": {
    marginTop: "20px",
  },
});

const homeHeroBoxContentTextCaption = css({
  color: "rgba(255,255,255,0.4964)",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "10px",
  textTransform: "uppercase",
});

const homeHeroBoxContentTextHeading = css({
  color: "#FFF",
  fontSize: "56px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "58px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  width: "90%",
});

const homeHeroBoxContentTextParagraph = css({
  color: "rgba(255,255,255,0.75)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  width: "80%",
});

const homeHeroBoxImage = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  background:
    'url("../../assets/images/home/desktop/image-hero.jpg"), #141414 0px 0px / 100% 100% no-repeat',
});

const homeSpeaker = css({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  backgroundColor: "#F1F1F1",
  position: "relative",

  "& img ": {
    borderRadius: "8px",
    width: "100%",
  },
});

const homeBody = css({
  margin: "0 auto",
  width: "70vw",
});

const homeSpeakerText = css({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  justifyContent: "center",
  paddingLeft: "97px",
});

const homeTextHeading = css({
  color: "#000",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "2px",
  textTransform: "uppercase",
});

const homeBigSpeaker = css({
  backgroundColor: colors.primary01,
  width: "100%",
  height: "560px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  borderRadius: "8px",
  gap: "100px",
});
const homeEarphones = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridColumnGap: "30px",
});

const homeBigSpeakerImage = css({
  width: "410.234px",
  position: "relative",

  "& img ": {
    position: "absolute",
    left: "100px",
    bottom: "0px",
  },
});

const homeCategory = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridColumnGap: "30px",
  margin: "150px 0px",
});

const homeBigSpeakerText = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "24px",
});

const homeBigSpeakerTextHeading = css({
  color: "#FFF",
  fontSize: "56px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "58px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  width: "50%",
});

const homeBigSpeakerButton = css({
  backgroundColor: colors.black,

  "&:hover": {
    backgroundColor: colors.dark03,
  },
});

const homeBodyText = css({
  display: "flex",
  flexDirection: "column",
  gap: "48px",
});

const homeEarphonesImage = css({
  width: "100%",
  height: "auto",
  borderRadius: "8px",

  "& img": {
    width: "100%",
    borderRadius: "8px",
  },
});

const homeEarphonesText = css({
  borderRadius: "8px",
  backgroundColor: "#F1F1F1",
  paddingLeft: "97px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "32px",
  width: "100%",
});

const homeBigSpeakerTextParagraph = css({
  color: "rgba(255,255,255,0.75)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  width: "50%",
});

export const styles = {
  homeHero,
  homeHeroBox,
  homeHeroBoxContent,
  homeHeroBoxContentText,
  homeHeroBoxContentTextCaption,
  homeHeroBoxContentTextHeading,
  homeHeroBoxContentTextParagraph,
  homeHeroBoxImage,
  homeSpeaker,
  home,
  homeCategory,
  homeBody,
  homeBigSpeakerButton,
  homeSpeakerText,
  homeTextHeading,
  homeEarphones,
  homeEarphonesText,
  homeEarphonesImage,
  homeBigSpeaker,
  homeBigSpeakerImage,
  homeBigSpeakerText,
  homeBigSpeakerTextHeading,
  homeBigSpeakerTextParagraph,
  homeBodyText,
};
