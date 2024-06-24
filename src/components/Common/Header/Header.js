import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import * as styles from "./Header.module.css";

export const Header = ({ className = "", projectsRedirect }) => {
  const onTabDefaultClick = () => {
    navigate("/about");
  }

  const onTabDefault1Click = () => {
    navigate("/contact");
  }

  return (
    <header className={[styles.header, className].join(" ")}>
      <nav className={styles.nav}>
        <div className={styles.tabDefault} onClick={onTabDefaultClick}>
          <a className={styles.sobre}>About</a>
        </div>
        <div className={styles.tabActive} onClick={projectsRedirect}>
          <a className={styles.sobre1}>Projects</a>
          <div className={styles.tabActiveChild} />
        </div>
        <div className={styles.tabDefault1} onClick={onTabDefault1Click}>
          <a className={styles.sobre2}>
            Contacts
          </a>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  projectsRedirect: PropTypes.func,
};

