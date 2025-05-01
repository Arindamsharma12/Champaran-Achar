import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfiniteSlider from '../components/InfiniteSlider'
import ProductListing from '../components/ProductListing'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

const AllProducts = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <InfiniteSlider/>
    <ProductListing/>
    <SocialMedia/>
    <Footer/>
    </>
  )
}

export default AllProducts