import React, { useState } from 'react';

const Detector = () => {
    const defaultImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    const [getFile, setFile] = useState(null);
    const [getImage, setImage] = useState(defaultImage);
    const [result, setResult] = useState("");


    const upload = (e) => {
        console.log("Upload")
        setFile(e.target.files[0])
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    const detect = () => {
        console.log("Detect")
        if(getImage) {
            const data = new FormData()
            data.append("image", getFile)
            fetch("/api/detect", {
                method: 'POST',
                body: data
            })
            .then( r => r.json())
            .then( r => setResult(JSON.stringify(r)))
        }
    }

    return(
        <div className="Detector">
            <div className="Upload">
                <img style={{ border: 2}} src={getImage} alt="Smiley face" height="512" width="512"/>
                <div className="Button">   
                    <input onChange={ e => upload(e)} type="file"/>
                    <button onClick={ e => detect()} type="button">Detect</button>
                </div>
            </div>
            <div className="Result">
                Result
                <div>
                    {result}
                </div>
            </div>
        </div>
    )
}

export default Detector