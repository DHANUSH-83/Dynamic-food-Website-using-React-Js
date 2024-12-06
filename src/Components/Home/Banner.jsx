import React from 'react'
import './Home.scss'
import Bannerimg from '../../asserts/banner1.jpg'

function Banner() {
  return (
    <div className='Banner'>
      <div className='Banner-Content'>
        <div className='Banner-image'>
          <img src={Bannerimg} alt="" />
        </div>
        <div className="Banner-Details">
          <h1> We Provide healthy food for your family.</h1>
          <p className='p1'>Our Story began with a vesion to create a unique dining experience that merges fine dining,exceptional service,and a vibrant ambience. Rooted in city's rich culinary culture,We aim honor our local roots while infusing a global palate. </p>
          <p>"Our restaurant offers healthy, flavorful meals made from fresh ingredients. We prioritize your family’s well-being, serving dishes that blend taste and nutrition for a satisfying and wholesome dining experience."</p>
          <button>More About Us</button>
        </div>
      </div>
    </div>
  )
}

export default Banner