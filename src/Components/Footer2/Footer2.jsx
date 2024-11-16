import React from 'react'
import "./Footer2.css"
import FooterDiv from '../FooterDiv/FooterDiv'
import { EnvelopeAtFill, Map, MapFill, PhoneFill } from 'react-bootstrap-icons'
function Footer2() {
    return (
        <footer className='bg-second-purple w-100 d-flex justify-content-center align-items-center mt-5 pt-5 flex-column'>
            <div className='p-2 p-lg-5 w-100 d-flex justify-content-center align-items-center'>
                <div className='bg-main-blue main-div-width2 p-4 rounded-4 '>
                    <div className='row flex-column flex-lg-row gy-5 '>
                        <div className='col-12 col-lg-4 d-flex justify-content-start align-items-center gap-2  no-border px-3'>
                            <div className='p-3 rounded-circle d-flex justify-content-center align-items-center bg-white'>
                                <MapFill className='main-blue' />
                            </div>
                            <div>
                                <p className='m-0 text-white'>Adress</p>
                                <p className='m-0 fw-bold text-white'>6787 Rocky something something PA</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 d-flex justify-content-start align-items-center gap-2  no-border px-3'>
                            <div className='p-3 rounded-circle d-flex justify-content-center align-items-center bg-white'>
                                <EnvelopeAtFill className='main-blue' />
                            </div>
                            <div>
                                <p className='m-0 text-white'>Send Email</p>
                                <p className='m-0 fw-bold text-white'>info@exampl.com</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 d-flex justify-content-start align-items-center gap-2 px-3'>
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
            <FooterDiv />
        </footer>
    )
}

export default Footer2