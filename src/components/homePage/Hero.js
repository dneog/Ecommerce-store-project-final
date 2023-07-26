import React from 'react'
import './Hero.scss';
import { Link } from 'react-router-dom';
import phone from '../../assets/main/phone.jpg';
const Hero = () => {
  return (
    <div className='containers'>
        <div className='gridx'>
            <div className='hero'>
                <p>Welcome To</p>
                <p id='tech'>Tech Store</p>
                <p className='para'>Explore Our Latest Tech Products. Get 50% off and Free Delivery on Your first order. Earn Cashbacks and many more rewards on each purchase !! </p>
                <Link to={'/product'}>
                    <button className='techbutton'>Explore</button>
                </Link>
            </div>
            <div className='imgs'>
                <img className='img' src={phone} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero