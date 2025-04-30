import React from 'react'
import Navbar from '../components/Navbar'

import Hero from '../components/Hero'
import InfiniteSlider from '../components/InfiniteSlider'
import MostLoved from '../components/MostLoved'
import ShopRange from '../components/ShopRange'
import ProductsShowcase from '../components/ProductShowcase'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <InfiniteSlider/>
    <MostLoved/>
    <ShopRange/>
    <ProductsShowcase/>
    <Footer/>
    </>
  )
}

export default Home