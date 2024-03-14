import Slider from "react-slick";
import GridGallery from "../../common/GridGallery/GridGAllery";
import Review from "../../common/Review/Review";
import SliderCarousel from "../../common/Slider/Slider";
import Title from "../../common/Title/Title";
import {
    FEATURED_REVIEW,
    PRODUCT_BUTTON_TEXT,
    REVIEWS,
} from "../../utils/constants";
import "./Reviews.scss";
import { useRef } from "react";
import Button from "../../common/Button/Button";
import Rating from "../../common/Rating/Rating";
import { NextArrow, PrevArrow } from "../Description/Description";

export default function Reviews() {
    const sliderRef = useRef<Slider>(null);
    
    const gallery = [];
    for (let i = 0; i < 22; i++) {
        gallery.push(`./gallery-${i + 1}.jpg`);
    }

    const renderReviews = () => {
        return REVIEWS.map(({ username, rating, text }, i) => (
            <Review name={username} rating={rating} text={text} />
        ));
    };

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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite: true
                },
            },
        ],
    };

    return (
        <section className="reviews">
            <div className="reviews__title">
                <div className="section-title-center">
                    <Title text="What are our fans saying?" type="section" />
                    <p className="reviews__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce lobortis sapien facilisis tincidunt pellentesque.
                        In eget ipsum et felis finibus consequat. Fusce non nibh
                        luctus.
                    </p>
                </div>
            </div>

            <GridGallery galleryItems={gallery} />

            <div className="container">
                <div className="reviews__slider">
                    <Slider ref={sliderRef} {...settings}>
                        {renderReviews()}
                    </Slider>
                </div>

                <div className="action-button">
                    <Button text={PRODUCT_BUTTON_TEXT} onClick={() => {}} />
                    <Rating rating={5} info={FEATURED_REVIEW.info} />
                </div>
            </div>
        </section>
    );
}
