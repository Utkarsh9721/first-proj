import React from 'react'
import './program.css'
import program_1 from '../../assets/program1.jpg'
import program_2 from '../../assets/program2.jpg'
import program_3 from '../../assets/program3.jpg'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const program = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={icon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
         <div className="caption">
          <img src={icon2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
         <div className="caption">
          <img src={icon3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}
export default program;