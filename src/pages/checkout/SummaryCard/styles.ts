import { css } from "@emotion/css";
import { colors } from "../../../styles/colors";

const summaryCard = css({
  padding: "32px 33px",
  borderRadius: "8px",
  backgroundColor: "#FFF",
  height: "fit-content",
});

const summaryCardTitle = css({
  color: colors.black,
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1.286px",
  textTransform: "uppercase",
});

const summaryCardProductImage = css({
  width: "64px",
  height: "64px",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const summaryCardProductTitle = css({
  color: colors.black,
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
});

const summaryCardProductPrice = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
});

const summaryCardProduct = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const summaryCardButton = css({
  width: "100%",
  marginTop: "32px",

  "& button": {
    width: "100%",
    justifyContent: "center",
  },
});

const summaryCardProductContainer = css({
  display: "flex",
  gap: "16px",
});

const summaryCardProductText = css({
  display: "flex",
  flexDirection: "column",
});

const summaryCardProductQuantity = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
});

const summaryCardProductList = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  margin: "32px 0px",
});

const summaryCardFooter = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const summaryCardFooterRow = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const summaryCardFooterTitle = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  textTransform: "uppercase",
  lineHeight: "25px",
});

const summaryCardFooterTitleContent = css({
  color: colors.black,
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  textTransform: "uppercase",
  lineHeight: "normal",
});

const primaryColor = css({
  color: colors.primary01,
});

const marginTop = css({
  marginTop: "16px",
});
export const styles = {
  primaryColor,
  marginTop,
  summaryCard,
  summaryCardTitle,
  summaryCardProductImage,
  summaryCardProductTitle,
  summaryCardProductPrice,
  summaryCardProduct,
  summaryCardFooterTitle,
  summaryCardProductText,
  summaryCardProductContainer,
  summaryCardProductQuantity,
  summaryCardProductList,
  summaryCardButton,
  summaryCardFooter,
  summaryCardFooterRow,
  summaryCardFooterTitleContent,
};
