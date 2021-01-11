import React from "react";
import Benefit from "./Benefit";

function PlanCard(props){
    const cardClasses = `card-${props.number} cardImgContainer`;
    return (
        <div className="planCard">
            <h2>Plan {props.number}</h2>
            <p>7 Days trial</p>
            <div className={cardClasses}>
                <img className="cardImg" src={props.imgURL} alt="food"></img>
            </div>
            <ul>
                {props.benefits.map((benefit, index)  => {
                    return <Benefit 
                        key={index}
                        benefitText={benefit}
                    />
                })}
            </ul>
            <button className="btn-try">LET'S TRY</button>
        </div>
    );
}

export default PlanCard;
