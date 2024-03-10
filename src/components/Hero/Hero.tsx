import Button from "../../common/Button/Button";
import Review from "../../common/Review/Review";
import "./Hero.scss";

export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="logo">
                    <img src="./LOGO.svg" alt="logo" />
                </div>
                <h1 className="title">
                    Don’t apologize for being comfortable.
                </h1>

                <div className="hero__inner">
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
                        <div className="hero__photos">
                            <div className="rectangle"></div>
                            <img
                                className="photo-small"
                                src="./product-2.jpg"
                                alt="product"
                            />
                            <img
                                className="photo-main"
                                src="./product-1.jpg"
                                alt="product"
                            />
                            <img
                                className="photo-small"
                                src="./product-3.jpg"
                                alt="product"
                            />
                            <div className="rectangle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
