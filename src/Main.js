import React from "react";
import Videos from "./Videos";

function Main() {

    const videosList = [
        {
            src: "/videos/shellMirror.mp4",
            title: "shelly Mirror",
            description: "Aesthetic & Beautiful"

        },
        {
            src: 
        }
    ]

    return (
        <main>
            <h2>Scroll'in Down <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z"/></svg></h2>

            <div className="videos-collection">
            {videosList.map(( video, index) => (

                <Videos key= {index} src= {video.src} title= {video.title} description={video.description}   />
            
            ))}
            </div>
        </main>
    );
}

export default Main;