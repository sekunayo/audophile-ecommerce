import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const locationHeader = css({
  color: colors.black,
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "44px",
  letterSpacing: "1.429px",
  textTransform: "uppercase",
  width: "70%",
});

const locationText = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  width: "70%",
});

const location = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridColumnGap: "30px",
  height: "100vh",
  alignItems: "center",
});

const locationImage = css({
  height: "70vh",
  borderRadius: "8px",

  "& img": {
    width: "100%",
    borderRadius: "8px",
  },
});

const locationTextContainer = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "32px",
});

const emphasis = css({
  color: colors.primary01,
});

export const styles = {
  locationHeader,
  locationText,
  location,
  locationImage,
  locationTextContainer,
  emphasis,
};
