import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as styles from "./u-x-u-i-designer-title.module.css";

const UXUIDesignerTitle = ({ className = "", title }) => {
  const [elementPosition, setElementPosition] = React.useState(0);
  const freelanceScroll = title === "Freelance Projects";

  const handleScroll = (position) => {
    const element = document.getElementById(
      freelanceScroll ? "freelance-projects" : "personal-projects"
    );

    if (
      (element.scrollLeft === 0 && position < 0) ||
      (elementPosition > (element.scrollWidth - 1500) && position > 0)
    )
      return;

    setElementPosition((prev) => prev + position);
    element.scroll({ left: elementPosition + position, behavior: "smooth" });
  };

  return (
    <div className={[styles.uXUIDesignerTitle, className].join(" ")}>
      <div className={styles.titlePositioning}>
        <div className={styles.titleAlignment}>
          <div className={styles.titleContainer}>
            <div className={styles.uxuiDesigner}>UX/UI Designer</div>
            <h3 className={styles.heading1}>{title}</h3>
          </div>
        </div>
        <div className={styles.navigationButtons}>
          <button
            className={styles.arrowButton}
            onClick={() => handleScroll(-500)}
          >
            <StaticImage
              className={styles.buttonPrevious}
              alt=""
              src="../images/button--previous.svg"
            />
          </button>
          <button
            className={styles.arrowButton}
            onClick={() => handleScroll(500)}
          >
            <StaticImage
              className={styles.buttonPrevious}
              alt=""
              src="../images/button--next.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

UXUIDesignerTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default UXUIDesignerTitle;
