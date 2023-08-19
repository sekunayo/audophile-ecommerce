import React from "react";
import { styles } from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { navigation } from "../../config";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>
          <Logo />
          <p className={styles.footerDescription}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={styles.footerCaption}>
            Copyright 2023. All Rights Reserved
          </p>
        </div>
        <div className={styles.footerNavContainer}>
          <nav>
            <ul className={styles.footerNavList}>
              {navigation.map((element, index) => {
                return (
                  <Link
                    to={element.path}
                    key={index + 1}
                    className={styles.footerNavListItem}
                  >
                    {element.text}
                  </Link>
                );
              })}
            </ul>
          </nav>
          <div className={styles.footerIcons}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>

        <div className={styles.footerHorizontalBox}></div>
      </div>
    </footer>
  );
};

export default Footer;
