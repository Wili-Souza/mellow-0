import React from "react";
import RecipesCarousel from "./RecipesCarousel";

function Recipes() {
    return (
        <div id="recipes" className="recipes">
            <div className="recipes-text">
                <h1>Recipes</h1>
                <p className="text">Culpa qui officia deserunt mollit anim id est laborum . Sed ut perspiciatis unde
                omnis iste natus error sit voluptartem accusantium doloremque laudantium, tatum rem aperiam, eaque ipsa
                quae ab illo iventore veritatis et quasi ropeior architecto beatae vitae dicta sunt</p>
            </div>
            <RecipesCarousel />
        </div>
    );
} 

export default Recipes;