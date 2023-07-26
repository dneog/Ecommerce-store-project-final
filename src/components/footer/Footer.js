import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import home from '../../assets/footer/home.png';
import mail from '../../assets/footer/mail.png';
import call from '../../assets/footer/call.png';

const Footer = () => {
  const date= new Date();
  const year= date.getFullYear()
  return (
    <>
    <div className={styles.footer}>

        <div className={styles.banners}>
        <h3 className={styles.techs}>TECH STORE</h3>
        <h4>TECH STORE is a demo ecommerce Website.</h4>
        <h4>Here you can find  high end tech products.</h4>
        <h4>All our products are genuin and manually checked.</h4>
        <h4>So that you can buy your desired product risk free.</h4>

        </div>

        <div className={styles.cu}>

        <h3>About</h3>
        <Link to={'/contact'}>
        <p>Contact Us</p>
        </Link>
        <Link>
        <p>Blog</p>
        </Link>
       <Link>
       <p>Terms & Conditions</p>
       </Link>
       
        
        
        </div>

        <div>
         <h3>Address</h3>
         <div className={styles.as}>
         <img className={styles.homes} src={home} alt="" />
         <p> Lakhimpur, Assam, India</p> 
         </div>
         <div className={styles.as}>
         <img className={styles.homess} src={mail} alt="" />
         <p> test@gmail.com</p> 
         </div>
         <div className={styles.as}>
         <img className={styles.homess} src={call} alt="" />
         <p> +91 123456789</p> 
         </div>
        
        
        

        </div>

        <div className={styles.credtss}>
        <h3>Credits</h3>
        <p>
        <a href="">Icons by Lordicon.com</a>
        </p>
       <p>
       <a href=""> iconscout.com</a>
       </p>
      <p>
      <a href="">Images by Freepik</a>
      </p>
        
       
       
        </div>

    </div>
  <div className={styles.copy}>
      <p> &copy; {year} All Rights Reserverd</p>
    </div>
    </>
    
  )
}

export default Footer