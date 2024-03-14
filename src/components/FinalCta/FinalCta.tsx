import Button from "../../common/Button/Button";
import HeroGallery from "../../common/HeroGallery/HeroGallery";
import Title from "../../common/Title/Title";
import { PRODUCT_BUTTON_TEXT, SHIPPING_INFO } from "../../utils/constants";
import "./FinalCta.scss";

export default function FinalCta() {
    const images = ["./product-2.jpg", "./gallery-7.jpg", "./gallery-16.jpg"];
    return (
        <section className="final">
            <div className="container">
                <div className="final__inner">
                    <div className="section-title-center">
                        <Title type="section" text="Find something you love." />
                        <p className="subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce lobortis sapien facilisis tincidunt
                            pellentesque. In eget ipsum et felis finibus
                            consequat.
                        </p>
                    </div>

                    <HeroGallery images={images} />

                    <div className="final__action">
                        <Button text={PRODUCT_BUTTON_TEXT} onClick={() => {}} />
                        <div className="payment-info payment">
                            <div className="payment__text">
                                <img src="./time-icon.svg" alt="" />
                                <p>Ships in 1-2 Days</p>            
                            </div>
                            <div className="delimiter"></div>
                            <div className="payment__option">
                                <img
                                    src="./payment-options.jpg"
                                    alt="payment"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="final__shipping-info shipping">
                        {
                            SHIPPING_INFO.map(({icon, text}, i) => (
                                <div className="shipping__item">
                                    <img src={icon} alt={`shipping-${i}`} />
                                    <p>{text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="background-gradient bottom"></div>
        </section>
    );
}
