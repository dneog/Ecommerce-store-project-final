import React from 'react'
import {TbTruckDelivery} from "react-icons/tb";
import {RiSecurePaymentLine} from "react-icons/ri";
import {MdDeliveryDining} from "react-icons/md";
import {TbReplaceFilled} from "react-icons/tb";
import './Trust.scss';
import { Link } from 'react-router-dom';
const Trust = () => {
  return (
    <>
    <div className='wrappers'>

    <div className='bgs'>
    <p>Enjoy Super Fast Delivery</p>
   <TbTruckDelivery className='trs' />
    </div>
    {/* <div className='bg'>
    <p>Delivery Within 7 days</p>
   <MdDeliveryDining className='trs' />
    </div> */}
    <div className='bgs'>
    <p>Safe and Secure Payments</p>
   <RiSecurePaymentLine className='trs' />
    </div>
    <div className='bgs'>
    <p>7 Days replacement Policy</p>
   <TbReplaceFilled className='trs' />
    </div>
       
    </div>
    <div className='seperate'>
    <p className='explore'>Featured Products</p>
    <Link to={'/product'}>
    <p>View All</p>
    </Link>
    
    </div>
    
</>
  )
}

export default Trust