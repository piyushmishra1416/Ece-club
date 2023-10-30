import React from "react";
import Footer from "../layouts/Footer";
import bgImage from "../assets/bgImage.jpg";
import serversbg from "../assets/serversbg.webp";
import abc from "../assets/abc.jpg";
import quotationmark from "../assets/quotationmark.png";
import aboutus from "../assets/aboutus.jpg";
import electronics from "../assets/electronics.avif";
import mission from "../assets/mission.jpeg";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";
import bg3 from "../assets/bg3.jpeg";
import Carousel from "./Carousel";

function Landing() {
  const sectionStyle = {
    background: "linear-gradient(to bottom, black, #4ac7f0)",
    // Add any other styles you need for the section here
  };

  return (
    <div className="h-10 w-screen">
      {/* <ResponsiveAppBar /> */}
      <section
        className="flex flex-col h-screen text-white justify-center items-center text-center relative"
        style={sectionStyle}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
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

      <section
        className="flex justify-center items-center bg-beige-50 py-12"
        style={{ backgroundColor: "#BDC2BF" }}
      >
        <div className="w-1/2">
          <img alt="About Us" src={aboutus} className="w-5/6 mx-auto rounded-lg h-5/6" />
        </div>
        <div className="w-1/2 mx-4 md:mx-20">
          <h1 className="text-4xl font-bold mb-4  text-primary">About Us</h1>
          <p className="text-gray-800 leading-6">
            In a dynamic field like Electronics, our club recognizes the
            importance of bridging gap between theoretical knowledge and
            practical application. Our club acts as a guiding light and a
            gateway for those who share a passion for electronics. We explore
            various realms within electronics, offering students opportunities
            to work on hands-on projects, connect with industry professionals,
            and participate in sessions that shed light on the latest
            developments in the world of electronics. Our motto, "Sparking
            Innovation, Unleashing Potential" encapsulates our core values. ELIX
            is more than a club; it's a place where your innovative ideas come
            to life, where you build valuable connections with like-minded
            individuals, and where you nurture professional relationships. ELIX
            opens the door to endless possibilities in the field of electronics.
          </p>
        </div>
      </section>
      <Carousel />
      <section className="flex justify-center items-center py-12"  style={{ backgroundColor: "#BDC2BF" }}>
        <div className="w-1/2">
          <img alt="About Us" src={mission} className="w-5/6 mx-auto rounded-lg h-auto" />
        </div>
        <div className="w-1/2 mx-4 md:mx-20">
          <h1 className="text-4xl font-bold mb-4  text-primary">Mission</h1>
          <p className="text-gray-800 leading-6">
            Our mission is to empower students with the knowledge and skills
            required for excellence in the dynamic and ever-evolving field of
            electronics. We are deeply dedicated to bridging the gap between
            theoretical understanding and real-world application, equipping
            students to become industry-ready. Join us on your journey towards
            industry preparedness with the Electronics Club, and together, we
            will learn, innovate, and contribute to a brighter future through
            the transformative power of electronics.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
