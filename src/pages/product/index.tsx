import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Location from "../../components/Location";
import { navigation } from "../../config";
import { styles } from "./styles";

const Product = () => {
  return (
    <div>
      <div className={styles.productHeader}>
        <div className={styles.productHeaderContainer}>
          <Header navigation={navigation} />
        </div>
      </div>
      <div className={styles.productBody}>
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
