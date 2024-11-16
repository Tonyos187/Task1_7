import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hero2.css"
function Hero2(props) {
    return (
        <section className='hero2 d-flex justify-content-center align-items-center m-auto position-relative'>
            <div className='hero-col position-absolute '></div>
            <div className='w-100 d-flex justify-content-center align-items-center flex-column z-2'>
                <h2 className='text-white fw-bold fs-1'>{props.title}</h2>
                <p className='text-white fw-bold'>{props.path}</p>
            </div>
            <img className='position-absolute start-0 remove' src="src/assets/imgs/element.webp" alt="" />
        </section>
    )
}
export default Hero2