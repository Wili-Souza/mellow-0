import React from "react";

function Navbar(){
    return (
        <div className="nav">
            <a href="/">
                <img className="logo" src="imgs/logo.png" alt="mellow logo"></img>
            </a>

            <input type="checkbox" id="menu" />
            <label for="menu">&#9776;</label>
            <div className="nav-control">
                <ul>
                    <li><a href="#recipes">Recipes</a></li>
                    <li><a href="/">Go Green</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">How it works</a></li>
                </ul>
            </div>
        
            <div className="userPicBorder">
                <div className="userPic" >
                    <img className="picture" src="https://www.hypeness.com.br/1/2018/08/edit_florescer1.jpg" alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

