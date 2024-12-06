import React from 'react'
import './About.scss'
import img from '../../asserts/Abbg.jpg'

function AboutBg() {
    return (
        <div className='AboutBg'>
            <div className='AboutBg-Content'>
                <div className="AboutBg-Image">
                    <img src={img} alt="" />
                </div>
                <div className="AboutBg-description">
                    <h1>We Provide healthy food for your family.</h1>
                    <p>"Explore a world of irresistible flavors and culinary creativity. From mouthwatering recipes to inspiring dishes, we bring fresh ingredients and expert techniques to your table. Whether you’re craving comfort, health, or indulgence, discover food that delights every taste and creates unforgettable moments. Your next delicious experience starts here!"</p>
                    <p>"Delight in a culinary journey filled with flavorful recipes and fresh ingredients. From comforting classics to innovative dishes, discover food that satisfies every craving and inspires your love for cooking."</p>
                </div>
            </div>
        </div>
    )
}

export default AboutBg