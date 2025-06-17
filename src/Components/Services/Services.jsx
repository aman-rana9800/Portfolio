import React from 'react'
import './Services.css'
import data from '../../assets/services_data.json'
const Services = () => {
  return (
    <div id='service' className='services_main'>
      <div className="service_title">
        <h1>Services</h1>
        </div>
      <div className="service_section">
        {data.map((item, index) => 
        <div className='service_data' key={index}>
          <h2>{item.s_no}</h2>
          <h3>{item.s_name}</h3>
          <p>{item.s_desc}</p>
          <div className='servise_readmore'>
            <p>Read More</p>
            <p className="arrow_img">&#x2192;</p>
          </div>
          </div>)}
    </div>
    </div>
  )
}

export default Services
