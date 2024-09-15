"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Carousel = ({ children, className, handleRotate }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    vertical: true,
    swipe: false,
    onInit: () => handleRotate(),
    onReInit: () => {
      handleRotate();
    },
  };

  return (
    <div className={className}>
      <Slider {...settings} className="h-full center">
        {children}
      </Slider>
    </div>
  );
};
