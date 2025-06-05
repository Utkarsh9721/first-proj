import React from 'react'
import './campus.css'
import gallery_1 from '../../assets/campus1.jpg'
import gallery_2 from '../../assets/campus2.jpg'
import gallery_3 from '../../assets/campus3.jpg'
import gallery_4 from '../../assets/campus4.jpg'
import white_arrow from '../../assets/white.png'

const campus = () => {
  return (
   <div className="campus">
    <div className="gallery">
        <img src={gallery_1} alt="" />
         <img src={gallery_2} alt="" />
          <img src={gallery_3} alt="" />
           <img src={gallery_4} alt="" />
    </div>
    <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" />
    </button>
   </div>
  )
}
export default campus;