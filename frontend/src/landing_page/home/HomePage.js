import React from 'react'
import Awards from './Awards';
import Hero from './Hero'
import Status from './Status'
import Education from './Education'
import Pricing from './Pricing';
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import OpenAccount from "../../OpenAccount";

function HomePage() {
    return ( 
    <div>
        <Navbar />
        <Hero />
        <Awards />
        <Status />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
    </div>
    );
}

export default HomePage;