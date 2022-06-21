import React from 'react'
import Hero from '../Hero'
import Navbar from '../Navbar/Navbar'
import Pricing from '../Pricing'
import Testimonials from '../Testimonials/index'
import Faq from '../Faq'
import Contact from '../Contact'
import Footer from '../Footer/index'

const Home = () => {
  return (
      <div>
      <Navbar />
      <Hero/>
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home