import React from "react";
import PlanCard from "./PlanCard";

const planCards = [
    {
        id: 1,
        imgURL: "./imgs/panela.png",
        benefits: ["Users", "Save Recipes", "Manage Purchase", "Compare Price", "New recipes every week"]
    },
    {
        id: 2,
        imgURL: "./imgs/abacate.png",
        benefits: ["Users", "Save Recipes", "Manage Purchase", "Compare Price", "New recipes every week"]
    },
    {
        id: 3,
        imgURL: "./imgs/tigela.png",
        benefits: ["Users", "Save Recipes", "Manage Purchase", "Compare Price", "New recipes every week"]
    }
]

function Heading(){
    return (
        <div className="heading" id="heading">
            <div className="vertical-images">
                <img className="img-food-1" src="./imgs/onion.png" alt="food"></img>
                <img className="img-food-2" src="./imgs/bowl.png" alt="food"></img>
                <img className="img-food-3" src="./imgs/spoons.png" alt="food"></img>
                <img className="img-food-4" src="./imgs/bread.png" alt="food"></img>
                <img className="img-food-5" src="./imgs/bowl-cream.png" alt="food"></img>
            </div>
            <div className="heading-content">
                <h1>Your subscription has expired...</h1>
                <div className="heading-text">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a interdum urna, et
                        sagittis libero. In eros nunc, congue eget elit at
                    </p>
                </div>

                <div className="cards">
                    {planCards.map(card => {
                        return <PlanCard 
                            key={card.id}
                            number={card.id > 9 ? card.id : "0" + card.id} 
                            imgURL={card.imgURL} 
                            benefits={card.benefits}
                            />
                        })
                    }
                </div>
                
            </div>
        </div>
    );
}

export default Heading;

/* console.log(card.benefits)
                return <PlanCard number={card.id} imgURL={card.imgURL} benefits={card.benefits}/>
})} */
