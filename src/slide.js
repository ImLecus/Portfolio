import React from "react";

const Slide = (props) => {
    return(
        <div class="slide text-container">
            <div class="name"><div class="square"></div>
                <span>{props.name}</span>
            </div>
            <img src={"../img/" + props.name.toLowerCase() + ".webp"}/>
        </div>
    );
}
export default Slide;