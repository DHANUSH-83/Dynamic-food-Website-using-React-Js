import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../asserts/logo1.jpg'

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='Navbar'>
      <img src={logo} alt=""  />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='Menus'>Menus</Link>
        <Link to='Pages'>Blog</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
      <button onClick={()=>{navigate('/BookTable')}}>Book a Table</button>
    </div>
  )
}

export default Navbar