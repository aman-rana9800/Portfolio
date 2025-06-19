import React from 'react'
import './Contact.css'
import phone from'../../assets/phone.svg'
import email from'../../assets/email.svg'
import location from'../../assets/Location.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "74b9f779-6cba-424e-8aea-aec791d1020f");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("show the result");
      alert(data.message)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact_title">
        <h1>Contact</h1>
      </div>
      <div className="contact_section">
        <div className="left_section">
          <h1>Let's talk</h1>
          <p>i am here you can send the text to me if you want to connect then send the mail and the massage to me.thank you</p>
          <div className="contact_details">
            <div className="contact_detail">
              <img src={email} alt='email'/>
              <p>ranaman2507@gmail.com</p>
            </div>
            <div className="contact_detail">
              <img src={phone} alt='phone'/>
              <p>+91 8708374331</p>
            </div>
            <div className="contact_detail">
              <img src={location} alt='location'/>
              <p>Sector 34 A Sub-City Center, Chandigarh,</p>              
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="right_section">
          <label htmlFor="">Your Name</label>
          <input type="text"placeholder='enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='enter your email' name='email' />
          <label htmlFor="">Write your Massage here</label>
          <textarea name="massage"  rows='8' placeholder='Enter your massage'/>
          <button type='submit' className='contact_submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
