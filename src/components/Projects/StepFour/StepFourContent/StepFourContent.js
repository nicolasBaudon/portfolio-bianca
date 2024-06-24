import * as React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./StepFourContent.module.css";

export const StepFourContent = ({
  className = "",
  creationOfSOPs,
  additionallyWeDevelopCust,
  image,
  propDisplay,
}) => {
  return (
    <div className={[styles.stepFourContent, className].join(" ")}>
      <h1 className={styles.creationOfSops} style={{
      display: propDisplay,
    }}>
        {creationOfSOPs}
      </h1>
      <div className={styles.additionallyWeDevelop}>
        {additionallyWeDevelopCust}
      </div>
      {image}
    </div>
  );
};

StepFourContent.propTypes = {
  className: PropTypes.string,
  creationOfSOPs: PropTypes.string,
  additionallyWeDevelopCust: PropTypes.string,
  image: PropTypes.node,

  /** Style props */
  propDisplay: PropTypes.any,
};
