import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const radio = css({
  borderRadius: "8px",
  border: "1px solid #CFCFCF",
  backgroundColor: "#FFF",
  width: "100%",
  height: "56px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "16px",
});

const radioButton = css({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  border: "1px solid #CFCFCF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const radioLabel = css({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  color: colors.black,
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "-0.25px",
});

const radioButtonInner = css({
  width: "10px",
  height: "10px",
  backgroundColor: colors.primary01,
  borderRadius: "50%",
});
export const styles = {
  radio,
  radioButton,
  radioButtonInner,
  radioLabel,
};
