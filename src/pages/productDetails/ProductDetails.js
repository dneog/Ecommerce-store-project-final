import React, { useEffect, useState } from 'react';
import styles from './ProductDetails.module.scss';
import { useParams, useSearchParams } from 'react-router-dom';
import { ProductData } from '../../ProductData/ProductData';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import {useDispatch} from 'react-redux';
import { ADD_TO_CART } from '../../redux/slice/ProductCartSlice';
import ReactImageMagnify from 'react-image-magnify';
const ProductDetails = () => {
    const [isLoading, setIsLoading]= useState(true)
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

   const handleLoad=()=> {
    setIsLoading(false)
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
          <ReactImageMagnify   {...{
    smallImage: {
      
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
       
        src: selectedProduct.image[imageIndex]
    },
    largeImage: {
        src: selectedProduct.image[imageIndex],
        
        width: 1400,
        height: 1800
    }
}} />

{isLoading && <Skeleton variant="rectangular" width={260} height={180} animation="wave" />}
    {selectedProduct.image.map((img, index)=> (
     
        <img className={styles.subImg} src={img} alt="" onClick={()=> handleClick(index)} onLoad={handleLoad} /> 
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