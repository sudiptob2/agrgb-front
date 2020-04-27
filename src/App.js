import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Detector from "./components/Detector/Detector";
import FooterPage from "./components/Footer/FooterPage";
import IntroView from "./components/IntroView/IntroView";
import "./App.css";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    const [getStart, setStart] = useState(false);
    const startClick = () => {
        setStart(true);
    };
    return (
        <div className="App">
            <Route path="/" exact component={IntroView} />
            <Route path="/detector" component={Detector} />
            <FooterPage />
        </div>
    );
}

export default App;
