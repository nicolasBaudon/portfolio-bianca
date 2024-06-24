import * as React from "react";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Header.module.css";

export const Header = ({
  className = "",
  onArrowClick,
}) => {
  const navigateAbout = () => navigate("/about");
  const navigateProjects = () => navigate("/#projects-section")
  const navigateContacts = () => navigate("/contact");

  return (
    <header className={[styles.header, className].join(" ")}>
      <div
        className={styles.materialSymbolsLightarrowB}
        onClick={onArrowClick}
      >
        <StaticImage
          className={styles.backIcon}
          loading="lazy"
          alt=""
          src="../../../images/arrow-back.svg"
        />
      </div>
      <div className={styles.nav}>
        <div className={styles.tabDefault} onClick={navigateAbout}>
          <a className={styles.sobre}>About</a>
        </div>
        <div className={styles.tabActive} onClick={navigateProjects}>
          <a className={styles.sobre1}>Projects</a>
          <div className={styles.tabActiveChild} />
        </div>
        <div className={styles.tabDefault1} onClick={navigateContacts}>
          <a className={styles.sobre2}>Contacts</a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onArrowClick: PropTypes.func,
};
