import React from "react";
import Footer from "../layouts/Footer";
import bgImage from "../assets/bgImage.jpg";
import serversbg from "../assets/serversbg.webp";
import abc from "../assets/abc.jpg";
import quotationmark from "../assets/quotationmark.png";

function Landing() {
  const sectionStyle = {
    background: 'linear-gradient(to bottom, black, #4ac7f0)',
    // Add any other styles you need for the section here
  };

  return (
    <div className="h-10 w-screen">
      <section className="flex flex-col h-screen text-white justify-center items-center text-center relative" style = {sectionStyle}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${abc})` }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to the<b> Electronics </b> club of IIIT Kottayam
          </h2>
          <h1 className="text-6xl font-bold text-primary">ELIX</h1>
          <p>Electronic Learning and Innovation eXperience</p>
          <p className="mt-8 text-gray-700 flex items-center">
            <img
              src={quotationmark}
              alt="quotation mark"
              className="w-5 mr-2 inline"
            />
            "It is not enough to wire the world if you short-circuit the soul.
            Technology without heart is not enough."
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center bg-beige-50 py-12"  style={{ backgroundColor: "#BDC2BF" }}>
        <div className="w-1/2">
          <img alt="About Us" className="w-full h-auto" />
        </div>
        <div className="w-1/2 mx-4 md:mx-20">
          <h1 className="text-4xl font-bold mb-4  text-primary">About Us</h1>
          <p className="text-gray-800 leading-6">
            Electronics Club, originally founded as a hobby group, has evolved
            into a thriving student organization. Our mission is to foster a
            culture of innovation, crafting cutting-edge technological solutions
            for real-world challenges. We offer a platform where any student
            with an idea can freely approach the club to acquire the necessary
            technical skills to bring that idea to life. This is a space where
            students can transcend the boundaries of their academic curriculum
            and gain hands-on experience by applying concepts learned in various
            theoretical courses. Throughout the year, we host a wide range of
            lectures, workshops, projects, and competitions covering both analog
            and digital electronics to keep our calendar bustling with learning
            opportunities.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center py-12">
        <div className="w-1/2">
          <img alt="About Us" className="w-full h-auto" />
        </div>
        <div className="w-1/2 mx-4 md:mx-20">
          <h1 className="text-4xl font-bold mb-4  text-primary">Mission</h1>
          <p className="text-gray-800 leading-6">
            Electronics Club, originally founded as a hobby group, has evolved
            into a thriving student organization. Our mission is to foster a
            culture of innovation, crafting cutting-edge technological solutions
            for real-world challenges. We offer a platform where any student
            with an idea can freely approach the club to acquire the necessary
            technical skills to bring that idea to life. This is a space where
            students can transcend the boundaries of their academic curriculum
            and gain hands-on experience by applying concepts learned in various
            theoretical courses. Throughout the year, we host a wide range of
            lectures, workshops, projects, and competitions covering both analog
            and digital electronics to keep our calendar bustling with learning
            opportunities.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
