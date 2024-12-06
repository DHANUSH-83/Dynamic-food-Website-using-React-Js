import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contactmain from './Components/Contact/COntactmain'
import Menus from './Components/Menus/Menus'
import Pages from './Components/Blog/Pages'
import Booktablemain from './Components/BookTable/Booktablemain'


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route  path='Contact' element={<Contactmain/>}/>
          <Route path='/Menus' element={<Menus />} />
          <Route path='/Pages' element={<Pages />} />
          <Route path='/Booktable' element={<Booktablemain />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App