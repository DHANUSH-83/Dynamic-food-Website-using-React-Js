import React from 'react'
import './Home.scss'
import { Data} from './Data'


function Information() {

  return (
    <div className='Information'>
      <h1 className='title'>Browse Our Meals</h1>
      <div className='Information-data'>
        {
          Data.map((items, index) => {
            return (
              <div className='Information-Datas' key={index}>

               
                <img src={items.img} alt="" />
                <h1>{items.Name}</h1>
                <p>{items.Description}</p>
                <button>Explore Now</button>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Information