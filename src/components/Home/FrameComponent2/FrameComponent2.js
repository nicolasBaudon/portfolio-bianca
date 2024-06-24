import * as React from "react";
import { Button } from "@mui/material";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as styles from "./FrameComponent2.module.css";

export const FrameComponent2 = ({ className = "" }) => {
  const handleRedirectProjects = () => navigate('#projects-section')

  const handleRedirectLinkedIn = () => window.open('https://www.linkedin.com/in/bianca-ramonda-lemos-bb483217b/', '_blank')

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.uiuxDesignerParent}>
            <b className={styles.uiuxDesigner}>UI/UX Designer</b>
            <h1 className={styles.title}>Hello, my name is Bianca Ramonda</h1>
          </div>
          <div className={styles.subheadline}>
            <div className={styles.text}>
              <p
                className={styles.iWorkAs}
              >{`I work as a UX/UI Designer with advanced skills in Figma. My professional focus includes a deep interest in A/B testing, as well as the implementation of best practices in user experience. I have extensive experience in e-commerce applying A/B testing and experience working on web app MVP developments with Web3 and blockchain implementation. `}</p>
              <p className={styles.focusedOnContinuing}>
                Focused on continuing to improve my skills!
              </p>
            </div>
          </div>
        </div>
        <StaticImage className={styles.image119Icon} alt="" src="../../../images/home/hero.png" />
      </div>
      <div className={styles.buttons}>
        <Button
          onClick={handleRedirectProjects}
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
            height: 48,
          }}
        >
          Projects
        </Button>
        <div className={styles.buttonSecondary} onClick={handleRedirectLinkedIn}>
          <div className={styles.text1}>LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

