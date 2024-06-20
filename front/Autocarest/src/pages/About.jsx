// src/AboutUs.jsx
import React from 'react';
import '../styles/About.css'; // Asegúrate de crear este archivo para los estilos
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (

        <>
            <Navbar />
            <div className="about-container">
                <h1>About Us</h1>
                <p>Welcome to our company. We are committed to delivering the best service possible.</p>
                <h2>Our Mission</h2>
                <p>Our mission is to provide high-quality products that combine performance with value pricing, while establishing a successful relationship with our customers and our suppliers.</p>
                <h2>Our Vision</h2>
                <p>Our vision is to be the most trusted provider of technology solutions in the industry.</p>
                <h2>Our Team</h2>
                <p>We have a diverse team of professionals who are dedicated to our mission and vision.</p>
            </div>
            <Footer />
        </>
    );
};

export default About;
