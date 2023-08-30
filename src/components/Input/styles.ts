import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const input = css({
  width: "100%",
  height: "56px",
  borderRadius: "8px",
  border: "1px solid #cfcfcf",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  paddingLeft: "24px",
  color: colors.black,
  fontFamily: "Manrope",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "-0.25px",

  "&::placeholder": {
    color: "rgba(0,0,0,0.4)",
  },
});

const inputLabel = css({
  color: colors.black,
  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "-0.214px",
});

const inputContainer = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "9px",
});

const inputError = css({
  color: "#FF0000",
  fontSize: "8px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "2px",
  fontFamily: "Manrope",
});

const inputLabelContainer = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const styles = {
  input,
  inputLabel,
  inputContainer,
  inputError,
  inputLabelContainer,
};
