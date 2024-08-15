import React from 'react';
import '../styles/Hero.css';


function Hero(){
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Your Health, Our Priority</h1>
                <p>Providing top-notch healthcare services for your well-beign.</p>
                <a href="#services">Explore Our Services</a>
            </div>
        </section>
    );
}

export default Hero;