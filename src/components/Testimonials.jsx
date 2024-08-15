import React from 'react';
import '../styles/Testimonials.css';

function Testimonials(){
    const testimonials = [
        { name: 'King', feedback: 'Excellent service and friendly staff.'},
        { name: 'Rakesh', feedback: 'Highly recommend their dermatology services.'},
        //we can add more testimonial as needed
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2>What Our Clients Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, idex) => (
                        <div key={idex} className="testimonial-item">
                            <p>"{testimonial.feedback}"</p>
                            <h4>- {testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;