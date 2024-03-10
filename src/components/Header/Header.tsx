import React from "react";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import "./Header.scss";

const offers = [
    "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)",
    "FREE SHIPPING on orders > $200",
    "easy 45 day return window",
];

export default function Header() {
    const deviceWidth = useDeviceWidth();

    let itemsToRender = offers;

    return (
        <header className="header">
            {deviceWidth > 768 ? (
                itemsToRender.map((offer, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div className="offer">{offer}</div>
                            {i !== itemsToRender.length - 1 && (
                                <div className="delimiter"></div>
                            )}
                        </React.Fragment>
                    );
                })
            ) : (
                <div className="offer">{offers[1]}</div>
            )}
        </header>
    );
}
