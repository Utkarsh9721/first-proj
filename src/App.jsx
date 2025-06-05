import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Program from './components/programs/program';
import Title from './components/title/title'
import About from './components/about/about'
import Campus from './components/campus/campus';
import Testimonial from './components/testimonials/testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Video from './components/video/video';
export const App = () => {

  const [playState,setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title ='What We Offer'/>
     <Program/>
     <About setPlayState ={setPlayState}/>
     <Title subTitle='Gallery' title='Campus Photos'/>
     <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </div>
      <Video playState ={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
 