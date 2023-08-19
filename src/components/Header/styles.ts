import { css } from "@emotion/css";

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
};
