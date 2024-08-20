import React from "react";
import '../styles/Services.css';

function Services(){
    const services = [
        { title: 'Dermatology', descriptioin: 'Expert skin care services.'},
        { title: 'Pediatrics', descriptioin: 'Comperhensive care for children.'},
        { title: 'Cardilogy', descriptioin: 'Heart health specialist.'},
        { title: 'Audiologist', descriptioin: 'Hearing Care Expert'},
        { title: 'Gynecologist', descriptioin: 'Women’s Health Doctor'},
        { title: 'Orthopedic Surgeon', descriptioin: 'Bone & Joint Specialist'},
        { title: 'Outdoor Checkup', descriptioin: 'Mobile Health Service'},
        { title: 'Ambulance Service', descriptioin: 'Emergency Transport'},
        { title: 'Medicine and Pharmacy', descriptioin: 'Medication & Advice'},   
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