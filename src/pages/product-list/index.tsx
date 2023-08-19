import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Location from "../../components/Location";
import ProductCard from "../../components/ProductCard";
import { navigation } from "../../config";
import { styles } from "./styles";
import data from "../../data.json";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<any>([]);
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    const dataList = data.filter((element) => element.category === slug);
    setProducts(dataList);
  }, [slug]);

  return (
    <div>
      <div className={styles.productListHeader}>
        <div className={styles.productListHeaderContainer}>
          <Header navigation={navigation} />
          <div className={styles.productListHeaderContentContainer}>
            <h4 className={styles.productListHeaderContent}>{slug}</h4>
          </div>
        </div>
      </div>
      <div className={styles.productListBody}>
        {products.map((element: any, index: any) => {
          return (
            <ProductCard
              image={element.image.desktop}
              title={element.name}
              isNew={element.new}
              key={index + 1}
              description={element.description}
              slug={element.slug}
              category={element.category}
            />
          );
        })}
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
