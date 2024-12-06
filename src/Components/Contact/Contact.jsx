import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div className='Contact'>

      <div className="Contact-content">
        <h1>Contact Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum ex architecto expedita <br /> accusantium facere odit aspernatur accusamus in dolorem?</p>

        <div className="Form-content">

          <form>


            <div className='Form-name'>

              <div className='Name'>
                <label htmlFor="">Name</label>
                <br />
                <input type="text" placeholder='Enter your Name...' />
              </div>

              <div className='Email'>
                <label htmlFor="">Email</label>
                <br />
                <input type="Email" placeholder='Enter your Email...' />
              </div>
            </div>

            <div className='Subject'>
              <label htmlFor="">Subject</label>
              <br />
              <input type="text" placeholder='Write a subject...' />
            </div>

            <div className='Message'>
              <label htmlFor="">Message</label>
              <br />
              <input type="text" placeholder='Enter your Name...' />
            </div>


            <button>Submit</button>
          </form>

        </div>
      </div >
    </div >
  )
}

export default Contact