import pauseSvg from "*.svg";
import waveSvg from "*.svg";
import React from "react";

const MessageAudio = () => {
    return (
        <div className="message__audio">
            <audio preload="auto" />
            <div className="message__audio-progress"  />
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button >
                        <img src={pauseSvg} alt="Pause svg" />
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="Wave svg" />
                </div>
                <span className="message__audio-duration">currentTime</span>
            </div>
        </div>
    );
};
export default MessageAudio