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
          <img src="/assets/company-img.jpg" alt="Company Image" />
          <div className="content">
            <h2>Who We Are</h2>
            <p>
              At HealthCare, we are dedicated to providing exceptional medical services with compassion and care. Our team of professionals is committed to your well-being, offering a wide range of services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="additional-info">
        <div className="container">
          <div className="image-column">
            <img src="/assets/about.jpg" alt="Additional Info" />
          </div>
          <div className="text-column">
            <h5>Addition Info</h5>
            <h1>Best Medical Care For Yourself and Your Family</h1>
            <p>
              At our healthcare facility, we prioritize your well-being with exceptional medical care tailored to your needs. Our dedicated team of professionals is committed to providing comprehensive and compassionate services for you and your family. From routine check-ups to specialized treatments, we ensure the highest quality of care and support. Trust us to be your partner in maintaining optimal health and well-being.            </p>
            <div className="features">
              <div className="feature-item">
                <i className="fa fa-3x fa-user-md"></i>
                <h6>Qualified Doctors</h6>
              </div>
              <div className="feature-item">
                <i className="fa fa-3x fa-procedures"></i>
                <h6>Emergency Services</h6>
              </div>
              <div className="feature-item">
                <i className="fa fa-3x fa-microscope"></i>
                <h6>Accurate Testing</h6>
              </div>
              <div className="feature-item">
                <i className="fa fa-3x fa-ambulance"></i>
                <h6>Free Ambulance</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Compassion</h3>
              <p>We prioritize patient care and empathy in every aspect of our service.</p>
            </div>
            <div className="value-item">
              <h3>Expertise</h3>
              <p>Our team comprises highly skilled professionals with years of experience.</p>
            </div>
            <div className="value-item">
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
