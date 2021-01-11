import React from "react";
import styled from "@emotion/styled" 

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}rem);
    transition: transform ease-out ${props => props.transition}s;
    width: ${props => 17.5 * props.numberSlides}rem;
    display: flex;
`

export default SliderContent;