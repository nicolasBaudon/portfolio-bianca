import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as styles from "./latech-factory-intro1.module.css";

const LatechFactoryIntro1 = ({ className = "" }) => {
  return (
    <section className={[styles.latechFactoryIntro, className].join(" ")}>
      <div className={styles.latechFactoryIntroInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <StaticImage
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="../images/frame-49@2x.png"
              />
              <div className={styles.iollin}>iOlliN</div>
            </div>
            <h3 className={styles.iollinIsA}>
              iOlliN is a social marketplace web app that integrates blockchain
              technology, artificial intelligence, and Web3 to share projects
              and be supported by the community.
            </h3>
          </div>
          <div className={styles.asAUxui}>
            As a UX/UI designer, my role encompassed a variety of tasks in both
            user experience and user interface design. On the user experience
            side, I conducted research and user interviews to gather valuable
            insights. For the user interface, I worked in Figma, where I was
            responsible for designing and implementing the design system and
            redesigning the app to enhance its overall look and functionality.
          </div>
        </div>
      </div>
      <div className={styles.macbookWrapper}>
        <StaticImage
          className={styles.macbookIcon}
          loading="lazy"
          alt=""
          src="../images/macbook@2x.png"
        />
      </div>
    </section>
  );
};

LatechFactoryIntro1.propTypes = {
  className: PropTypes.string,
};

export default LatechFactoryIntro1;
