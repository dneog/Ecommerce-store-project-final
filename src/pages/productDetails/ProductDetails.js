import React, { useEffect, useState } from 'react';
import styles from './ProductDetails.module.scss';
import { useParams, useSearchParams } from 'react-router-dom';
import { ProductData } from '../../ProductData/ProductData';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import {useDispatch} from 'react-redux';
import { ADD_TO_CART } from '../../redux/slice/ProductCartSlice';

const ProductDetails = () => {
   
   const {id}= useParams();
   const selectedProduct= ProductData.find((item)=> item.id == id)
   const dispatch= useDispatch()
   const addToCart=(selectedProduct)=> {
    dispatch(ADD_TO_CART(selectedProduct))
   }

   const [imageIndex, setImageIndex]= useState(0)
   const handleClick=(index)=> {
    setImageIndex(index)
   }

  

  return (
    <div className={styles.product}>
        <h3>Product Details</h3>
    <div>
      <Link to='/product'>
    <p className={styles.btp}> ← Back to Products</p>   
      </Link>
    </div>
    <div className={styles.details}>
          <div className={styles.img}>
          <img src={selectedProduct.image[imageIndex]} alt="" />
          


    {selectedProduct.image.map((img, index)=> (
     
        <img className={styles.subImg} src={img} alt="" onClick={()=> handleClick(index)} /> 
      ))}
          </div>
          <div className={styles.content}>
            <h3>{selectedProduct.name}</h3>
            <p className={styles.price}>{selectedProduct.price}&#8377;</p>
            <p>{selectedProduct.description}</p>
            <p> <b>ID : </b>{selectedProduct.id}</p>
            <p><b>Brand </b>{selectedProduct.brand}</p>

            <div className={styles.count}>
           
            </div>
            <button className={styles.add} onClick={()=> addToCart(selectedProduct)}>Add to Cart</button>
          </div>
          
        </div>
    </div>
  )
}

export default ProductDetails