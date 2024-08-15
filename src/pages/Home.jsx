import React from "react";
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from "../components/ContactForm";


function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Testimonials />
            <ContactForm />
        </>
    );
}

export default Home;