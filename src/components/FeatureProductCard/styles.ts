import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const featureProductCard = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "32px",
});

const featureProductCardImage = css({
  width: "100%",
  height: "auto",
});

export const styles = {
  featureProductCard,
  featureProductCardImage,
};
