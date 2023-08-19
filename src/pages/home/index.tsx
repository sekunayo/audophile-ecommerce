import React from "react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { styles } from "./styles";
import Location from "../../components/Location";
import CategoryProductCard from "../../components/CategoryProductCard";
import Footer from "../../components/Footer";
import { navigation } from "../../config";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeHero}>
        <div className={styles.homeHeroBox}>
          <Header navigation={navigation} />

          <div className={styles.homeHeroBoxContent}>
            <div className={styles.homeHeroBoxContentText}>
              <p className={styles.homeHeroBoxContentTextCaption}>
                NEW PRODUCT
              </p>
              <h2 className={styles.homeHeroBoxContentTextHeading}>
                XX99 Mark II Headphones
              </h2>
              <p className={styles.homeHeroBoxContentTextParagraph}>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Button variant="primary" type="button" label="see product" />
            </div>

            <div className={styles.homeHeroBoxImage}>
              <img src="/images/home/desktop/image_hero.png" alt="hero" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeBody}>
        <div className={styles.homeCategory}>
          <CategoryProductCard
            image={
              "/images/shared/desktop/image-category-thumbnail-headphones.png"
            }
            title={"headphones"}
          />
          <CategoryProductCard
            image={
              "/images/shared/desktop/image-category-thumbnail-speakers.png"
            }
            title={"speakers"}
          />
          <CategoryProductCard
            image={
              "/images/shared/desktop/image-category-thumbnail-earphones.png"
            }
            title={"earphones"}
          />
        </div>
        <div className={styles.homeBodyText}>
          <div className={styles.homeBigSpeaker}>
            <div className={styles.homeBigSpeakerImage}>
              <img
                src={"/images/home/desktop/image-speaker-zx9.png"}
                alt="hero"
              />
            </div>
            <div className={styles.homeBigSpeakerText}>
              <h4 className={styles.homeBigSpeakerTextHeading}>ZX9 SPEAKER</h4>
              <p className={styles.homeBigSpeakerTextParagraph}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button
                variant="primary"
                customClassName={styles.homeBigSpeakerButton}
                type="button"
                label="see product"
              />
            </div>
          </div>
          <div className={styles.homeSpeaker}>
            <div className={styles.homeSpeakerText}>
              <h4 className={styles.homeTextHeading}>ZX SPEAKER</h4>
              <Button variant="secondary" type="button" label="see product" />
            </div>
            <img
              src={"/images/home/desktop/image-speaker-zx7.jpg"}
              alt="zx-speaker"
            />
          </div>

          <div className={styles.homeEarphones}>
            <div className={styles.homeEarphonesImage}>
              <img
                src={"/images/home/desktop/image-earphones-yx1.jpg"}
                alt="yx1-earphones"
              />
            </div>
            <div className={styles.homeEarphonesText}>
              <h4 className={styles.homeTextHeading}>YX1 EARPHONES</h4>
              <Button variant="secondary" type="button" label="see product" />
            </div>
          </div>
        </div>
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
