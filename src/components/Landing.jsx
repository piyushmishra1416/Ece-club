import React from 'react'
import ece from "../assets/ece.jpg"
import ece1 from "../assets/ece1.jpeg"
import image from "../assets/image.svg"
import Footer from '../layouts/footer'

function Landing() {
  return (
    <div className='h-10 w-screen'>
      <img src={ece} alt='backgroundimage' />  
      <section className='flex justify-center items-center'>  
        <div className=''>
          <h1>About Us</h1>
          <p>Electronics Club, earlier started as a hobby group has now expanded into a students’ organisation with the objective of inculcating a spirit of developing innovative, cutting edge technology solutions to real life problems. We provide a platform to the students’ body where any individual with an idea can approach the club freely to grasp the necessary technical skills required to turn that idea into a reality. This is a place where students get an opportunity to think outside the academic curriculum and get practical experience by implementing and applying concepts learnt in various theoretical courses. We conduct a plethora of lectures, workshops, projects as well as competitions throughout the year concerning both analog as well as digital electronics keep the calendar busy and the participants, learning. Our summer projects are indeed a stepping stone for many freshers to develop interest in a particular field which help them in their future projects/internships/startups. We have not restricted ourselves to any specific domains but our branches span across various domains like embedded systems and IOT, VLSI, signal processing, machine learning and artificial intelligence. Over the past few years, we have taken up various Industrial projects offered to us by well-known Indian research organisations like DRDO, BARC INDIA (Broadcast Audience Research Council), BETIC.</p>
          <image />
        </div>
      </section> 
      <Footer />
    </div>
  )
}

export default Landing
