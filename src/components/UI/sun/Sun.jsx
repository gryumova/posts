import React from "react";
import classes from "./Sun.module.css"

const Sun = () => {
    return(
        <div className={classes.container}>
            <div className={classes.sun}></div>
            <div className={classes.earth}>
                <div className={classes.moon}></div>
            </div>
        </div>
    )
}

export default Sun;