import React from 'react'
import { useState } from 'react';
// import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './nav.css';
import Logo from '../../assets/logo.png';

const Nav = () => {
  const[toggleMenu,setToggleMenu]=useState(false)
  // const verticalnav=()=>{
  //   for(let i=0;i>=0;i++){
  //     if(2%i===0){
  //       // document.getElementsByClassName("nav__container-verticalnav").style.display='none';
  //       console.log(i);
  //     }
  //   }
  // }
  return (
    <div>
      <div className='nav__container'>
        <div className='nav__container-logo' >
            <img src={Logo} alt="" />
            <h1><a href='#'>Tremolo</a></h1>
        </div>
      <div className='nav__container-links'>
        <p><a href='#'>Home</a></p>
        <p><a href='#products'>Products</a></p>
        {/* <p><a>FAQs</a></p> */}
        <p><a href='#about'>About</a></p>
        <p><a href='#contact'>Contact Us</a></p>
      </div>
    
      {/* <div className="nav__container-hamburgermenu" onClick={()=> setToggleMenu(false)}>
        <div className="nav__container-hamburgermenu1"></div>
        <div className="nav__container-hamburgermenu2"></div>
        <div className="nav__container-hamburgermenu3"></div>
      </div> */}

    {toggleMenu
        ? <div className="nav__container-hamburgermenu" onClick={()=> setToggleMenu(false)}>
        <div className="nav__container-hamburgermenu1"></div>
        <div className="nav__container-hamburgermenu2"></div>
        <div className="nav__container-hamburgermenu3"></div>
      </div>
        : <div className="nav__container-hamburgermenu" onClick={()=> setToggleMenu(true)}>
        <div className="nav__container-hamburgermenu1"></div>
        <div className="nav__container-hamburgermenu2"></div>
        <div className="nav__container-hamburgermenu3"></div>
      </div>}
      </div>
        {toggleMenu && (
          <div className='nav__container-verticalnav' >
            <p><a href='#' onClick={()=> setToggleMenu(false)}>Home</a></p>
            <p><a href='#products' onClick={()=> setToggleMenu(false)}>Products</a></p>
            {/* <p><a href='#about' onClick={()=> setToggleMenu(false)}>FAQs</a></p> */}
            <p><a href='#about' onClick={()=> setToggleMenu(false)}>About</a></p>
            <p><a href='#contact' onClick={()=> setToggleMenu(false)}>Contact Us</a></p>
          </div>
        )
        }
    
    </div>
  )
}

export default Nav