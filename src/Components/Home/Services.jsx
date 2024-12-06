import React from 'react'
import './Home.scss'
import { Data2 } from './Data'

function Services() {
  return (
    <div className='Services'>
      <div className='title'>
        <h1>We also offer unique Services for your events</h1>
        <div className='Servives-data'>
          {
            Data2.map((items, index) => {
              return (
                <div className='Services-Datas' key={index}>
                  <img src={items.image} alt="" />
                  <h1>{items.Name}</h1>
                  <p>{items.Description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services