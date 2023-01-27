import React from 'react';
import Crypto from "../../assets/hero-img.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                {/* Left side */}
                <div className="left">
                    <p>Buy & Sell Crypto 24x7 using Savings account.</p>
                    <h1>Invest in Cryptocurrency with your IRA</h1>
                    <p>Buy, Sell and Store hundreds of cryptocurrencies.</p>
                    <div className="input-container">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn">Learn More.</button>
                    </div>
                </div>
                {/* Right side */}
                <div className="right">
                    <div className="img-container">
                        <img src={Crypto} alt="hero-img" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;