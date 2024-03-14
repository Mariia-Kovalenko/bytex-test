import Button from "../../common/Button/Button";
import HeroGallery from "../../common/HeroGallery/HeroGallery";
import Review from "../../common/Review/Review";
import SliderCarousel from "../../common/Slider/Slider";
import Title from "../../common/Title/Title";
import {
    FEATURED_REVIEW,
    HERO_BULLET_POINTS,
    HERO__TITLE,
    PRODUCT_BUTTON_TEXT,
    PRODUCT_IMAGES,
    SPONSOR_SLIDES,
} from "../../utils/constants";
import "./Hero.scss";

export default function Hero() {
    const renderSlides = () => {
        return SPONSOR_SLIDES.map((image, i) => {
            return (
                <div key={i} className="slide">
                    <img className="sponsor-image" src={image} alt="alt" />
                </div>
            );
        });
    };

    return (
        <section className="hero">
            <div className="container">
                <a href="#" className="logo">
                    <img src="./LOGO.svg" alt="logo" />
                </a>

                <div className="hero__inner">
                    <div className="hero__title">
                        <Title type="main" text={HERO__TITLE} />
                    </div>
                    <div className="hero__content">
                        <ul className="hero__list">
                            {HERO_BULLET_POINTS.map(
                                ({ id, icon, alt, text }) => (
                                    <li
                                        key={id}
                                        className="hero__list-item list-item"
                                    >
                                        <div className="list-item__icon">
                                            <img src={icon} alt={alt} />
                                        </div>
                                        <div className="list-item__text">
                                            {text}
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                        <Button text={PRODUCT_BUTTON_TEXT} onClick={() => {}} />
                        <Review
                            avatar={FEATURED_REVIEW.avatar}
                            name={FEATURED_REVIEW.user}
                            text={FEATURED_REVIEW.text}
                            rating={FEATURED_REVIEW.rating}
                            info={FEATURED_REVIEW.info}
                        />
                    </div>
                    <div className="hero__banner">
                        <HeroGallery images={PRODUCT_IMAGES} />
                    </div>
                </div>
            </div>
            <div className="sponsors">
                <div className="sponsors__text">as seen in</div>
                <div className="background-gradient top"></div>
                <div className="container">
                    <SliderCarousel
                        slides={renderSlides()}
                        slidesToScroll={1}
                        slidesToShow={5}
                    />
                </div>
            </div>
        </section>
    );
}
