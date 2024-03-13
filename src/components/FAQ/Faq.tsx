import Accordion from "../../common/Accordion/Accordion";
import Title from "../../common/Title/Title";
import "./Faq.scss";

export default function Faq() {
    return (
        <div className="faq">
            <div className="container">
                <Title text="Frequently asked questions." type="section" />
                <div className="faq__inner">
                    <Accordion />
                    <div className="faq__banner">
                        <img src="./product-3.jpg" alt="" />
                        <img src="./product-2.jpg" alt="" />
                        <img src="./gallery-16.jpg" alt="" />
                        <div className="rectangle"></div>
                        <div className="rectangle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
