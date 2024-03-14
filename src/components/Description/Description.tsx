import { useDebugValue, useRef, useState } from "react";
import SliderCarousel from "../../common/Slider/Slider";
import Title from "../../common/Title/Title";
import {
    FEATURED_REVIEW,
    PRODUCT_BUTTON_TEXT,
    PRODUCT_FEATURES,
} from "../../utils/constants";
import "./Description.scss";
import Button from "../../common/Button/Button";
import Rating from "../../common/Rating/Rating";
import Slider from "react-slick";

export function PrevArrow({ moveToPrev }: { moveToPrev: () => void }) {
    return (
        <button className="arrow-button prev" onClick={moveToPrev}>
            <img src="./arrow-left.svg" alt="prev" />
        </button>
    );
}
export function NextArrow({ moveToNext }: { moveToNext: () => void }) {
    return (
        <button className="arrow-button next" onClick={moveToNext}>
            <img src="./arrow-right.svg" alt="next" />
        </button>
    );
}

export default function Description() {
    const sliderRef = useRef<Slider>(null);
    const slides = PRODUCT_FEATURES;

    const renderCards = () =>
        slides.map(({ icon, alt, title, description }) => (
            <Card
                icon={icon}
                alt={alt}
                title={title}
                description={description}
            />
        ));

    const settings = {
        dots: false,
        arrows: true,
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: false,
        nextArrow: <NextArrow moveToNext={() => sliderRef.current?.slickNext()} />,
        prevArrow: <PrevArrow moveToPrev={() => sliderRef.current?.slickPrev()} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: true,
                },
            },
        ],
    };

    return (
        <div className="description">
            <div className="container">
                <div className="section-title-center">
                    <Title type="section" text="Comfort made easy" />
                </div>

                <div className="description__content">
                    <Slider ref={sliderRef} {...settings}>
                        {renderCards()}
                    </Slider>
                </div>

                <div className="action-button">
                    <Button text={PRODUCT_BUTTON_TEXT} onClick={() => {}} />
                    <Rating rating={5} info={FEATURED_REVIEW.info} />
                </div>
            </div>
        </div>
    );
}

function Card({
    icon,
    alt,
    title,
    description,
}: {
    icon: string;
    title: string;
    alt: string;
    description: string;
}) {
    return (
        <div className="card">
            <img src={icon} alt={alt} className="card__image" />
            <div className="card__title">{title}</div>
            <div className="card__desc">{description}</div>
        </div>
    );
}
