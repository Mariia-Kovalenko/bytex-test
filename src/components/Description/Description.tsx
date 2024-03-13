import { useDebugValue, useState } from "react";
import SliderCarousel from "../../common/Slider/Slider";
import Title from "../../common/Title/Title";
import {
    FEATURED_REVIEW,
    PRODUCT_BUTTON_TEXT,
    PRODUCT_FEATURES,
} from "../../utils/constants";
import "./Description.scss";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import Button from "../../common/Button/Button";
import Rating from "../../common/Rating/Rating";

export default function Description() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const deviceWidth = useDeviceWidth();

    const slides = PRODUCT_FEATURES;

    const changeSlide = (num: number) => {
        setCurrentSlide(num);
    };

    const goToNextSlide = () => {
        setCurrentSlide(
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        );
    };
    const goToPreviousSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        );
    };

    return (
        <div className="description">
            <div className="container">
                <Title type="section" text="Comfort made easy" />

                <div className="description__content">
                    <div className="description__cards">
                        {deviceWidth < 900 ? (
                            <Card
                                icon={slides[currentSlide].icon}
                                alt={slides[currentSlide].alt}
                                title={slides[currentSlide].title}
                                description={slides[currentSlide].description}
                            />
                        ) : (
                            slides.map(({ icon, alt, title, description }) => (
                                <Card
                                    icon={icon}
                                    alt={alt}
                                    title={title}
                                    description={description}
                                />
                            ))
                        )}
                    </div>
                    {deviceWidth < 900 && (
                        <>
                            <div className="arrows">
                                <button
                                    className="prev"
                                    onClick={goToPreviousSlide}
                                >
                                    <img src="./arrow-left.svg" alt="prev" />
                                </button>
                                <button
                                    className="next"
                                    onClick={goToNextSlide}
                                >
                                    <img src="./arrow-right.svg" alt="next" />
                                </button>
                            </div>

                            <div className="dots">
                                {slides.map((_, i) => (
                                    <div
                                        className={`dot ${
                                            currentSlide === i ? "active" : ""
                                        }`}
                                    ></div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="description__action">
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
