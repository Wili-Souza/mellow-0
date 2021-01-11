import React from "react";
import { css } from "@emotion/react"

function Slide({ content }){
    return (
        <div 
            className="slide-content" 
            style={{backgroundImage: `url(${content})`}}
        />
    );
}

export default Slide;