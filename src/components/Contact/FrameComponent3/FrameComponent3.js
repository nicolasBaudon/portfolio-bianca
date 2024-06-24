import * as React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import * as styles from "./FrameComponent3.module.css";

const email = "biancaramonda@gmail.com"

export const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.contactContentWrapper, className].join(" ")}>
      <div className={styles.contactContent}>
        <div className={styles.biancaramondagmailcomWrapper}>
          <div className={styles.biancaramondagmailcom}>
           {email}
          </div>
        </div>
        <Button
          className={styles.buttonPrimary}
          disableElevation
          variant="contained"
          onClick={() => window.open(`mailto:${email}`)}
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
          Send Email
        </Button>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};
