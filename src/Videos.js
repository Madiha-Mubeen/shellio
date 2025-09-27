import React, { useRef } from "react";

function Videos ({ src, title, description, muted }) {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <div>
            <video controls width="400" className="videos-card"
            muted={muted}
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >
                <source src={src} type="video/mp4" />
            </video>
                <h2>{title}</h2>
                <p>{description}</p>
            
        </div>
    );
}

export default Videos;