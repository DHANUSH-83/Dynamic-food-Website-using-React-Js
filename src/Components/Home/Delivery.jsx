import React from 'react'
import './Home.scss'
import cheff from '../../asserts/cheff.jpg'
import food1 from '../../asserts/food1.jpg'
import food2 from '../../asserts/food2.jpg'
import { FaClock, FaDollarSign, FaShoppingCart } from 'react-icons/fa';

function Delivery() {
    return (
        <div className='Delivery'>
            <div className='Cheff-image'>
                <img src={cheff} alt="" />
            </div>
            <div className='Food-image'>
                <img src={food1} alt="" />
                <br />
                <img src={food2} alt="" />
            </div>
            <div className='Delivery-content'>
                <h1>Fastest Food Delivery in City</h1>
                <p>Our visual disigner let you quickly and of drag a down you way to custom apps for both keep desktop.</p>

                <div className='Delivery-icons'>
                    <h1> <FaClock className='icon' />    Delivery within 30 mins</h1>
                    <h1><FaDollarSign className='icon' />   Best Price & Offers</h1>
                    <h1><FaShoppingCart className='icon' />   Online Services Available</h1>
                </div>
            </div>
        </div>
    )
}

export default Delivery