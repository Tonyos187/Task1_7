import React from 'react'
import { Button } from 'react-bootstrap'
import { ArrowRight, Check, Check2, CursorFill, Star, StarFill } from 'react-bootstrap-icons'
import "./Hero.css";




function Hero() {
    return (
        <section className='hero w-100 pt-4 px-0 p-lg-4'>
            <div className='background-hero rounded-start-5 rounded-top-5 position-relative row justify-content-center w-auto h-100 align-items-center flex-row-reverse'>
                <div className='hero-img-div round-top-right bg-main-blue right-hero-div-bg col-12 col-lg-6 d-flex justify-content-center'>
                    <img className='img-fluid h-100 z-2' src="src/assets/imgs/heroThumb1_1.webp" alt="" />
                </div>
                <div className='hero-text-div round-bot-left round-top-left bg-main-blue  left-hero-div-bg col-12 col-lg-6 d-flex flex-column gap-2 justify-content-center align-items-center '>
                    <div className='w-75 z-2'>
                        <p className='text-white text-capitalize border rounded-pill d-inline-block p-2 fw-bold w-max-content'>everything you need to create a website</p>
                        <h1 className='text-white mb-3'>Business Innovation With IT Services Expertise</h1>
                        <div className='text-white d-flex gap-2 w-max-content span-div'>
                            <div className='d-flex gap-2 flex-column'>
                                <span><Check2 /> Deployment and Support</span>
                                <span><Check2 /> Discovery and Analysis</span>
                            </div>
                            <div className='text-white d-flex gap-2 flex-column'>
                                <span><Check2 /> Flexibility and Adaptability</span>
                                <span><Check2 /> Competetive Advantage</span>
                            </div>
                        </div>
                        <Button className='text-white mt-3 orange-bg rounded-pill w-max-content mb-5'>Get Started <ArrowRight /></Button>
                        <div className=' p-2 position-absolute bottom-0 col-9 col-lg-4 d-flex rounded-top-4 bg-blue-light mt-3'>
                            <div className='col-6 py-3'>
                                <div className='d-flex justify-content-start align-items-center gap-1 mb-2'>
                                    <StarFill color='green' />
                                    <h4 className='text-white fs-6 m-0'>Trustipilot</h4>
                                </div>
                                <div className='d-flex'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='img-fluid w-75' src="src/assets/imgs/profileShape1_1.webp" alt="" />
                                    </div>
                                    <div className='d-flex flex-column gap-1 text-white'>
                                        <div className='text-white d-flex fs-t-sm'>
                                            <StarFill color='orange' /><StarFill color='orange' /><StarFill color='orange' />                                        </div>
                                        <span className='text-white fs-t-sm'>450+ reviews</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 border-start border-body-teritiary ps-2 py-3'>
                                <div className='d-flex justify-content-start align-items-center gap-1 mb-2'>
                                    <h4 className='text-white fs-6 m-0'>Google</h4>
                                </div>
                                <div className='d-flex'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='img-fluid w-75' src="src/assets/imgs/profileShape1_1.webp" alt="" />
                                    </div>
                                    <div className='d-flex flex-column gap-1 text-white'>
                                        <div className='d-flex fs-t-sm'>
                                            <StarFill color='orange' /><StarFill color='orange' /><StarFill color='orange' />
                                        </div>
                                        <span className='text-white fs-t-sm'>450+ reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-white position-absolute p-2 w-auto bottom-0 start-50 translate-md-neg rounded-thingy'>
                    <img className='img-fluid circle-thingy' src="src/assets/imgs/heroShape1_3.webp" alt="" />
                </div>
                <div className='bg-main-blue position-absolute w-25 h-25 bottom-thingy start-50 translate-md-neg'></div>
            </div>
            <div className='position-absolute first-hero-object d-none d-lg-flex'>
                    <img className='' src="src/assets/imgs/heroShape1_1.webp" alt="" />
                </div>
                <div className='position-absolute second-hero-object d-none d-lg-flex'>
                    <img className='' src="src/assets/imgs/heroShape1_2.webp" alt="" />
                </div>
                <div className='first-cursor-pos position-absolute d-none d-lg-inline'>
                    <CursorFill className='first-cursor' />
                    <p className='p-2 rounded-pill text-white bg-purple position-relative end-100 fs-t-sm'>Solution</p>
                </div>
                <div className='second-cursor-pos position-absolute d-none d-lg-inline'>
                    <CursorFill className='second-cursor rotate-cursor' />
                    <p className='p-2 rounded-pill text-white bg-blue position-relative start-50 fs-t-sm'>Technology</p>
                </div>
        </section>
    )
}

export default Hero