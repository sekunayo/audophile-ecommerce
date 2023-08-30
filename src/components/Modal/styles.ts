import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const modal = css({
  background: "rgba(0,0,0,0.4)",
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const styles = {
  modal,
};
