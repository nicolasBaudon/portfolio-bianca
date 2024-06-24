import * as React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./ResponsibilitiesGrid.module.css";

export const ResponsibilitiesGrid = ({
  className = "",
  firstImage,
  secondImage,
  websiteQualityAssuranceTo,
  searchForSolutionsThrough,
  propMinWidth,
}) => {
  const websiteQualityAssuranceStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.responsibilitiesGrid, className].join(" ")}>
      <div className={styles.responsibilityTitles}>
       {firstImage}
        <div
          className={styles.websiteQualityAssurance}
          style={websiteQualityAssuranceStyle}
        >
          {websiteQualityAssuranceTo}
        </div>
      </div>
      {secondImage && searchForSolutionsThrough && <div className={styles.responsibilityIcons}>
        {secondImage}
        <div className={styles.searchForSolutions}>
          {searchForSolutionsThrough}
        </div>
      </div>}
    
    </div>
  );
};

ResponsibilitiesGrid.propTypes = {
  className: PropTypes.string,
  firstImage: PropTypes.node,
  secondImage: PropTypes.node,
  websiteQualityAssuranceTo: PropTypes.string,
  searchForSolutionsThrough: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

