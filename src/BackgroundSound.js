import React from "react";

function BackgroundSound() {
    return (
    <div className="audio">
        <audio loop muted controls autoPlay>
            <source src={process.env.PUBLIC_URL + "/calm-nature-sounds.mp3"} type="audio/mpeg" /> 
            Oh looks like your browsers does not support the audio tag 
        </audio>
    </div>
    )
}

export default BackgroundSound;