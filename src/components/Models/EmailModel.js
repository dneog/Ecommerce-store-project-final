import React from 'react'
import  ReactDOM  from 'react-dom';
import done from '../../assets/model/done.png';
import './UserModel.scss';

const EmailModel = ({dataMessage}) => {
    const handleClick=()=> {
        dataMessage(false)
    }
  return ReactDOM.createPortal(
    <div className="background">
        <div className='userModel'>
          <img src={done} alt="" />
          <p>Email Sent Successfully</p>
          <p>Thank you for joining our Community</p>
          
          <button onClick={handleClick}>close</button>
    </div>
    </div>,
    document.getElementById('load')
    
  )
}

export default EmailModel