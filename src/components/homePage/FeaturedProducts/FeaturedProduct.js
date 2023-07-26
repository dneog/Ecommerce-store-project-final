import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from './FeaturedProduct.module.scss'
import { ADD_TO_CART } from '../../../redux/slice/ProductCartSlice';
import Skeleton from '@mui/material/Skeleton';
import {Link} from 'react-router-dom'

const FeaturedProduct = ({product}) => {
   
    const dispatch= useDispatch()
    const [loading, setLoading]= useState(true);

    const handleLoad=()=>{
        setLoading(false)
      }

    const addToCart=(product)=> {
      dispatch(ADD_TO_CART(product))
    }

      const {name, description, price, id, image, review}= product
  return (
   
    <div className={styles.cardst}>
    <Link to={`/product-details/${id}`} >
        <div className={styles.imgs}>
        {loading && <Skeleton variant="rectangular" width={260} height={180} animation="wave" />}

         <img src={image[0]} alt={name} onLoad={handleLoad} />  
      
         
        </div>
        </Link>
        <div className={styles.contents}>
          <div className={styles.detailss}>
            <p>{price}&#8377;</p>
            <p className={styles.n}>{name.substring(0,20).concat('...')}</p>
          </div>
           
          <button className={styles.btns} onClick={()=> addToCart(product)} >Add to Cart</button>
        </div>
    </div>
  )
}


export default FeaturedProduct