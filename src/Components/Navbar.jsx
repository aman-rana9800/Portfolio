import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import aman from '../assets/aman_logo.svg'
import menu_bar from'../assets/menu_bar.svg'
import close_menu from'../assets/close_menu.svg'
const Navbar = () => {
  const[menu,setMenu]=useState("home");
  const menuRef=useRef();
 const openMenu=()=>{
  menuRef.current.style.right="0"
 }
 const closeMenu=()=>{
  menuRef.current.style.right="-350px"
 }
  return (
    <div className='navbar'>
       <img src={aman} alt='log' className='amanlogo'/>
      <img src={menu_bar} onClick={openMenu} alt='log' className='menu_icon_logo'/>
       <ul ref={menuRef} className='nav-menu'>
        <img src={close_menu} onClick={closeMenu} alt='log' className='close_menu_logo'/>
        <li><AnchorLink className='anchorlink' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr style={{border:"2px solid #d32323" }}/>:<></>}</li>
        <li><AnchorLink className='anchorlink'offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<hr style={{border:"2px solid #d32323" }}/>:<></>}</li>
        <li><AnchorLink className='anchorlink' offset={50} href='#service'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<hr style={{border:"2px solid #d32323" }}/>:<></>}</li>
        <li><AnchorLink className='anchorlink'offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<hr style={{border:"2px solid #d32323" }}/>:<></>}</li>
        <li><AnchorLink className='anchorlink' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr style={{border:"2px solid #d32323" }}/>:<></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchorlink' offset={50} href='#contact'>connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
