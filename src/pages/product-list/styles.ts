import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const productListBody = css({
  margin: "0 auto",
  width: "70vw",
});

const productListHeader = css({
  width: "100%",
  height: "336px",
  backgroundColor: colors.black,
});

const productListHeaderContainer = css({
  margin: "0 auto",
  width: "70vw",
  height: "calc(100%)",
});

const productListHeaderContentContainer = css({
  height: "calc(100% - 98px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const productListHeaderContent = css({
  color: "#FFF",
  textAlign: "center",
  // font-family: Manrope;
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "44px",
  letterSpacing: "1.429px",
  textTransform: "uppercase",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const styles = {
  productListBody,
  productListHeader,
  productListHeaderContainer,
  productListHeaderContent,
  productListHeaderContentContainer,
};
