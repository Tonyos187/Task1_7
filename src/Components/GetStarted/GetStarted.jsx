import React from 'react'
import { ArrowRight, EnvelopeAtFill, MapFill, PhoneFill } from 'react-bootstrap-icons'
import "./GetStarted.css"
import { Button } from 'react-bootstrap'
function GetStarted() {
    return (
        <section className='w-100 p-4 row justify-content-between align-items-center mt-4 gy-5'>
            <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column'>
                <div className='w-100 row justify-content-center align-items-center'>
                    <div className='bg-main-blue main-div-width2 p-4 col-12 col-lg-6 rounded-top'>
                        <div className='row flex-column justify-content-center align-items-center gy-5 col-12'>
                            <div className='col-12 d-flex justify-content-start align-items-center gap-2'>
                                <div className='p-3 rounded-circle d-flex justify-content-center align-items-center bg-white'>
                                    <MapFill className='main-blue' />
                                </div>
                                <div>
                                    <p className='m-0 text-white'>Adress</p>
                                    <p className='m-0 fw-bold text-white'>6787 Rocky something something PA</p>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-start align-items-center gap-2'>
                                <div className='p-3 rounded-circle d-flex justify-content-center align-items-center bg-white'>
                                    <EnvelopeAtFill className='main-blue' />
                                </div>
                                <div>
                                    <p className='m-0 text-white'>Send Email</p>
                                    <p className='m-0 fw-bold text-white'>info@exampl.com</p>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-start align-items-center gap-2'>
                                <div className='p-3 rounded-circle d-flex justify-content-center align-items-center bg-white'>
                                    <PhoneFill className='main-blue' />
                                </div>
                                <div>
                                    <p className='m-0 text-white'>Call Emergency</p>
                                    <p className='m-0 fw-bold text-white'>+963957889064</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='col-12 col-lg-9 rounded-bottom' src="src/assets/imgs/video.webp" alt="" />
            </div>
            <div className='col-12 col-lg-6 d-flex justify-content-between align-items-center flex-column'>
                <div>
                    <h5 className='fw-bold'>Ready to get started</h5>
                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A explicabo odit corrupti odio, commodi doloremque ad? Sit quas maxime animi.</p>
                </div>
                <div className='col-12 d-flex gap-2 flex-wrap'>
                    <div className='d-flex flex-column col-12 col-lg-5 gap-2'>
                        <label className='fw-bold' htmlFor="name">Your Name*</label>
                        <input className='borderr rounded p-2' type="text" id='name'/>
                    </div>
                    
                    <div className='d-flex flex-column col-12 col-lg-5 gap-2'>
                        <label className='fw-bold' htmlFor="email">Your email*</label>
                        <input className='borderr rounded p-2' type="email" id='email'/>
                    </div>
                    <div className='d-flex flex-column col-12 col-lg-10 gap-2 '>
                        <label className='fw-bold' htmlFor="message">Your message*</label>
                        <input className='borderr rounded message border-end-primary p-2' type='text' id='message'/>
                    </div>
                </div>
                <Button className=' align-self-start mt-3 rounded-pill bg-main-blue'>Send Message <ArrowRight/></Button>
            </div>
        </section>
    )
}

export default GetStarted