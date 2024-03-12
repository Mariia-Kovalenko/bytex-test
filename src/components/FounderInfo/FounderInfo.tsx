import Button from "../../common/Button/Button";
import Title from "../../common/Title/Title";
import { FOUNDER_INFO, PRODUCT_BUTTON_TEXT } from "../../utils/constants";
import "./FounderInfo.scss";

export default function FounderInfo() {
    return (
        <div className="founder">
            <div className="container">
                <div className="founder__inner">
                    <div className="founder__banner">
                        <div className="founder__image">
                            <img src="./product-2.jpg" alt="" />
                        </div>
                        <div className="founder__image main">
                            <img src="./product-1.jpg" alt="" />
                        </div>
                        <div className="founder__image">
                            <img src="./product-4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="founder__title">
                    <Title type="section" text="Be your best self." />
                    </div>
                    
                    <div className="founder__content">
                        <div className="founder__text">
                            {FOUNDER_INFO.split("\n").map((string) => (
                                <p>{string}<br></br></p>
                            ))}
                        </div>
                        <Button text={PRODUCT_BUTTON_TEXT} onClick={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    );
}
