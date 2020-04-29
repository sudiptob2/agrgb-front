import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./ModalView.css";

const YoutubeWatchModal = (props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <button className="play-btn item1" onClick={() => setOpen(true)}>
                how it works.
            </button>
            <Modal
                classNames={{
                    modal: "customModal",
                }}
                open={open}
                onClose={() => setOpen(false)}
                center
            >
                <div className="center">
                    <p className="text1">How AgRGB Works </p>
                </div>
                <iframe
                    className="responsive-iframe"
                    src="https://www.youtube.com/embed/nxrzLKkGX3M"
                    title="agrgb explained"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </Modal>
        </>
    );
};

export default YoutubeWatchModal;
