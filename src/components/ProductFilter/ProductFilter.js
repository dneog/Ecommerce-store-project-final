import React, { useEffect, useState } from 'react';
import styles from './ProductFilter.module.scss';
import {useDispatch} from 'react-redux';
import { SORT_BY_BRAND, SORT_BY_CATEGORY, SORT_BY_LATEST } from '../../redux/slice/FilterProductSlice';

const ProductFilter = ({ProductData}) => {
  const dispatch= useDispatch()
  const [productSort, setProductSort]= useState('latest')
  const [category, setCategory]= useState('All')
  const [brand, setBrand]= useState('All')
  const productCategories= [
    'All',
    ...new Set(ProductData.map(product=> product.category))
  ]
  const allBrands= [
    "All",
    ...new Set(ProductData.map((product)=> product.brand))
  ]
  
  
    const clearFilter=()=> { 

      setCategory("All")
      setBrand("All")
      setProductSort("latest")
      
}
  



  const filterCategory=(c)=> {
    setCategory(c)  
  }

  const filterBrand=(b)=> {
    setBrand(b)
  }

  useEffect(()=> {
    dispatch(SORT_BY_CATEGORY({
      category, ProductData
    }))
  },[dispatch, ProductData, category])

  useEffect(()=> {
    dispatch(SORT_BY_BRAND({
      brand, ProductData
    }))
  },[dispatch, ProductData, brand])


  
  


  useEffect(()=> {
    dispatch(SORT_BY_LATEST({
      productSort, ProductData
    }))
   
  },[dispatch, ProductData, productSort])

  
  return (
    <div className={styles.fil}>
    <p>Sort by</p>
    <select value={productSort} onChange={(e)=> setProductSort(e.target.value)}>
      <option value="latest">latest</option>
      <option value="low_to_high_price">low to high price</option>
      <option value="high_to_low_price">high to low price</option>
    </select>
    <p className={styles.para}>Category</p>
    <div className={styles.category}>
      {productCategories.map((c, index)=> {
        return(
          <button key={index} type='button' className={`${category}` === c ? `${styles.active}` : null} onClick={()=> filterCategory(c)}>{c}</button>
        )
      })}
    </div>
    <p className={styles.para}>Brand</p>
    <div className={styles.category}>
      {allBrands.map((b, index)=> {
        return(
          <button key={index} type='button' className={`${brand}` === b ? `${styles.active}` : null} onClick={()=> filterBrand(b)}>{b}</button>
        )
      })}
    </div>

    <button className={styles.clears} onClick={clearFilter}>Clear Filter</button>

   </div>
  )
}

export default ProductFilter