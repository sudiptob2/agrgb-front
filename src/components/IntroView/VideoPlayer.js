import React from "react";
import ModalVideo from "react-modal-video";
import "./VideoPlayer.css";

class VideoPlayer extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <div>
                <div style={{ border: "solid, 1px" }}>
                    <ModalVideo
                        channel="youtube"
                        ratio="16:0"
                        isOpen={this.state.isOpen}
                        videoId="nxrzLKkGX3M"
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </div>

                <button className="play-btn" onClick={this.openModal}>
                    how it works.
                </button>
            </div>
        );
    }
}

export default VideoPlayer;
