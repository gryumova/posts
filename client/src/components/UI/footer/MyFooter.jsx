import React from "react";
import { Link } from "react-router-dom";
import classes from "./MyFooter.module.css"

const MyFooter = ()  => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_links}>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
            <div></div>
            <div className={classes.contact_links}>
                <a href="https://vk.com/sservo_voshod">
                    <img src={require("../../../assets/vk.png")}  width={40} alt="vk"/>
                </a>
            </div>
        </div>
    );
};

export default MyFooter;