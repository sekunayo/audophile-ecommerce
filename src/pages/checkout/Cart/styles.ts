import { css } from "@emotion/css";
import { colors } from "../../../styles/colors";

const cart = css({
  padding: "20px",
  height: "auto",
  width: "377px",
  borderRadius: "8px",
  backgroundColor: colors.white,
});

const cartHeader = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const cartHeaderTitle = css({
  color: colors.black,
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1.286px",
  textTransform: "uppercase",
});

const cartProductImage = css({
  width: "64px",
  height: "64px",
  borderRadius: "8px",

  "& img": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
});

const cartHeaderRemoveBtn = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  textDecoration: "underline",
  transition: "color 0.5s ease-in-out",

  "&:hover": {
    textDecoration: "none",
    color: colors.primary01,
  },
});

const cartProductHeading = css({
  color: colors.black,
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
});

const cartProductList = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginTop: "31px",
  maxHeight: "200px",
  overflowY: "auto",
});

const cartProductListRow = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const cartProductContainer = css({
  display: "flex",
  gap: "16px",
});

const cartProductBtnContainer = css({
  backgroundColor: "#F1F1F1",
  height: "32px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 12px",
  width: "96px",
});

const cartProductBtnContent = css({
  color: colors.black,
  textAlign: "center",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1px",
  textTransform: "uppercase",
});

const cartProductBtnContentActions = css({
  color: "rgba(0,0,0,0.25)",
  textAlign: "center",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1px",
  textTransform: "uppercase",
  cursor: "pointer",

  "&:hover": {
    color: colors.primary01,
  },
});

const cartProductPrice = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
});

const cartTotalContent = css({
  textTransform: "uppercase",
  color: "rgba('#000', 0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
});

const cartTotalContentPrice = css({
  textTransform: "uppercase",
  color: "rgba('#000', 0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
});

const cartTotal = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "32px",
});

const cartButton = css({
  width: "100%",
  marginTop: "24px",

  "& button": {
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const styles = {
  cart,
  cartHeader,
  cartHeaderTitle,
  cartHeaderRemoveBtn,
  cartProductImage,
  cartProductHeading,
  cartProductList,
  cartProductListRow,
  cartProductContainer,
  cartProductBtnContainer,
  cartProductBtnContent,
  cartProductBtnContentActions,
  cartProductPrice,
  cartTotalContent,
  cartTotalContentPrice,
  cartTotal,
  cartButton,
};
