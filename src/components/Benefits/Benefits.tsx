import ProductSlider from "../../common/ProductSlider/ProductSlider";
import Title from "../../common/Title/Title";
import { BENEFITS, PRODUCT_PHOTOS } from "../../utils/constants";
import "./Benefits.scss";

export default function Benefits() {
    return (
        <section className="benefits">
            <div className="container">
                <div className="benefits__inner">
                    <Title
                            type="section"
                            text="Loungewear you can be proud of."
                        />
                    <div className="benefits__info">
                        <ul className="benefits__list">
                            {BENEFITS.map(({ icon, id, name, alt, text }) => (
                                <li key={id} className="list-item">
                                    <div className="list-item__icon large">
                                        <img src={icon} alt={alt} />
                                    </div>
                                    <div className="list-item__content">
                                        <div className="list-item__name">
                                            {name}
                                        </div>
                                        <div className="list-item__text">
                                            {text}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ProductSlider productName="White Robe" slides={PRODUCT_PHOTOS} />
                    </div>

                    
                </div>
            </div>
        </section>
    );
}
