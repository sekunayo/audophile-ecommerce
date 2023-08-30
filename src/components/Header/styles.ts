import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const header = css({
  padding: "36px 0px",
  borderBottom: " 1px solid rgba(255, 255, 255, 0.2)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const headerNavListItem = css({
  color: "#FFF",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  transition: "color 0.5s ease-in-out",
  cursor: "pointer",

  "&.active": {
    color: colors.primary01,
  },

  "&:hover": {
    color: colors.primary01,
  },
});

const headerCart = css({
  position: "relative",
});

const headerCartCircle = css({
  position: "absolute",
  top: "-10px",
  right: "10px",
  height: "18px",
  width: "18px",
  borderRadius: "50%",
  backgroundColor: colors.primary01,
  color: colors.white,
  fontSize: "10px",
  fontWeight: 700,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const headerNavList = css({
  display: "flex",
  gap: "34px",
});

const headerNav = css({
  display: "flex",
});

export const styles = {
  header,
  headerNavListItem,
  headerNavList,
  headerNav,
  headerCartCircle,
  headerCart,
};
