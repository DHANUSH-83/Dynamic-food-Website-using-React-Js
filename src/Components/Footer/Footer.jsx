import React from 'react'
import './Footer.scss'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../../asserts/logo1.jpg'
import { Data2 } from '../Home/Data'


function Footer() {
  return (
    <div className='Footer'>

      <div className='condent1'>
        <div>
          <img src={logo} alt="" />
        </div>
        <h1>Cooking</h1>
        <p>"Discover the magic of flavors with every bite. Our dishes are crafted with love, blending fresh ingredients and culinary expertise. From savory meals to indulgent desserts, we offer a dining experience that satisfies your cravings and warms your soul. Let our food bring joy to your table and memories to cherish."</p>

        <div className="social-media">
          <a className='link' href="https://chatgpt.com/c/6736548d-1160-8000-a95c-3c3d32031186"><FaInstagram  color="#E1306C" /> </a>
          <a className='link' href=""> <FaFacebook  color="#3b5998" />   </a>
          <a className='link' href="">  <FaTwitter  color="#1DA1F2" /> </a>
          <a className='link' href=""><FaLinkedin  color="#0A66C2" />  </a>

        </div>
      </div>
      <div className="condent2">
      <h3>Follow us on instagram</h3>

        {
          Data2.map((item) => {
            return (
              <div>
                <img src={item.image} alt="" />
              </div>
            )
          })
        }
       

        
      </div>

     

      
    </div>
  )
}

export default Footer