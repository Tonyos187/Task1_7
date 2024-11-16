import React from 'react'
import Footer2 from '../../Components/Footer2/Footer2'
import Nav2 from '../../Components/Nav2/Nav2'
import Hero2 from '../../Components/Hero2/Hero2'
import GetStarted from '../../Components/GetStarted/GetStarted'

const Contact = () => {
  return (
    <>
      <Nav2/>
      <Hero2 title="Contact Us" path="Home > Contact Us"/>
      <GetStarted />
      <Footer2 />
    </>
  )
}

export default Contact