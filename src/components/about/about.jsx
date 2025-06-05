import React from 'react';
import './about.css';
import about_img from '../../assets/about.jpg';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About College" className='about-img' />
        <img
          src={play_icon}
          alt="Play Video"
          className='play-icon'
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Welcome to KIT, a premier institution committed to academic excellence,
          holistic development, and innovation. Established in 1980, our college has
          been a beacon of learning, fostering intellectual curiosity, leadership,
          and social responsibility.
        </p>
        <p>
          At KIT, we offer a wide range of undergraduate and postgraduate programs
          across various disciplines including Science, Technology, Commerce, and
          Humanities. Our dynamic curriculum is designed to meet the evolving demands
          of industry and society, supported by experienced faculty, modern
          infrastructure, and cutting-edge laboratories.
        </p>
        <p>
          We believe in nurturing not just professionals, but well-rounded individuals.
          Our vibrant campus life includes student clubs, cultural fests, sports, and
          entrepreneurship initiatives, ensuring our students grow both inside and
          outside the classroom.
        </p>
        <p>
          Join us at KIT—where knowledge meets opportunity, and every student is
          empowered to shape their future.
        </p>
      </div>
    </div>
  );
};

export default About;
