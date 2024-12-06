import React from 'react'
import './Booktable.scss'

function Booktable() {
  return (
    <div className='Contact'>

      <div className="Contact-content">
        <h1>Book A Table</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum ex architecto expedita <br /> accusantium facere odit aspernatur accusamus in dolorem?</p>

        <div className="Form-content">

          <form>


            <div className='Form-name'>

              <div className='Name'>
                <label htmlFor="">Date</label>
                <br />
                <input type="date" />
              </div>

              <div className='Email'>
                <label htmlFor="">Time</label>
                <br />
                <input type="time" placeholder='Enter your Email...' />
              </div>
            </div>

            <div className='Subject'>
              <label htmlFor="">Name</label>
              <br />
              <input type="text" placeholder='Enter your Name...' />
            </div>

            <div className='Message'>
              <label htmlFor="">Total Members</label>
              <br />
              <input type="number" placeholder='Enter Total members Count..' />
            </div>


            <button>Book a Table  </button>
          </form>

        </div>
      </div >

    </div >
  )
}

export default Booktable