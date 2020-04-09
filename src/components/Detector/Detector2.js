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

const Demo = ({ classes }) => {
    const [getImage, setImage] = useState(null);
    const [getFile, setFile] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [getResultString, setResultString] = useState(
        "Please upload an Image"
    );
    const upload = (e) => {
        console.log("Upload");
        setFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
        console.log("dogImage :", e.target.files[0]);
    };
    const createResult = (result) => {
        if (result) {
            console.log(result);
            return "Detected Disease: " + result.disease;
        }
        console.log("Please upload a valid image");
        return "Please upload an Image";
    };

    const detect = (blob) => {
        console.log("Detect");
        setResultString("please wait...");
        if (getImage) {
            console.log("Detect er cropped Image  ", croppedImage);
            console.log("The get file", getFile);
            console.log("The blob in use", blob);

            const data = new FormData();
            data.append("image", blob);
            fetch("https://agrgb-rest.herokuapp.com/api/detect", {
                method: "POST",
                body: data,
            })
                .then((r) => r.json())
                .then((r) => setResultString(createResult(r)));
        }
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
    }, []);

    return (
        <div style={{ border: "1px solid", widht: "400px" }}>
            <div className={classes.cropContainer}>
                <Cropper
                    image={getImage}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <div className={classes.controls}>
                <div className={classes.sliderContainer}>
                    <Typography
                        style={{ margin: 30, color: "green" }}
                        variant="overline"
                        classes={{ root: classes.sliderLabel }}
                    >
                        <p style={{ fontSize: 12 }}>ZOOM</p>
                    </Typography>
                    <Slider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e, zoom) => setZoom(zoom)}
                    />
                </div>
                <div className={classes.sliderContainer}>
                    <Typography
                        style={{ margin: 30, fontSize: 12 }}
                        variant="overline"
                        classes={{ root: classes.sliderLabel }}
                    >
                        <p style={{ fontSize: 12 }}>ROTATION</p>
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
                <input
                    classes={{ root: classes.cropButton }}
                    onChange={(e) => upload(e)}
                    type="file"
                />
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
            <ImgDialog img={croppedImage} onClose={onClose} />
        </div>
    );
};

const Detector = withStyles(styles)(Demo);
export default Detector;
