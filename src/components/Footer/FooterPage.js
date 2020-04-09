import React from "react";
import "./FooterPage.css";

const FooterPage = () => {
    return (
        <footer>
            <div id="footer-main-container">
                <div className="copyright">
                    copyright 2020 | AgRGB AI Experiment
                </div>
                <div className="social">
                    Contact Us
                    <div className="socialLinks">
                        <a href="#" className="face">
                            facebook |{" "}
                        </a>
                        <a href="#" className="tweet">
                            twitter |{" "}
                        </a>
                        <a href="#" className="linked">
                            LinkedIn{" "}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
