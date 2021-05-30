import React from "react";
import "style.css"
import "tailwindcss/dist/base.css"
import Header from "components/headers/light";
import Footer from "components/footers/MiniCenteredFooter";
import Hero from "components/hero/SimpleWithSideImageHero";

const About = () => {
     return (
    <div>
        <Header/>
        <Hero/>
        <Footer/>
   </div>
  )
}

export default About;