import React from 'react'
import Background from './Background'
import Information from './Information'
import Banner from './Banner'
import Services from './Services'
import Delivery from './Delivery'
import Testimonial from './Testimonial'
import HomeBlog from './HomeBlog'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Background />
      <Information />
      <Banner />
      <Services />
      <Delivery />
      <Testimonial/>
      <HomeBlog/>
      <Footer/>
    </div>
  )
}

export default Home