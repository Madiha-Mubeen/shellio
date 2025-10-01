import React from "react";
import Videos from "./Videos";

function Main() {

    const videosList = [
        {
            src: process.env.PUBLIC_URL + "/Videos/mirrorshell.mp4",
            title: "shelly Mirror",
            description: "Aesthetic & Beautiful"

        },
        {
            src: process.env.PUBLIC_URL + "/Videos/braceletcowrie.mp4",
            title: "Cowrie Bracelet",
            description: "Looks so beautiful"
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/makeupkitshell.mp4",
            title: "Beautiful makeup kit",
            description: "Barbie style Makeupkit"
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/standshell.mp4",
            title: "Elegant shiny shell stand",
            description: "Graceful look"
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/canvasshell.mp4",
            title: "good looking canvas",
            description: "Can be done during free time when feel'in to draw on canvas with some different style."
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/shellpaint.mp4",
            title: "Shell Paint Palette",
            description: "You can use this in your next painting time !"
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/candleshell.mp4",
            title: "Shell Based Candles",
            description: "Decor your Home with these"
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/necklaceshell.mp4",
            title: "Pretty Shell Necklace",
            description: "Will suits you well."
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/claycraftshell.mp4",
            title: "Shell Clay Craft",
            description: "Fits with your DIY Collection"
        }, {
            src: process.env.PUBLIC_URL + "/Videos/antiqueshell.mp4",
            title: "Easy DIY",
            description: "This looks good in your Sider"
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/bowlshell.mp4",
            title: "Sell Bowl",
            description: "Easy to make & ready to use"
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/shellmermaidmir.mp4",
            title: "Mermaid Mirror",
            description: "It fits so well the your wardrobe table"
        },
        {
            src: process.env.PUBLIC_URL + "/Videos/shellphonech.mp4",
            title: "Crystal Shell Phone Charm",
            description: "Looks good on the phone <3"
        }
    ]

    return (
        <main>
            <h2 className="scroll-text">Scroll'in Down <br></br><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z"/></svg></h2>

            <div className="videos-collection">
            {videosList.map(( video, index, muted) => (

                <Videos className="videos-card" key= {index} src= {video.src} autoPlay loop muted={muted} title= {video.title} description={video.description}   />
            
            ))}
            </div>
        </main>
    );
}

export default Main;