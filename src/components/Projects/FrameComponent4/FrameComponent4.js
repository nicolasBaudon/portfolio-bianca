import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ResponsibilitiesGrid } from "./ResponsabilitesGrid/ResponsabilitiesGrid";
import PropTypes from "prop-types";
import * as styles from "./FrameComponent4.module.css";

export const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.roleDescriptionWrapper, className].join(" ")}>
      <div className={styles.roleDescription}>
        <b className={styles.myRole}>My role:</b>
        <div className={styles.responsibilities}>
          <ResponsibilitiesGrid
            firstImage={
              <StaticImage
                className={styles.pieChartIcon}
                loading="lazy"
                alt=""
                src="../../../images/alex&ani/role_first.png"
              />
            }
            secondImage={
              <StaticImage
                className={styles.selectIcon}
                loading="lazy"
                alt=""
                src="../../../images/alex&ani/role_second.png"
              />
            }
            websiteQualityAssuranceTo="Website quality assurance to identify pain points or areas for improvement."
            searchForSolutionsThrough="Search for solutions through processes such as benchmarking, feature research, etc."
          />
          <ResponsibilitiesGrid
            firstImage={
              <StaticImage
                className={styles.pieChartIcon}
                loading="lazy"
                alt=""
                src="../../../images/alex&ani/role_third.png"
              />
            }
            secondImage={
              <StaticImage
                className={styles.selectIcon}
                loading="lazy"
                alt=""
                src="../../../images/alex&ani/role_fourth.png"
              />
            }
            websiteQualityAssuranceTo="Designing various proposals that address the issue, followed by A/B testing or multiple tests."
            searchForSolutionsThrough="Creation of SOP to provide the client with all necessary information about the tests and Shopify meta-objects."
            propMinWidth="268px"
          />
          <ResponsibilitiesGrid
            firstImage={
              <StaticImage
                className={styles.pieChartIcon}
                loading="lazy"
                alt=""
                src="../../../images/alex&ani/role_fifth.png"
              />
            }
            secondImage={
              <StaticImage
                className={styles.selectIcon}
                loading="lazy"
                alt=""
                src="../../../images/alex&ani/role_six.png"
              />
            }
            websiteQualityAssuranceTo="Creation of Ready for Devs files, providing developers with all necessary information for design development (flows, functionalities, call-to-actions, etc.)"
            searchForSolutionsThrough="QA for developed releases: ensuring frontend development aligns consistently with the Figma design."
            propMinWidth="268px"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};
