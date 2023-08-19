import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { styles } from "./styles";

interface ProductCardProps {
  isNew: boolean;
  title: string;
  description?: string;
  image: string;
  slug?: string;
  category?: string;
}

const ProductCard = ({
  isNew,
  title,
  description,
  image,
  slug,
  category,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${category}/${slug}`);
  };
  return (
    <section className={styles.productCard}>
      <div className={styles.productCardContainer}>
        <div className={styles.productCardImage}>
          <img src={image} alt="productCard" />
        </div>
        <div className={styles.productCardText}>
          {isNew && (
            <p className={styles.productCardTextCaption}>NEW PRODUCT</p>
          )}
          <h4 className={styles.productCardTextHeading}>{title}</h4>
          <p className={styles.productCardTextParagraph}>{description}</p>
          <Button
            handleClick={handleClick}
            type="button"
            label="See Product"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
