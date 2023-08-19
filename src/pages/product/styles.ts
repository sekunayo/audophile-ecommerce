import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const productBody = css({
  margin: "0 auto",
  width: "70vw",
});

const productHeader = css({
  width: "100%",
  height: "auto",
  backgroundColor: colors.black,
});

const productHeaderContainer = css({
  margin: "0 auto",
  width: "70vw",
});

const productHeaderContentContainer = css({
  height: "calc(100% - 98px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const productHeaderContent = css({
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
  productBody,
  productHeader,
  productHeaderContainer,
  productHeaderContent,
  productHeaderContentContainer,
};
