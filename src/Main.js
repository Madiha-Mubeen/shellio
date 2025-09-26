import React from "react";
import Videos from "Videos";

function Main() {
    return (
        <main>
            <h2>Scrollin Down <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z"/></svg></h2>

            <div class="videos-collection">
            <Videos src="public/Videos/shellMirror.mp4" title="shelly Mirror" description="Looks aesthetic & beautiful"   />
            </div>
        </main>
    );
}

export default Main;