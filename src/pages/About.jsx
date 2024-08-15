import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div>
          <h1>About Us</h1>
          <p>Your Trusted Healthcare Partner</p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview">
        <div className="container">
          <img src="/path-to-company-image.jpg" alt="Our Company" />
          <div className="content">
            <h2>Who We Are</h2>
            <p>
              At HealthCare, we are dedicated to providing exceptional medical services with compassion and care. Our team of professionals is committed to your well-being, offering a wide range of services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <i className="fas fa-heartbeat"></i>
              <h3>Compassion</h3>
              <p>We prioritize patient care and empathy in every aspect of our service.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-stethoscope"></i>
              <h3>Expertise</h3>
              <p>Our team comprises highly skilled professionals with years of experience.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-user-shield"></i>
              <h3>Integrity</h3>
              <p>We uphold the highest ethical standards in all our practices.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
