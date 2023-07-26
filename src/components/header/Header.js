import React, { useEffect, useState } from 'react'
import './Header.scss';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import user from '../../assets/pics/user.png';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {signOut } from "firebase/auth";
import {auth} from '../../firebase/Config';
import { toast } from 'react-toastify';
import {  onAuthStateChanged } from "firebase/auth";
import {useDispatch, useSelector} from 'react-redux';
import { SET_ACTIVE_USER, selectIsLoggedIn } from '../../redux/slice/AuthSlice';
// import { Profile } from '../../pages';
import { REMOVE_ACTIVE_USER } from '../../redux/slice/AuthSlice';
import ShowOnLogin, { ShowOnLogOut } from '../CheckLogin';
import { selectCartItems } from '../../redux/slice/ProductCartSlice';
// import { CALCULATE_TOTAL_QUANTITY, selectCartTotalQuantity } from '../../redux/slice/CartSlice';


const Header = () => {

const navigate= useNavigate();
const dispatch= useDispatch();
const [isMobile, setMobile]= useState(false);
const [userName, setUserName]= useState('');
const [userMail, setUserMail]= useState('');
const [userPofilePic, setUserProfilePic]= useState('');
const [scrollPage, setScrollPage]= useState(false);
const isLoggedIn= useSelector(selectIsLoggedIn)
const cartItems= useSelector(selectCartItems)
// const cartTotalQuantity= useSelector(selectCartTotalQuantity)

useEffect(()=> {
  // dispatch(CALCULATE_TOTAL_QUANTITY())
}, [])



useEffect(()=> {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserName(user.displayName)
      setUserMail(user.email)
      setUserProfilePic(user.photoURL)

      dispatch(SET_ACTIVE_USER(
        {
          email: user.email,
          userName: user.displayName,
          userID: user.uid
        }
      ))
    } else {
      setUserName('')
      setUserMail('')
      dispatch(REMOVE_ACTIVE_USER())
    }
  });
},[dispatch, userMail])
const activeLink= ({isActive})=> (isActive ? 'active': '')

const logoutUser=()=> {
  
signOut(auth).then(() => {
 toast.success('LogOut Successful');
 navigate('/login')
}).catch((error) => {
  
  toast.error(error)
});

}


  return (
    <div>

    <header className='header'>
   
    
   
      <div className='logo'>
      <Link to={'/'}>
      <p className='techs'>TECH STORE</p>
      </Link>
       
      </div>

     
    <div className='second'>
      
        <ul className={isMobile ? 'mobile-links' : 'links'} onClick={()=> setMobile(false)}>
      
        
          <li>
          <NavLink to={'/'} className={activeLink}>Home</NavLink></li>

          <li> <NavLink to={'/product'} className={activeLink}>Products</NavLink></li> 
          <ShowOnLogOut>
          <li><NavLink to={'/login'} className={activeLink}>Login</NavLink></li>
          </ShowOnLogOut>
          <ShowOnLogin> 
          <li onClick={logoutUser} className='logout'>Logout</li></ShowOnLogin>
          <ShowOnLogin>
          <li><NavLink to={'/order-history'}  className={activeLink}>My Orders</NavLink></li></ShowOnLogin>
          <li><NavLink to={'/profile'} className='prof'>{userPofilePic !== null && userMail ? !isMobile ? <img className='profile' src={userPofilePic} alt="" /> : <p className='ile'>Profile</p> : <FaUserCircle className='cir'  /> }<span></span></NavLink></li>
          
        </ul>
        <NavLink to={'/cart'}>
        <div className='cart'>
      <HiOutlineShoppingCart className='icon' size={22} />
      <p>{cartItems.length}</p>
      </div>
      </NavLink>
      <button className='but' onClick={()=> setMobile(!isMobile)} >
      {!isMobile ? 
       <GiHamburgerMenu />
      :
      <AiOutlineClose />}
      </button>
      

     
    
     
    
    
     
      </div>
      
     
     
    </header>
    
</div>

  )
}

export default Header