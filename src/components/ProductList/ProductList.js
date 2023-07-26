import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import { useSelector } from 'react-redux'
import { selectFilteredProducts } from '../../redux/slice/FilterProductSlice'
import { Link } from 'react-router-dom'
import styles from './ProductList.module.scss';

import { BiSearch } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { SEARCH_PRODUCTS } from '../../redux/slice/FilterProductSlice';
import ProductCard from './ProductCard';

const ProductList = ({ProductData}) => {
  
  const filteredProducts= useSelector(selectFilteredProducts)
  console.log(filteredProducts)
  const dispatch= useDispatch()
  const [searchText, setSearchText]= useState('')
  
 

  useEffect(()=> {
    dispatch(SEARCH_PRODUCTS({
      searchText,
      ProductData
    }))
  },[dispatch, searchText, ProductData])

  
 
  return (
   <>
   <div className={styles.part}>

   
     <div className={styles.search}>
    <p className={styles.total}>{filteredProducts.length} Total Products</p>
    <div className={styles.searchBar}>
      <BiSearch size={24}/>
      <input  type="text" placeholder='Search Products' value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
    </div>
    </div>
    <div className={styles.cardFlex}>
    {ProductData.length===0 ? (<p>No Products Found</p>) :
    (
      <>
    {filteredProducts.map((product)=>{

      return (
        <div key={product.id} className='display'>
          <ProductCard {...product} product={product} />
        </div>
      )

    })}
    </>
    )}
    </div>
   
</div>

   </>
  )

    
  


    
  
  
}

export default ProductList