import React from "react";
import RgbTitle from "../../assets/images/AgRGB.png";
import "./AgRGB.css";

const AgRGB = (props) => {
    return (
        <div className="center">
            <img className="rgb-title" src={RgbTitle} alt="AGRGB" />
        </div>
    );
};

export default AgRGB;
