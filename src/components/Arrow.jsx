/** @jsxImportSource @emotion/react */

import React from 'react'
import { css, jsx } from '@emotion/react'
import rightArrow from '../images/right-arrow.svg'
import leftArrow from '../images/left-arrow.svg'

function Arrow ({ direction, handleClick }) {
    return(
        <div
            onClick={handleClick}
            css={css`
                display: flex;
                position: absolute;
                top: 50%;
                ${direction === 'right' ? `right: 25px` : `left: 25px`};
                height: 50px;
                width: 50px;
                justify-content: center;
                background:  rgb(0, 234, 135);
                border-radius: 50%;
                cursor: pointer;
                align-items: center;
                transition: transform ease-in 0.1s;
                &:hover {
                    transform: scale(1.1);
                }
                img {
                    transform: translateX(${direction === 'left' ? '-2' : '2'}px);
                    &:focus {
                    outline: 0;
                    }
                }
            `}
            >
            <img className="arrow-img" src={direction === 'right' ? rightArrow : leftArrow} alt="food"/> 
        </div>
    );
}
  

export default Arrow;