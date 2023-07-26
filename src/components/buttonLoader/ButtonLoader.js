import React from 'react';
import './Loader.scss';

import loader from '../../assets/pics/loader.gif'
const Loader = () => {
  return(
   
    <div className='loader2'>
        <img className='gif2' src={loader} alt="loader" />
    </div>
    
  )
}

export default Loader