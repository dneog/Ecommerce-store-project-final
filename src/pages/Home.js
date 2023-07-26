import React from 'react';
import Trust from '../components/homePage/Trust'
import Hero from '../components/homePage/Hero'

import FeaturedProduct from '../components/homePage/FeaturedProducts/FeaturedProduct';
import {ProductData} from '../ProductData/ProductData';
import { Subscribe } from '../components/subscribe/Subscribe';

const Home = () => {
  const newData= ProductData.slice(0,4)
  return (
    <>
   <div className='container'>
    <Hero />
      <Trust />

      <div className='flexData'>
      {newData.map((product)=>{

return (
  <div key={product.id}>
    <FeaturedProduct {...product} product={product} />
  </div>
)

})}
</div>
<Subscribe />
     
     
    </div>
    </>
   
  )
}

export default Home