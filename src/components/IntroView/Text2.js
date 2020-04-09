import React from "react";
import "./Texts.css";

const Text2 = (props) => {
    return (
        <div className="center">
            <p className="text2">
                Built with TensorFlow + Flask + React. Learn more about <br />
                <a
                    className="about"
                    target="_blank"
                    href="https://ieeexplore.ieee.org/document/8473322"
                >
                    how it works.
                </a>
            </p>
        </div>
    );
};

export default Text2;
