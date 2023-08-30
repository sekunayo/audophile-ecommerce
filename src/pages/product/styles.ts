import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const productBody = css({
  margin: "0 auto",
  width: "70vw",
});

const productBodyContainer = (toggleModal: boolean) =>
  css({
    position: "relative",
    height: `${toggleModal ? "90vh" : "auto"}`,
    overflowY: `${toggleModal ? "hidden" : "auto"}`,
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

const productCategory = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridColumnGap: "30px",
  margin: "50px 0px 0px 0px",
});

const productGallery = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridColumnGap: "30px",
  marginTop: "150px",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
});

const productFeatures = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "125px",
});

const productGalleryColumn = css({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

const productGoBack = css({
  height: "100px",
  display: "flex",
  alignItems: "center",
  color: "rgba(0,0,0,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  cursor: "pointer",
  transition: "color 0.5s ease-in-out",

  "&:hover": {
    color: colors.primary01,
  },
});

const productTextHeading = css({
  color: colors.black,
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "36px",
  letterSpacing: "1.143px",
  textTransform: "uppercase",
});

const productFeaturesText = css({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const productFeaturesTextParagraph = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
});

const productFeaturesList = css({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const productFeaturesListContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const productFeaturesListItem = css({
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

const productFeaturesListItemQuantity = css({
  color: colors.primary01,
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
});

const productFeaturesListItemContent = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
});

const productMain = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridColumnGap: "100px",
  marginBottom: "150px",
});

const productMainImage = css({
  height: "auto",
  width: "100%",
  borderRadius: "8px",

  "& img": {
    width: "100%",
    borderRadius: "8px",
  },
});

const productMainTextCaption = css({
  color: colors.primary01,
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "10px",
  textTransform: "uppercase",
  marginBottom: "16px",
  letterSpacing: "10px",
});

const productMainText = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const productMainTextHeading = css({
  color: colors.black,
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "44px",
  width: "70%",
  letterSpacing: "1.429px",
  textTransform: "uppercase",
  marginBottom: "32px",
});

const productMainTextPrice = css({
  color: colors.black,
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1.286px",
  textTransform: "uppercase",
  marginBottom: "32px",
});

const productMainTextQuantity = css({
  width: "fit-content",
  height: "48px",
  backgroundColor: "#F1F1F1",
  display: "flex",
  gap: "20px",
  alignItems: "center",
  padding: "0px 15px",
});

const productMainTextQuantityContent = css({
  color: colors.black,
  textAlign: "center",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1px",
  textTransform: "uppercase",
});

const productMainTextQuantityMinus = css({
  color: "rgba(0,0,0,0.25)",
  textAlign: "center",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1px",
  textTransform: "uppercase",

  "&:hover": {
    color: colors.primary01,
  },
});

const productMainTextQuantityPlus = css({
  color: "rgba(0,0,0,0.25)",
  textAlign: "center",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1px",
  textTransform: "uppercase",
  "&:hover": {
    color: colors.primary01,
  },
});

const productMainTextParagraph = css({
  color: "rgba(0,0,0,0.5)",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
  width: "70%",
  marginBottom: "32px",
});

const productMainTextQuantityContainer = css({
  display: "flex",
  gap: "16px",
});

const productOthers = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridColumnGap: "30px",
  marginTop: "64px",
});

const productOthersContainer = css({
  display: "flex",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const styles = {
  productBody,
  productGoBack,
  productOthersContainer,
  productMain,
  productHeader,
  productMainTextQuantity,
  productMainTextPrice,
  productFeaturesList,
  productMainTextParagraph,
  productHeaderContainer,
  productHeaderContent,
  productTextHeading,
  productMainText,
  productFeaturesListItem,
  productHeaderContentContainer,
  productCategory,
  productMainTextHeading,
  productMainTextQuantityContent,
  productMainImage,
  productGallery,
  productFeaturesTextParagraph,
  productGalleryColumn,
  productFeatures,
  productMainTextQuantityContainer,
  productFeaturesText,
  productMainTextQuantityPlus,
  productMainTextQuantityMinus,
  productFeaturesListContainer,
  productFeaturesListItemQuantity,
  productFeaturesListItemContent,
  productMainTextCaption,
  productOthers,
  productBodyContainer,
};
