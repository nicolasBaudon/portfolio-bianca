import * as React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./StepThree.module.css";

const sliderSettings = {
  dots: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
};

export const StepThree = ({ className = "" }) => {
  return (
    <div className={[styles.stepThree, className].join(" ")}>
      <h1 className={styles.designProposalsTo}>3° Design proposals to test</h1>
      <div className={styles.subsequentlyWeDesign}>
        Subsequently, we design multiple improvement proposals that address the
        identified pain points, tailored to the client's specific needs. These
        proposals are presented to the client for review and are then subjected
        to A/B testing to assess their effectiveness and optimize their
        performance.
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderContainer}>
          <Slider {...sliderSettings}>
            <div>
              <StaticImage
                alt=""
                src="../../../images/alex&ani/proposals-carousel/two.png"
              />
            </div>
            <div>
              <StaticImage
                alt=""
                src="../../../images/alex&ani/proposals-carousel/three.png"
              />
            </div>
            <div>
              <StaticImage
                alt=""
                src="../../../images/alex&ani/proposals-carousel/four.png"
              />
            </div>
            <div>
              <StaticImage
                alt=""
                src="../../../images/alex&ani/proposals-carousel/five.png"
              />
            </div>
            <div>
              <StaticImage
                alt=""
                src="../../../images/alex&ani/proposals-carousel/six.png"
              />
            </div>
            <div>
              <StaticImage
                alt=""
                src="../../../images/alex&ani/proposals-carousel/seven.png"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

StepThree.propTypes = {
  className: PropTypes.string,
};
