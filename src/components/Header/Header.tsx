import React from "react";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import "./Header.scss";
import { OFFERS } from "../../utils/constants";


export default function Header() {
    const deviceWidth = useDeviceWidth();

    let itemsToRender = OFFERS;

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
                <div className="offer">{OFFERS[1]}</div>
            )}
        </header>
    );
}
