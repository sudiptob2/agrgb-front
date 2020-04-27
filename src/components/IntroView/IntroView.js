import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AgRGB from "./AgRGB";
import Text2 from "./Text2";
import Text1 from "./Text1";
import AnimatedTree from "./AnimatedTree";
import VideoPlayer from "./VideoPlayer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function IntroView() {
    return (
        <div className="App">
            <>
                <div className="top-space" />
                <AnimatedTree />
                <AgRGB />
                <Text1 />
                <Link to="/detector">
                    <Button className="start-button start-button-size">
                        START...
                    </Button>
                </Link>
                <Text2 />
                <VideoPlayer />
            </>
        </div>
    );
}

export default IntroView;
