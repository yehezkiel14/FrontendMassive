import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutUs() {
    return (
        <div>
            <Navbar></Navbar>
            <About />
            <Footer></Footer>
        </div>
    );
}

export default AboutUs;