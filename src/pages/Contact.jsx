import React from "react";
import ContactForm from "../components/ContactForm";
import '../styles/Contact.css';

function Contact() {
    return (
        <section className="contact-page">
            <div className="container">
                <h2>Contact Us</h2>
                <p>We’re here to help you with any questions or concerns. Please feel free to reach out to us through the form below or by using the contact information provided.</p>
                <ContactForm />
                <div className="contact-details">
                    <h3>Our Location</h3>
                    <p>Road No:3.,  Kphb colony., Hyderabad., 500085</p>
                    <h3>Email Us</h3>
                    <p><a href="mailto:info@healthcare.com">info@healthcare.com</a></p>
                    <h3>Call Us</h3>
                    <p><a href="tel:863912428"> +91 8639512428</a></p>
                </div>
            </div>
        </section>
    );
}

export default Contact;