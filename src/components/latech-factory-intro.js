import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useMemo } from "react";
import PropTypes from "prop-types";
import * as styles from "./latech-factory-intro.module.css";

const LatechFactoryIntro = ({
  className = "",
  latechFactory,
  propMinWidth,
  softwareFactorySpecializing,
  atLatechMyRoleFocusedOnCreat,
  inThisRoleILearnedToCreate,
}) => {
  const latechFactoryStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <section className={[styles.latechFactoryIntro, className].join(" ")}>
      <div className={styles.latechFactoryIntroInner}>
        <div className={styles.latechRoleParent}>
          <div className={styles.latechRole}>
            <div className={styles.uXUIDesignerRole}>
              <StaticImage
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src='../images/image-4@2x.png'
              />
              <div className={styles.latechFactory} style={latechFactoryStyle}>
                {latechFactory}
              </div>
            </div>
            <h3 className={styles.softwareFactorySpecializing}>
              {softwareFactorySpecializing}
            </h3>
          </div>
          <div className={styles.atLatechMyContainer}>
            <p className={styles.atLatechMy}>{atLatechMyRoleFocusedOnCreat}</p>
            <p className={styles.atLatechMy}>&nbsp;</p>
            <p className={styles.atLatechMy}>{inThisRoleILearnedToCreate}</p>
          </div>
        </div>
      </div>
      <div className={styles.devices}>
        <StaticImage className={styles.imacIcon} loading="lazy" alt="" src='../images/imac@2x.png' />
      </div>
    </section>
  );
};

LatechFactoryIntro.propTypes = {
  className: PropTypes.string,
  latechFactory: PropTypes.string,
  softwareFactorySpecializing: PropTypes.string,
  atLatechMyRoleFocusedOnCreat: PropTypes.string,
  inThisRoleILearnedToCreate: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default LatechFactoryIntro;
