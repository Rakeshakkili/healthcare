import React from "react";
import '../styles/ServicesPage.css';

function ServicesPage() {
    const services = [
        {
            title: 'Dermatology',
            description: 'Our dermatology department offers a range of skin care treatments, from acne management to advanced laser therapies.',

        },
        {
            title: 'Pediatrics',
            description: 'We provide comprehensive pediatric care, ensuring the health and well-being of children from infancy through adolescence.',
        },
        {
            title: 'Cardiology',
            description: 'Our cardiologists are experts in diagnosing and treating heart conditions, offering personalized care for each patient.',
        },
        // Add more detailed services as needed   
    ];

    return (
        <section className="services-page">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-details">
                    {services.map((service, index) => (
                        <div key={index} className="service-item">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesPage;