import React from 'react'
import'./Footer.css'
import email from'../../assets/email.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_top">
        <div className="footer_top_left">
        <h1>Aman Rana</h1>  
          <p>I am frontend developer from, Chandigarh with 2 years of experience in company like Ficode Software Solutions Private Limited and The Brihaspati Infotech Pvt. Ltd.</p>
        </div>
        <div className="footer_top_right">
          <div className="footer_email">
          <img src={email} alt=''/>
          <input type="text" placeholder='enter the comment'/>
          </div>
        </div>
        <button className='footer_button'>Submit</button>
      </div>
      <hr/>
      <div className="footer_bottom">
      <p className="footer_bottom_left">© 2024 Aman Rana. All right reserved.</p>
      <div className="footer_bottom_right">
        <p>Term of services</p>
        <p>Privacy policy</p>
        <p>Connect with me</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
