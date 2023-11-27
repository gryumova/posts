import React from "react";
import classes from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible}) => {

    const rootClasees = [classes.myModal];
    if (visible) rootClasees.push(classes.active);
    
    return (
        <div className={rootClasees.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal