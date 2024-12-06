import React from 'react'
import './Home.scss'
import { Data3 } from './Data'

function Testimonial() {
    return (
        <div className='Testimonial'>
            <div className='Testimonial-content'>
                <h1>What Our Customers Says</h1>
                <div className='Testimonial-data'>
                    {
                        Data3.map((item) => {
                            return (
                                <div className='Testimonial-Datas'>
                                    <h1>{item.Intro}</h1>
                                    <p>{item.Description}</p>
                                    <hr />
                                    <div className='Testimonial-image'>
                                        <img src={item.image} alt="" />
                                        <h2>{item.Name}</h2>
                                       
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonial