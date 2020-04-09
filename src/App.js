import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Detector from "./components/Detector/Detector";
import AgRGB from "./components/IntroView/AgRGB";
import Text2 from "./components/IntroView/Text2";
import Text1 from "./components/IntroView/Text1";
import AnimatedTree from "./components/IntroView/AnimatedTree";
import FooterPage from "./components/Footer/FooterPage";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
    const [getStart, setStart] = useState(false);
    const startClick = () => {
        setStart(true);
    };
    return (
        <div className="App">
            {getStart && <Detector />}
            {!getStart && (
                <>
                    <div className="top-space" />
                    <AnimatedTree />
                    <AgRGB />
                    <Text1 />
                    <Button
                        onClick={startClick}
                        className="start-button start-button-size"
                    >
                        START...
                    </Button>
                    <Text2 />
                </>
            )}
            <FooterPage />
        </div>
    );
}

export default App;
