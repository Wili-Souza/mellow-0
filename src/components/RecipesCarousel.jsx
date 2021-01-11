import React, { useState } from "react";
import SliderContent from "./SliderContent"
import Slide from "./Slide";
import { css } from "@emotion/react";
import Arrow from "./Arrow";
import foodImgs from "../carouselFoodImgs";

function RecipesCarousel() {
    const [ state, setState ] = useState({
        activeSlide: 0,
        translate: 0,
        transition: 0.45
    });

    const { activeSlide, translate, transition } = state;

    function nextSlide(){
        if ( (activeSlide + 4) === foodImgs.length - 1) {
            return setState({
                ...state,
                activeSlide: activeSlide + 1,
                translate: (17.5 * (activeSlide) + 5
                ) 
            });
        } 
        
        if ( !(activeSlide === foodImgs.length - 4) ) {
            setState({
                ...state,
                activeSlide: activeSlide + 1,
                translate: (17.5 * (activeSlide + 1)) 
            });
        }
    }

    function prevSlide(){
        if ( !(activeSlide === 0) ) {
            setState({
                ...state,
                activeSlide: activeSlide - 1,
                translate: (17.5 * (activeSlide - 1)) 
            });
        }
    }

    return (
        <div className="carousel">
            <div className="slider">
                <SliderContent
                    translate={translate}
                    transition={transition}
                    numberSlides={foodImgs.length}
                >
                {
                    foodImgs.map((foodImg, idx) => {
                        return <Slide 
                            key={idx}
                            content={foodImg}                        
                        />;
                    })
                }
                </SliderContent>
                <Arrow 
                    direction="left"
                    handleClick={prevSlide}
                />
                <Arrow
                    direction="right"
                    handleClick={nextSlide}
                />
            </div>
        </div>
    );
}

export default RecipesCarousel;