import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const productCardImage = css({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  backgroundColor: "#F1F1F1",
});

const productCardContainer = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridColumnGap: "100px",
});

const productCard = css({
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

const productCardText = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "32px",
});

const productCardTextCaption = css({
  color: colors.primary01,
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "10px",
  textTransform: "uppercase",
});

const productCardTextHeading = css({
  color: colors.black,
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "44px",
  letterSpacing: "1.429px",
  textTransform: "uppercase",
  width: "70%",
});

const productCardTextParagraph = css({
  color: "rgba(0, 0, 0, 0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  width: "70%",
});

export const styles = {
  productCard,
  productCardImage,
  productCardText,
  productCardTextCaption,
  productCardTextHeading,
  productCardTextParagraph,
  productCardContainer,
};
