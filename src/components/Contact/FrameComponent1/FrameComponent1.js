import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./FrameComponent1.module.css";

export const FrameComponent1 = ({
  className = "",
  contactTitle,
  propAlignSelf,
  propWidth,
  propWidth1,
  propPadding,
}) => (
  <div
    className={[styles.sectionTitleWrapper, className].join(" ")}
    style={{
      alignSelf: propAlignSelf,
      width: propWidth,
    }}
  >
    <div
      className={styles.sectionTitle}
      style={{
        width: propWidth1,
      }}
    >
      <h1 className={styles.text}>{contactTitle}</h1>
      <div
        className={styles.sectionTitleInner}
        style={{
          padding: propPadding,
        }}
      >
        <div className={styles.frameChild} />
      </div>
    </div>
  </div>
);

FrameComponent1.propTypes = {
  className: PropTypes.string,
  contactTitle: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propPadding: PropTypes.any,
};
