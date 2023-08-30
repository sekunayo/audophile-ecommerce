import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const checkoutHeader = css({
  width: "100%",
  height: "auto",
  backgroundColor: colors.black,
});

const checkoutHeaderContainer = css({
  margin: "0 auto",
  width: "70vw",
});

const checkoutBody = css({
  minHeight: "100vh",
  backgroundColor: "#F1F1F1",
  padding: "142px 0px",
});

const checkoutFormRow = css({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const checkoutFormRowGrid = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "16px",
});
const checkoutBodyContainer = css({
  width: "70vw",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridColumnGap: "20px",
});

const checkoutForm = css({
  borderRadius: "8px",
  backgroundColor: "#FFF",
  height: "auto",
  width: "100%",
  padding: "48px",
});

const checkoutFormHeading = css({
  color: colors.black,
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "36px",
  letterSpacing: "1.143px",
  textTransform: "uppercase",
});

const checkoutFormRowHeader = css({
  color: colors.primary01,
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
  letterSpacing: "0.929px",
  textTransform: "uppercase",
  marginTop: "53px",
});

const checkoutInputLabel = css({
  color: colors.black,
  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "-0.214px",
});

const checkoutFormInput = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
});

const checkoutFormRadioControl = css({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const checkoutFormCash = css({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridGap: "24px",
  alignItems: "center",

  "& p": {
    color: "rgba(0,0,0,0.5)",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "25px",
  },
});

export const styles = {
  checkoutHeader,
  checkoutHeaderContainer,
  checkoutBody,
  checkoutBodyContainer,
  checkoutForm,
  checkoutFormHeading,
  checkoutFormRow,
  checkoutFormRowGrid,
  checkoutFormRowHeader,
  checkoutInputLabel,
  checkoutFormInput,
  checkoutFormRadioControl,
  checkoutFormCash,
};
