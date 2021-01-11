import React from "react";

function Benefit(props){
    return (
        <li>
            {props.benefitText}
            <span className="benefit-dash">-</span>
        </li>
    );
}

export default Benefit;

