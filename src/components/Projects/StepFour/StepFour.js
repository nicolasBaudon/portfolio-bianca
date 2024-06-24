import * as React from "react";
import { StepFourContent } from "./StepFourContent/StepFourContent";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./StepFour.module.css";

export const StepFour = ({ className = "" }) => {
  return (
    <div className={[styles.stepFour, className].join(" ")}>
      <div className={styles.stepFive}>
        <h1 className={styles.creationOfReady}>
          4° Creation of Ready For Devs Figma File
        </h1>
        <div className={styles.onceTheProposals}>
          Once the proposals have been validated, we create "Ready for Devs"
          files in Figma. These files contain all the design details and
          features necessary for implementation, enabling developers to work
          efficiently and accurately.
        </div>
        <StaticImage
          className={styles.image92Icon}
          loading="lazy"
          alt=""
          src="../../../images/alex&ani/step_four.png"
        />
      </div>
      <StepFourContent
        creationOfSOPs="5° Creation of SOPs"
        additionallyWeDevelopCust="Additionally, we develop customized Standard Operating Procedures (SOPs) for the client, allowing them to control and customize their Shopify store autonomously. This includes the ability to make changes to images, titles, and products as needed to drive their business objectives."
        image={
          <StaticImage
            className={styles.image93Icon}
            loading="lazy"
            alt=""
            src="../../../images/alex&ani/step_five.png"
          />
        }
      />
      <StepFourContent
        creationOfSOPs="6° Design QA"
        additionallyWeDevelopCust="Finally, we conduct rigorous quality assurance on the finalized release. This QA process ensures that all aspects of the user experience and design details are correctly implemented, ensuring a final product that meets the standards of excellence in UX and pixel perfection."
        image={
          <StaticImage
            className={styles.image93Icon}
            loading="lazy"
            alt=""
            src="../../../images/alex&ani/step_six.png"
          />
        }
        propDisplay="unset"
      />
    </div>
  );
};

StepFour.propTypes = {
  className: PropTypes.string,
};
