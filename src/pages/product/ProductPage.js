import React, { useEffect, useState } from 'react'
import './ProductPage.scss';
import ProductFilter from '../../components/ProductFilter/ProductFilter';
import ProductSearch from '../../components/ProductSearch/ProductSearch';
import ProductList from '../../components/ProductList/ProductList';
import {ProductData} from '../../ProductData/ProductData';
import {useDispatch, useSelector} from 'react-redux';
import { STORE_PRODUCTS, selectProducts } from '../../redux/slice/StoreProductSlice';
import PageLoader from '../../components/buttonLoader/PageLoader';

const ProductPage = () => {
  const [show, setShow] = useState(true)
 const handleClick=()=> {
  setShow(!show)
 }
  return (
    <div className='page productContainer'>
    <button className='showBtn' onClick={handleClick}>Filter</button>
    <div className={show ? 'fil hide' : 'fil'}>
        <ProductFilter ProductData={ProductData}/>
    </div>

    <div className='lis'>
   
   
      <ProductList ProductData={ProductData}/>      
     
    </div>
    </div>
  )
}

export default ProductPage