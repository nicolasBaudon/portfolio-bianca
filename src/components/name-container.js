import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import * as styles from "./name-container.module.css";

const NameContainer = ({ className = "" }) => {
  const onClick = () => navigate("/#contact-section");

  return (
    <header className={[styles.nameContainer, className].join(" ")}>
      <div className={styles.contentContainer}>
        <div className={styles.namePositioning}>
          <div className={styles.nameAlignment}>
            <div className={styles.nameStyle}>
              <StaticImage
                className={styles.nameStyleChild}
                loading="lazy"
                alt=""
                src="../images/vector-2.svg"
              />
            </div>
          </div>
          <a className={styles.biancaRamonda}>BIANCA RAMONDA</a>
        </div>
        <div className={styles.contactInfo} onClick={onClick}>
          <div className={styles.contactDetails}>
            <a className={styles.contact}>Contact</a>
            <StaticImage
              className={styles.svgIcon}
              alt=""
              src="../images/svg.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

NameContainer.propTypes = {
  className: PropTypes.string,
};

export default NameContainer;
