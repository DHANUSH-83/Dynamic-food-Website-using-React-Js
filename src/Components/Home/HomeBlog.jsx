import React from 'react'
import './Home.scss'
import { Data4 } from './Data'
import { Data5 } from './Data'
import { Data6 } from './Data'

function HomeBlog() {

// Date
function Displaydate(){
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday:"short"
  }); 

  return today
}

  return (
    <div className='HomeBlog'>
      <div className='Title-button'>
        <h1>Our Blog & Article</h1>
        <button>Read all Articles</button>
      </div>
      <div className='HomeBlog-content'>
        <div className='Homeblog-content1'>
          {
            Data4.map((item) => {
              return (
                <>
                  <center> <img src={item.image} alt="" /></center>
                  <p>{Displaydate()}</p>
                  <h2>{item.title}</h2>
                  <p>{item.Description}</p>
                </>
              )
            })
          }
        </div>
        <div className='Homeblog-content2'>
          {
            Data5.map((item) => {
              return (
                <div>
                  <center>  <img src={item.image} alt="" /> </center>
                  <p>{Displaydate()}</p>
                  <h3>{item.Description}</h3>
                </div>
              )
            })
          }
        </div>
        <div className='Homeblog-content3'>
          {
            Data6.map((item) => {
              return (
                <div>
                 <center>  <img src={item.image} alt="" /> </center>
                 <p>{Displaydate()}</p>
                  <h3>{item.Description}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HomeBlog