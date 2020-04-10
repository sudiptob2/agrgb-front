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
                        <a
                            href="https://fb.com/sudiptob2"
                            target="_blank"
                            className="face"
                        >
                            facebook |{" "}
                        </a>
                        <a
                            href="https://github.com/sudiptob2"
                            target="_blank"
                            className="GitHub"
                        >
                            GitHub |{" "}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sudiptob2/"
                            target="_blank"
                            className="linked"
                        >
                            LinkedIn{" "}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
