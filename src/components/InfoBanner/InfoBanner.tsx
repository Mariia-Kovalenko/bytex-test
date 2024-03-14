import Title from "../../common/Title/Title";
import { INFO_ITEMS } from "../../utils/constants";
import "./InfoBanner.scss";

export default function InfoBanner() {
    return (
        <div className="info-banner">
            <Title text="Our total green impact" type="section" />
            <div className="info-banner__inner">
                {INFO_ITEMS.map((item, i) => (
                    <div className="info-banner__item">
                        <div className="info-banner__item-icon">
                            <img src={item.icon} alt={`item-${i}`} />
                        </div>
                        <div className="info-banner__item-name">
                            {item.title}
                        </div>
                        <div className="info-banner__item-text">
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
