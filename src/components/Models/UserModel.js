import React from 'react'
import  ReactDOM  from 'react-dom';
import done from '../../assets/model/done.png';
import './UserModel.scss';

const UserModel = ({dataMessage}) => {
    const handleClick=()=> {
        dataMessage(false)
    }
  return ReactDOM.createPortal(
    <div className="background">
        <div className='userModel'>
          <img src={done} alt="" />
          <p>Message Sent Successfully</p>
          <p>We will reply you Within 2-3 business Days.</p>
          
          <button onClick={handleClick}>close</button>
    </div>
    </div>,
    document.getElementById('load')
    
  )
}

export default UserModel