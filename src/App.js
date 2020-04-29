import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Detector from "./components/Detector/Detector";
import FooterPage from "./components/Footer/FooterPage";
import IntroView from "./components/IntroView/IntroView";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="content-wrap">
                <Route path="/" exact component={IntroView} />
                <Route path="/detector" component={Detector} />
            </div>
            <FooterPage />
        </div>
    );
}

export default App;
