import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { styles } from "./styles";

interface FeatureProductCardProps {
  title: string;
  slug: string;
  image: string;
}

const FeatureProductCard = ({
  title,
  slug,
  image,
}: FeatureProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(slug);
  };

  return (
    <div className={styles.featureProductCard}>
      <div className={styles.featureProductCardImage}>
        <img src={image} alt={title} />
      </div>
      <h5>{title}</h5>
      <Button
        handleClick={handleClick}
        variant="primary"
        type="button"
        label="see product"
      />
    </div>
  );
};

export default FeatureProductCard;
