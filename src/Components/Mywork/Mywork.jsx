import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork_title">
            <h1>Latest work</h1>
        </div>
      <div className="mywork_container">
        {
            mywork_data.map((work,index)=><img key={index} src={work.w_img}/>)
        }
      </div>
      <div className="mywork_showmore">
        <p>Show More</p>
        <p className="arrow_img">&#x2192;</p>
      </div>
    </div>
  )
}

export default Mywork
