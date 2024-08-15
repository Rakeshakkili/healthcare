import React from "react";
import '../styles/Services.css';

function Services(){
    const services = [
        { title: 'Dermatology', descriptioin: 'Expert skin ccare services.'},
        { title: 'Pediatrics', descriptioin: 'Comperhensive care for children.'},
        { title: 'Cardilogy', descriptioin: 'Heart health specialist.'},
        //we can add more services as needed
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {services.map((services, index) => (
                        <div key={index} className="service-item">
                            <h3>{services.title}</h3>
                            <p>{services.descriptioin}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;