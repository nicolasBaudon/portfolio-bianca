import * as React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import * as styles from "./ProjectNfo.module.css";

export const ProjectNfo = ({
  className = "",
  text,
  retailAndWholesaleOfMateE,
  eCommerceOfArgentineProdu,
  propBorderRadius,
  propPadding,
  propGap,
  onBotoSecudrio5Click,
}) => (
  <div
    className={[styles.projectNfo, className].join(" ")}
    style={{
      borderRadius: propBorderRadius,
    }}
  >
    <div
      className={styles.frameParent}
      style={{
        padding: propPadding,
        gap: propGap,
      }}
    >
      <div className={styles.faviconWrapper}>
        <div className={styles.favicon}>
          <div className={styles.b}>B</div>
          <div className={styles.r}>R</div>
        </div>
      </div>
      <div className={styles.textParent}>
        <b className={styles.text}>{text}</b>
        <div className={styles.text1}>
          <p className={styles.retailAndWholesale}>
            {retailAndWholesaleOfMateE}
          </p>
          <p className={styles.eCommerceOfArgentine}>
            {eCommerceOfArgentineProdu}
          </p>
        </div>
        <Button
          className={styles.botoSecudrio}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#25282b",
            fontSize: "18",
            borderColor: "#25282b",
            borderRadius: "24px",
            "&:hover": { borderColor: "#25282b" },
            width: 152,
            height: 43,
          }}
          onClick={onBotoSecudrio5Click}
        >
          View Project
        </Button>
      </div>
    </div>
  </div>
);

ProjectNfo.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  retailAndWholesaleOfMateE: PropTypes.string,
  eCommerceOfArgentineProdu: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propPadding: PropTypes.any,
  propGap: PropTypes.any,

  /** Action props */
  onBotoSecudrio5Click: PropTypes.func,
};
