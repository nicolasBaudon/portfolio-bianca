import * as React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./StepTwo.module.css";

const sliderSettings = {
  dots: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

export const StepTwo = ({ className = "" }) => {
  return (
    <div className={[styles.stepTwo, className].join(" ")}>
      <h1 className={styles.searchForSolutions}>2° Search for solutions</h1>
      <div className={styles.nextWeProceed}>
        Next, we proceed to seek solutions using the benchmarking method, where
        we analyze the strategies and practices employed by competitors and
        other relevant e-commerce platforms in the market. This process provides
        us with a comparative insight that inspires innovative ideas and helps
        us identify opportunities for improvement.
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          <div>
            <StaticImage
              alt=""
              src="../../../images/alex&ani/solutions-carousel/second.png"
            />
          </div>
          <div>
            <StaticImage
              alt=""
              src="../../../images/alex&ani/solutions-carousel/third.png"
            />
          </div>
          <div>
            <StaticImage
              alt=""
              src="../../../images/alex&ani/solutions-carousel/fourth.png"
            />
          </div>
          <div>
            <StaticImage
              alt=""
              src="../../../images/alex&ani/solutions-carousel/fifth.png"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

StepTwo.propTypes = {
  className: PropTypes.string,
};
