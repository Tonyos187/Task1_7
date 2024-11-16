import React from 'react'
import Footer2 from '../../Components/Footer2/Footer2'
import Nav2 from '../../Components/Nav2/Nav2'
import Hero2 from '../../Components/Hero2/Hero2'
import AboutSection from '../../Components/AboutSection/AboutSection'
import TeamMembers from '../../Components/TeamMembers/TeamMembers'

const About = () => {
  return (
    <>
      <Nav2/>
      <Hero2 title="About Us" path= "Home > About Us"/>
      <AboutSection />
      <TeamMembers />
      <Footer2 />
    </>
  )
}

export default About