import React, { useState } from 'react';
import './testimonial.css';
import test1 from '../../assets/testi1.png';
import test2 from '../../assets/testi2.jpg';
import test3 from '../../assets/testi3.png';
import test4 from '../../assets/testi4.jpg';
import back from '../../assets/back.png';
import next from '../../assets/next.png';

const testimonials = [
  { id: 1, image: test1 },
  { id: 2, image: test2 },
  { id: 3, image: test3 },
  { id: 4, image: test4 }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='testimonials-container'>
      <button className='nav-btn back-btn' onClick={handleBack}>
        <img src={back} alt="Previous" />
      </button>
      <div className="line">
        <ul>
        <li><p>"The faculty at React College are supportive, and the learning environment is top-notch for tech enthusiasts."</p></li>
         <li> <p> "Thanks to React College, I built real-world applications and gained confidence in web development."
      </p></li>
     <li> <p>"The campus culture encourages innovation, and I loved collaborating on React projects with my peers."
</p></li>
<p>"Joining React College was the best decision! The placement support and coding labs are excellent."</p>
   </ul>   </div>
    
      <div className="testimonial-slider">
        <div 
          className="slider-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="slide">
              <div className="user-info">
                <img 
                  src={testimonial.image} 
                  alt={`Testimonial ${testimonial.id}`} 
                  className="testimonial-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className='nav-btn next-btn' onClick={handleNext}>
        <img src={next} alt="Next" />
      </button>
    </div>
  );
};

export default Testimonial;