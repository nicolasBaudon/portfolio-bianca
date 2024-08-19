import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as styles from "./product-grid-navigation.module.css";

const ProductGridNavigation = ({ className = "" }) => {
  return (
    <section className={[styles.productGridNavigation, className].join(" ")} id='personal-projects'>
      <div className={styles.scrollContainer}>
        <div className={styles.navigationPositioning}>
          <div className={styles.productGridVariation}>
            <div className={styles.product}>
              <div className={styles.productLayoutsVaried}>
                <StaticImage
                  className={styles.imageContainerIcon}
                  loading="lazy"
                  alt=""
                  src="../images/image-container-4@2x.png"
                />
                <div className={styles.h4PostTitleParent}>
                  <b className={styles.h4PostTitle}>E-commerce | Tomamate</b>
                  <div className={styles.paragraphPostDescription}>
                    <p className={styles.retailAndWholesale}>
                      Retail and wholesale of mate equipment.
                    </p>
                    <p className={styles.retailAndWholesale}>
                      E-commerce of Argentine products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product1}>
              <div className={styles.imageContainerParent}>
                <StaticImage
                  className={styles.imageContainerIcon1}
                  loading="lazy"
                  alt=""
                  src="../images/image-container-5@2x.png"
                />
                <div className={styles.h4PostTitleGroup}>
                  <b className={styles.h4PostTitle1}>Real State | MS</b>
                  <div className={styles.paragraphPostDescription1}>
                    Website for buying, selling and renting properties.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product2}>
              <StaticImage
                className={styles.imageContainerIcon1}
                loading="lazy"
                alt=""
                src="../images/image-container-6@2x.png"
              />
              <div className={styles.h4PostTitleGroup}>
                <b className={styles.h4PostTitle2}>App | Safe</b>
                <div className={styles.paragraphPostDescription1}>
                  Map with information on the area, the possibility of
                  connecting with friends, alert options and tracking in the
                  event of an accident.
                </div>
              </div>
            </div>
            <div className={styles.product1}>
              <div className={styles.imageContainerParent}>
                <StaticImage
                  className={styles.imageContainerIcon1}
                  loading="lazy"
                  alt=""
                  src="../images/image-container-7@2x.png"
                />
                <div className={styles.h4PostTitleGroup}>
                  <b className={styles.h4PostTitle3}>App | Hola</b>
                  <div className={styles.paragraphPostDescription1}>
                    Tourism app, sale of experiences. Planning, selling and
                    booking tourist experiences.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductGridNavigation.propTypes = {
  className: PropTypes.string,
};

export default ProductGridNavigation;
