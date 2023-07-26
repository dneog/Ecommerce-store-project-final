import React, { useEffect, useState } from 'react'
import styles from './ProductSearch.module.scss';
import { BiSearch } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { SEARCH_PRODUCTS } from '../../redux/slice/FilterProductSlice';
const ProductSearch = ({products}) => {
  const dispatch= useDispatch()
  const [searchText, setSearchText]= useState('')

  useEffect(()=> {
    dispatch(SEARCH_PRODUCTS({
      searchText,
      products
    }))
  })

  return (
    <div className={styles.search}>
    <p>15 Total Products</p>
    <div className={styles.searchBar}>
      <BiSearch size={24}/>
      <input  type="text" placeholder='Search Products' value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
    </div>
    </div>
  )
}

export default ProductSearch