import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return (
        <div id="footer" className="footer">
            <div className="footer-links">
                <ul className="links">
                    <li><a href="/">ABOUT US</a></li>
                    <li><a href="/">CONTACT</a></li>
                    <li><a href="/">GO GREEN</a></li>
                    <li><a href="/">TERMS & CONDITIONS</a></li>
                </ul>
            </div>
            <a href="/">
                <img className="footer-logo" src="imgs/logo.png" alt="mellow logo"></img>
            </a>
            <div className="footer-box">
                <div className="footer-text">
                    <span>Cool phrase goes here</span>
                    <span className="footer-text-green">Maybe in two lines</span>
                </div>
                <div className="subscribe">
                    <input className="sub-input" placeholder="Email Address"></input>
                    <button className="sub-button">SUBSCRIBE</button>
                </div>
                <div className="icons">
                    <FontAwesomeIcon className="midia-icon" icon={faFacebookF}/>
                    <FontAwesomeIcon className="midia-icon" icon={faTwitter}/>
                    <FontAwesomeIcon className="midia-icon" icon={faInstagram}/>
                    <div className="pinterest-circle">
                        <FontAwesomeIcon className="pinterest-icon" icon={faPinterestP}/>
                    </div>
                </div>
                <p className="footer-small-text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
        </div>
    );
}

export default Footer;