import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ImgDialog from "./ImgDialog";
import getCroppedImg from "./CropImage";
import { styles } from "./styles";

import { trackPromise } from "react-promise-tracker";
import LoaderSpinner from "../Loader/LoaderSpinner";

const Detector = ({ classes }) => {
    const [getImage, setImage] = useState(null);
    const [getFile, setFile] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(5);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [getResultString, setResultString] = useState("No result");
    const [hasResult, setHasResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const upload = (e) => {
        console.log("Upload");
        setFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
        console.log("dogImage :", e.target.files[0]);
    };
    const createResult = (result) => {
        if (result) {
            console.log(result);
            setHasResult(true);
            return result.disease;
        } else {
            console.log("Please upload a valid image");
            setHasResult(false);
            return "Uplead a valid Image";
        }
    };

    const detect = (blob) => {
        console.log("Detect");
        if (getImage) {
            console.log("Detect er cropped Image  ", croppedImage);
            console.log("The get file", getFile);
            console.log("The blob in use", blob);

            const data = new FormData();
            data.append("image", blob);
            setIsLoading(true);
            trackPromise(
                fetch("https://agrgb-rest.herokuapp.com/api/detect", {
                    method: "POST",
                    body: data,
                })
            )
                .then((r) => r.json())
                .then((r) => setResultString(createResult(r)));
        }
        setIsLoading(false);
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                getImage,
                croppedAreaPixels,
                rotation
            );
            console.log("donee", croppedImage);
            setCroppedImage(croppedImage);
            const blob = await fetch(croppedImage).then((r) => r.blob());
            detect(blob);
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels, rotation, getImage]);

    const onClose = useCallback(() => {
        setCroppedImage(null);
        setHasResult(false);
    }, []);

    return (
        <div>
            <div className={classes.cropContainer}>
                <Cropper
                    image={getImage}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={3 / 4}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <div className={classes.controls}>
                <div className={classes.sliderContainer}>
                    <Typography
                        style={{ margin: 25, color: "green" }}
                        variant="overline"
                        classes={{ root: classes.sliderLabel }}
                    >
                        <p style={{ fontSize: 12 }}>ZOOM</p>
                    </Typography>
                    <Slider
                        value={zoom}
                        min={1}
                        max={5}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e, zoom) => setZoom(zoom)}
                    />
                </div>
                <div className={classes.sliderContainer}>
                    <Typography
                        style={{ margin: 24, fontSize: 12 }}
                        variant="overline"
                        classes={{ root: classes.sliderLabel }}
                    >
                        <p style={{ fontSize: 12, paddingRight: "3px" }}>
                            ROTATE
                        </p>
                    </Typography>
                    <Slider
                        style={{ margin: "10px" }}
                        value={rotation}
                        min={0}
                        max={360}
                        step={1}
                        aria-labelledby="Rotation"
                        onChange={(e, rotation) => setRotation(rotation)}
                    />
                </div>
                <Button
                    variant="outlined"
                    component="label"
                    classes={{ root: classes.cropButton }}
                >
                    Upload File
                    <input
                        type="file"
                        onChange={(e) => upload(e)}
                        style={{ display: "none" }}
                    />
                </Button>
                <Button
                    onClick={showCroppedImage}
                    variant="outlined"
                    color="default"
                    classes={{ root: classes.cropButton }}
                    startIcon={<SearchIcon />}
                >
                    Detect
                </Button>
            </div>
            {console.log("get result: ", getResultString)}
            {console.log("hasResult ", hasResult)}
            {console.log("Loder trac", isLoading)}
            {!hasResult && <LoaderSpinner />}
            {hasResult && (
                <ImgDialog
                    img={croppedImage}
                    result={getResultString}
                    onClose={onClose}
                />
            )}
        </div>
    );
};

export default withStyles(styles)(Detector);
