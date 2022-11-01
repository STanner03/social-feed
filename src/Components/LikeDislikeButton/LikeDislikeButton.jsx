import React, { useState } from 'react';
import './LikeDislikeButton.css'

const LikeDislikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    const [toggleButton, setToggleButton] = useState("inactive");

    function handleClick1() {
        if(buttonClass === "inactive") {
            setButtonClass("active");
        }
        else {
            setButtonClass("inactive")
        }
    }

    function handleClick2() {
        if(toggleButton === "inactive") {
            setToggleButton("active")
        }
        else {
            setToggleButton("inactive")
        }
    }

    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick1}>Like</button>
            <button className={toggleButton} onClick={handleClick2}>Dislike</button>
        </div>
     );
}
 
export default LikeDislikeButton;