import React, { useState } from "react";
import Logo from "../../Logo.png";
import UploadIcon from "../../upload-icon.png";
import AgRGB from "../IntroView/AgRGB";
import "./Detector.css";

const Detector = () => {
    const defaultImage = UploadIcon;
    const [getFile, setFile] = useState(null);
    const [getImage, setImage] = useState(null);
    const [getResult, setResult] = useState("Please upload an Image");

    const createResult = (result) => {
        if (result) {
            console.log(result);
            return "Detected Disease: " + result.disease;
        }
        return "Please upload an Image";
    };

    const goHome = (e) => {
        window.location.reload(false);
    };

    const upload = (e) => {
        console.log("Upload");
        setFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
        console.log(getImage);
    };

    const detect = () => {
        console.log("Detect");
        setResult("please wait...");
        if (getImage) {
            const data = new FormData();
            data.append("image", getFile);
            fetch("https://agrgb-rest.herokuapp.com/api/detect", {
                method: "POST",
                body: data,
            })
                .then((r) => r.json())
                .then((r) => setResult(createResult(r)));
        }
    };

    return (
        <>
            <div className="Detector">
                <div className="upload center">
                    <div className="image-container">
                        <img
                            id="upload-icon"
                            src={getImage}
                            alt="Smiley face"
                            height="128"
                            width="128"
                        />
                    </div>
                </div>
                <div>
                    <div className="Result">{getResult}</div>
                    <div className="Button">
                        <input onChange={(e) => upload(e)} type="file" />
                        <button onClick={(e) => detect()} type="button">
                            Detect
                        </button>

                        <button
                            id="home-button"
                            onClick={(e) => goHome()}
                            type="button"
                        >
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detector;
