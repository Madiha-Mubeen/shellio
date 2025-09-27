import React from "react";

function Videos ({src, title, description}) {
    return (
        <div>
            <video controls width="400">
                <source src={src}>
                </source>
                <h2>{title}</h2>
                <p>{description}</p>
            </video>
        </div>
    );
}

export default Videos;