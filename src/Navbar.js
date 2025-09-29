import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h1>Explore The - Shellio</h1>
            <ul>
                <li><Link to="/" className="home-bg"><img src="/shelliohome.png" alt="home"></img></Link></li>
                <li><Link to="/about" className="about-bg"><img src="/shellioabout.png" alt="about"></img></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;