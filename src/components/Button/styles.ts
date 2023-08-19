import { css } from "@emotion/css";
import { colors } from "../../styles/colors";
import { ButtonVariantType } from "../../types/component";

const button = (variant: ButtonVariantType) =>
  css({
    backgroundColor: `${
      variant === "primary" ? colors.primary01 : "transparent"
    }`,
    color: `${variant === "primary" ? colors.white : colors.black}`,
    width: "fit-content",
    height: "48px",
    padding: "0px 31px",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "1px",
    fontSize: "13px",
    border: `${variant === "secondary" ? "1px solid #000" : "none"}`,

    "& svg": {
      fill: "#fff",
      width: "12px",
      height: "100%",
      marginLeft: "10px",
    },

    "&:disabled": {
      cursor: "not-allowed",
    },
  });

export const styles = {
  button,
};
