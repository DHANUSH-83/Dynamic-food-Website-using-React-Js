import React from 'react'
import Banner from '../../asserts/Banner.jpg'

function AboutBanner() {
  return (
    <div className='AboutBanner'>
      
        <div className="contents">
            <div className="content">
                <h1>A little Information for Valuable guest.</h1>
                <p>"Delight in a culinary journey filled with flavorful recipes and fresh ingredients. From comforting classics to innovative dishes, discover food that satisfies every craving and inspires your love for cooking."</p>
                
                <center>
                <button>Explore Now</button>
                </center>
            </div>
            <div className="content-image">
              <img src={Banner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutBanner