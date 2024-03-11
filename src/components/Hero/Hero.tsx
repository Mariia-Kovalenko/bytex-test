import Button from "../../common/Button/Button";
import HeroGallery from "../../common/HeroGallery/HeroGallery";
import Review from "../../common/Review/Review";
import SliderCarousel from "../../common/Slider/Slider";
import "./Hero.scss";

export default function Hero() {
    const images = ["./product-2.jpg", "product-1.jpg", "product-3.jpg"];

    const slides = [
        "./sponsor-1.svg",
        "./sponsor-2.svg",
        "./sponsor-3.svg",
        "./sponsor-4.svg",
        "./sponsor-5.svg",
    ];

    const renderSlides = () => {
        return slides.map((image, i) => {
            return (
                <div key={i} className="slide">
                    <img className="sponsor-image" src={image} alt="alt" />
                </div>
            );
        });
    };

    return (
        <div className="hero">
            <div className="container">
                <div className="logo">
                    <img src="./LOGO.svg" alt="logo" />
                </div>

                <div className="hero__inner">
                    <h1 className="title">
                        Don’t apologize for being comfortable.
                    </h1>
                    <div className="hero__content">
                        <ul className="hero__list">
                            <li className="hero__list-item list-item">
                                <div className="list-item__icon">
                                    <img src="./sun-icon.svg" alt="sun" />
                                </div>
                                <div className="list-item__text">
                                    Beautiful, comfortable loungewear for day or
                                    night.
                                </div>
                            </li>
                            <li className="hero__list-item list-item">
                                <div className="list-item__icon">
                                    <img src="./cart-icon.svg" alt="cart" />
                                </div>
                                <div className="list-item__text">
                                    No wasteful extras, like tags or plastic
                                    packaging.
                                </div>
                            </li>
                            <li className="hero__list-item list-item">
                                <div className="list-item__icon">
                                    <img src="./waves-icon.svg" alt="waves" />
                                </div>
                                <div className="list-item__text">
                                    Our signature fabric is incredibly
                                    comfortable — unlike anything you’ve ever
                                    felt.
                                </div>
                            </li>
                        </ul>
                        <Button
                            text="Customize Your Outfit"
                            onClick={() => {}}
                        />
                        <Review
                            name="Amy P."
                            text="Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them."
                            rating={5}
                            info="One of 500+ 5 Star Reviews Online"
                        />
                    </div>
                    <div className="hero__banner">
                        <HeroGallery images={images} />
                    </div>
                </div>
            </div>
            <div className="sponsors">
                <div className="sponsors__text">as seen in</div>
                <div className="background-gradient"></div>
                <div className="container">
                    <SliderCarousel
                        slides={renderSlides()}
                        slidesToScroll={1}
                        slidesToShow={5}
                    />
                </div>
            </div>
        </div>
    );
}
