import React from 'react'
import "./TMCard.css"

function TMCard(props) {
    return (
        <div className=' col-8 col-md-3 rounded-4  gy-4'>
            <div className='rounded-4 d-flex justify-content-center align-items-center flex-column'>
                <div className='w-100 d-flex justify-content-center align-items-center position-relative rounded-4'>
                    <img className='rounded-4 img-fluid w-100' src={props.img} alt="" />
                    <div className='bg-second-purple rounded-4 position-absolute TM-card-div w-100 h-40 d-flex justify-content-center align-items-center text-center flex-column py-4 m-0'>
                        <h4 className='m-0 fs-5 fw-bold text-white font-thing'>{props.name}</h4>
                        <p className='m-0 fs-6 text-white'>{props.job}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TMCard