import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const productCard = css({
  borderRadius: "8px",
  backgroundColor: "#F1F1F1",
  width: "100%",
  height: "204px",
  position: "relative",
});

const productCardHeading = css({
  color: colors.black,
  textAlign: "center",
  fontSize: "18px",
  fontStyle: "normal",
  fontweight: 700,
  lineHeight: "normal",
  letterSpacing: "1.286px",
  textTransform: "uppercase",
});

const productCardImage = css({
  position: "absolute",
  top: "-15%",
  left: "50%",
  transform: "translate(-50%, -15%)",
});

const productCardText = css({
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translate(-50%, 0%)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  justifyContent: "center",
  alignItems: "center",
});

const productCardLink = css({
  color: "rgba(0,0,0,0.5)",
  textAlign: "center",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1.286px",
  textTransform: "uppercase",

  "&:hover": {
    color: colors.primary01,
  },
});

export const styles = {
  productCard,
  productCardHeading,
  productCardImage,
  productCardText,
  productCardLink,
};
