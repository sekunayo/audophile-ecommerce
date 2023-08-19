import React from "react";
import { styles } from "./styles";

const Location = () => {
  return (
    <div className={styles.location}>
      <div className={styles.locationTextContainer}>
        <h3 className={styles.locationHeader}>
          Bringing you the <span className={styles.emphasis}>best</span> audio
          gear
        </h3>
        <p className={styles.locationText}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={styles.locationImage}>
        <img src="/images/shared/desktop/image-best-gear.jpg" alt="location" />
      </div>
    </div>
  );
};

export default Location;
