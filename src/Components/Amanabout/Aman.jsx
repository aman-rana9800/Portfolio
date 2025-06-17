import React from 'react'
import './Aman.css'
import aman_img from '../../assets/aman_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Aman = () => {
  return (
    <div id='home' className='amandata'>
<img src={aman_img} className='aman_img' />      
<h1>Hii i am Aman Rana, this is a portfollio this is making by the react js</h1>
<div className='aman_button'>
<div className='aman_contact'><AnchorLink className='aman_contact_anchor' offset={50} href='#contact'>Contact</AnchorLink></div>
<div className='aman_resume'>Resume</div>
</div>
    </div>
  )
}

export default Aman
