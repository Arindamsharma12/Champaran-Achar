import React from 'react'
import ProductPage from '../components/ProductPage'
import InfiniteSlider from '../components/InfiniteSlider'
import YouShouldTry from '../components/YouShouldTry'
import AcharSection from '../components/AcharSection'
import LearnMore from '../components/LearnMore'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'


const Product = () => {
  return (
   <div className='font-montserrat'>
   <ProductPage />
   <InfiniteSlider />
   <YouShouldTry />
   <AcharSection/>
   <LearnMore/>
   <SocialMedia/>
   <Footer />
   </div>    
)
}

export default Product