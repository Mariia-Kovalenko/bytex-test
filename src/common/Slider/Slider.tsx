import React, { useEffect, useState } from "react";
import "./Slider.scss";
import { JsxElement } from "typescript";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
    slides: JSX.Element[] | string[];
    slidesToShow: number;
    slidesToScroll: number;
}

const SliderCarousel = ({
    slides,
    slidesToScroll,
    slidesToShow,
}: SliderProps) => {
    const settings = {
        dots: false,
        arrows: false,
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            },
        ]
    };

    console.log(slides);

    return (
        <div className="slider-container">
            <Slider {...settings}>{slides}</Slider>
        </div>
    );
};

export default SliderCarousel;
