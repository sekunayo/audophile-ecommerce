import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "./styles";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow.svg";

interface CategoryProductCardProps {
  title: string;
  image: string;
}
const CategoryProductCard = ({ title, image }: CategoryProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardText}>
        <h5 className={styles.productCardHeading}>{title}</h5>
        <NavLink className={styles.productCardLink} to={`/category/${title}`}>
          Shop <ArrowLeft />
        </NavLink>
      </div>

      <div className={styles.productCardImage}>
        <img src={image} alt="productCard" />
      </div>
    </div>
  );
};

export default CategoryProductCard;
