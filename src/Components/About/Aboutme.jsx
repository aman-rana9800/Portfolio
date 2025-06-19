import React from 'react'
import './Aboutme.css'
import aman_img from '../../assets/aman_img.jpeg'
const Aboutme = () => {
  return (
    <div  id='about' className='about_me'>
      <div className='about_title'>
        <h1>About me</h1>
        </div>
        <div className='about_section'>
          <div className="img_background">
        <div className='about_left'>
          <img src={aman_img} />
      </div></div>
      <div className='about_right'>
        <div className='about_write'>
          <p>Developed and maintaned user-facing websites using HTMl ,CSS,javascript and reactJS.</p>
          <p>Collaborated colsely with the back-end developers to integratet a API calls into the front-end codebase.</p>
        </div>
        <div className='about_skills'>
          <div className='about_skill'><p>Html & Css</p><hr style={{width:'50%'}}/></div>
          <div className='about_skill'><p>Java Script</p><hr style={{width:'80%'}}/></div>
          <div className='about_skill'><p>jquery</p><hr style={{width:'60%'}}/></div>
          <div className='about_skill'><p>React Js</p><hr style={{width:'80%'}}/></div>
        </div>
      </div>
      </div>
      <div className='about_achievements'>
        <div className='about_achievement'>
          <h1>02+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr/>
         <div className='about_achievement'>
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className='about_achievement'>
          <h1>03+</h1>
          <p>PROJECTS PANDING</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
