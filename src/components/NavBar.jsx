import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    )
}

export default NavBar;