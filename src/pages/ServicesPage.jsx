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
        {
            title: 'Audiologist',
            description: 'Comprehensive hearing evaluations and tailored solutions to enhance your auditory health.'
        },
        {
            title: 'Gynecologist',
            description: 'Specialized womens health services focusing on preventive care and personalized treatments'
        },
        {
            title: 'Orthopedic Surgeon',
            description: 'Expert care for musculoskeletal issues, from diagnosis to advanced surgical solutions.'
        },
        {
            title: 'Outdoor Checkup',
            description: 'Convenient and thorough health checkups at your location for added comfort and accessibility.'
        },
        {
            title: 'Ambulance Service',
            description: '24/7 emergency transportation with skilled professionals ensuring timely and safe care.'
        },
        {
           title: 'Medicine and Pharmacy',
           description: 'Reliable access to prescribed medications and expert pharmaceutical advice for your health needs.'
        }  
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