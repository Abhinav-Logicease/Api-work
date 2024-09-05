import React from 'react'
import './header.css'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = ({backarrow}) => {
  return (
    <div className='header'>
      <div className='navbar'>
      

     {
      backarrow ?(
        <Link to={'/home'} className='navlink'> <IoMdArrowBack/> Back </Link>
      ):(
        <>
      <div className='navitem'>
        <Link to={'/about'} className='navlink'> About Page </Link>
        <Link to={'/flex'} className='navlink'> Flex Container </Link>
        <Link to={'/order'} className='navlink'> Order </Link>
      </div>
       
      <div className='logo-container'>
        <img className='logo' src='https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png'/>
      </div>
      </>  
      )
     }
      </div>
    </div>
  )
}

export default Header