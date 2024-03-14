import { useState } from "react";
import "./ProductSlider.scss";

export default function ProductSlider({
    slides,
    productName,
}: {
    slides: string[];
    productName: string;
}) {
    const [currentSlide, setCurrentSlide] = useState(0);

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
        <div className="product-slider">
            <div className="current-slide">
                <img
                    src={slides[currentSlide]}
                    alt={`product-${currentSlide}`}
                />
            </div>
            <div className="all-slides">
                {slides.map((photo, i) => (
                    <button
                        className={`all-slides__item ${
                            currentSlide === i ? "active" : ""
                        }`}
                        onClick={() => changeSlide(i)}
                    >
                        <img src={photo} alt={`produc-${i}`} />
                    </button>
                ))}
            </div>
            <div className="arrows">
                <button
                    className="arrow-button prev"
                    onClick={goToPreviousSlide}
                >
                    <img src="./arrow-left.svg" alt="prev" />
                </button>
                <button className="arrow-button next" onClick={goToNextSlide}>
                    <img src="./arrow-right.svg" alt="prev" />
                </button>
            </div>
            <div className="product-name">{productName}</div>
        </div>
    );
}
