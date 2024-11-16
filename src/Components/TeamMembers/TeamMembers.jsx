import React from 'react'
import { Button } from 'react-bootstrap'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import TMCard from '../TMCard/TMCard'

function TeamMembers() {
    const img1 = "src/assets/imgs/04.webp"
    const img2 = "src/assets/imgs/05.webp"
    const img3 = "src/assets/imgs/06.webp"
    const img4 = "src/assets/imgs/07.webp"
    return (
        <section className='w-100 d-flex justify-content-center align-items-center mt-4'>
            <div className='w-75 main-div-width'>
                <div className='d-block d-lg-flex justify-content-between'>
                    <div className='col-12 col-lg-4 mb-2'>
                        <p className='main-blue'><ArrowLeft /> Team Members <ArrowRight /></p>
                        <h3>Our Dedicated Team Members</h3>
                    </div>
                    <div className='d-flex align-self-center gap-1'>
                        <Button className='bg-main-blue text-white rounded-pill'>All Members <ArrowRight /></Button>
                    </div>
                </div>
                <div className='w-100 mt-3 row mx-0 mb-3 justify-content-center align-items-center mt-4'>
                    <TMCard img={img1} name="Masirul Islam" job="Web Designer" />
                    <TMCard img={img2} name="Masirul Islam" job="Web Designer" />
                    <TMCard img={img3} name="Masirul Islam" job="Web Designer" />
                    <TMCard img={img4} name="Masirul Islam" job="Web Designer" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='mx-auto fw-bold'>1K + Brands Trust Us</p>
                </div>
                <div className='w-100 d-flex justify-content-center align-items-center'>
                    <div className='row justify-content-center align-items-center gap-3'>
                        <p className='fs-2 fst-italic col-12 col-lg-2 text-center'>envato</p>
                        <p className='fs-2 fst-italic col-12 col-lg-2 text-center'>envato</p>
                        <p className='fs-2 fst-italic col-12 col-lg-2 text-center'>envato</p>
                        <p className='fs-2 fst-italic col-12 col-lg-2 text-center'>envato</p>
                        <p className='fs-2 fst-italic col-12 col-lg-2 text-center'>envato</p> 
                    </div>

                </div>

            </div>
        </section>
    )
}

export default TeamMembers