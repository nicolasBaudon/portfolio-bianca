import * as React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./FrameComponent.module.css";

export const FrameComponent = ({ className = "" }) => {
  const socialRedirect = (url) => window.open(url, "_blank");

  return (
    <footer className={[styles.footerIconsWrapper, className].join(" ")}>
      <div className={styles.footerIcons}>
        <div className={styles.icons}>
          <button
            onClick={() =>
              socialRedirect("https://www.instagram.com/bianramonda")
            }
          >
            <StaticImage
              className={styles.phinstagramLogoFillIcon}
              loading="lazy"
              alt=""
              src="../../../images/footer/instagram.png"
            />
          </button>
          <button
            onClick={() =>
              socialRedirect(
                "https://www.linkedin.com/in/bianca-ramonda-lemos-bb483217b/"
              )
            }
          >
            <StaticImage
              className={styles.bilinkedinIcon}
              loading="lazy"
              alt=""
              src="../../../images/footer/linkedin.png"
            />
          </button>
          <button
            onClick={() => socialRedirect("mailto:biancaramonda@gmail.com")}
          >
            <StaticImage
              className={styles.bienvelopeFillIcon}
              loading="lazy"
              alt=""
              src="../../../images/footer/email.png"
            />
          </button>
        </div>
        <div className={styles.biancaRamonda2024}>Bianca Ramonda 2024</div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};
