import React from "react";
import Sun from "../UI/sun/Sun";

const Content = () => {
    return (
        <div 
            className="astronautSun"
        >
            <img 
                src={require("../../styles/images/kosm.png")} 
                alt="astronaut"
                className='astronaut'
            />
            <Sun/>
        </div>
    )
}

export default Content;