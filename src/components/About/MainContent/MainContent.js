import * as React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./MainContent.module.css";

export const MainContent = ({ className = "" }) => {
  const downloadResume = () => window.open("/files/ResumeBiancaRamonda.pdf", "_blank", "noopener noreferrer");

  return <div className={[styles.mainContent, className].join(" ")}>
    <div className={styles.aboutMeParent}>
      <div className={styles.aboutMe}>
        <h1 className={styles.title}>About me</h1>
        <div className={styles.aboutMeContent}>
          <StaticImage
            className={styles.image118Icon}
            alt=""
            src="../../../images/portrait.png"
          />
          <div className={styles.text}>
            <p className={styles.myWorkExperience}>
              🚀 My work experience encompasses diverse projects and processes,
              among which the following stand out:
            </p>
            <ul className={styles.designingMvpsForWebAppsWi}>
              <li className={styles.designingMvpsFor}>
                Designing MVPs for web apps with Web3 integration and blockchain
                implementation, and Developing MVPs for E-commerce platforms.
              </li>
              <li className={styles.craftingSpecificAb}>
                Crafting specific A/B testing proposals for E-commerce on
                Shopify.
              </li>
              <li className={styles.designQaIn}>
                Design QA in E-commerce environments, incorporating new
                functionalities and enhancements.
              </li>
              <li className={styles.formulatingSopsFor}>
                Formulating SOPs for each designed feature, supported by a
                meta-objective proposal for the client.
              </li>
              <li className={styles.conductingUsabilityTests}>
                Conducting usability tests of SOPs prior to client delivery.
              </li>
              <li>
                Active participation in benchmarking processes and competitive
                analysis.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={styles.text1}
      >{`🤍👩🏻‍💻 My professional goal is to continue refining my skills as a designer and Figma advanced while expanding my knowledge and expertise in optimizing E-commerce through A/B Testings. `}</div>
    </div>
    <div className={styles.callToAction}>
      <Button
        onClick={downloadResume}
        className={styles.buttonPrimary}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "18",
          background: "#f188a7",
          borderRadius: "24px",
          "&:hover": { background: "#f188a7" },
          width: 400,
          height: 48,
        }}
      >
        Download Resume
      </Button>
    </div>
  </div>
};

MainContent.propTypes = {
  className: PropTypes.string,
};
