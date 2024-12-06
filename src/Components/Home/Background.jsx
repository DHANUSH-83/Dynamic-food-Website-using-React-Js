import React from 'react'
import './Home.scss'
import img from '../../asserts/bg.jpg'


function Background() {
    return (
        <div className='Background'>
            <div className='Backgroung-img'>
                <img src={img} alt="" />
            </div>
            <div className='Background-content'>
                <h1>Best food for your taste</h1>
                <p>Discover delectable cuisine and unforgettable moments in <br /> our Welcoming,Culinary haven.</p>
                <button className='button1'>Book A Table</button>
                <button className='button2'>Explore Menu</button>
            </div>
        
        </div>
    )
}

export default Background