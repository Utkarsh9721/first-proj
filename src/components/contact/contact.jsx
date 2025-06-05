import React from 'react'
import './contact.css'
import message from '../../assets/message.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import arrow from '../../assets/white.png'

const contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "016f2272-dec0-45b5-aec0-0e473c3f3898");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact-container'>
      <div className="contact-header">
        <h3>CONTACT US</h3>
        <h1>Get in Touch</h1>
      </div>
      
      <div className="contact-content">
        <div className="contact-col">
          <h3>Send us a message <img src={message} alt="" /></h3>
          <p>Feel free to reach out through contact from or find our contact
              information below. Your feedback. questions, and suggestions are
              important to us as we strive to provide exception service to our
              university community.
          </p>
          <ul>
              <li><img src={mail} alt="" />Contact@EduWithRai@gmail.com</li>
              <li><img src={phone} alt="" />+91 123-456-7890</li>
              <li><img src={location} alt="" />noida sector 6,India</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type="text" name='name' placeholder='Enter your full name' required/>
              <label>Phone Number</label>
              <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
              <label>Write your message here</label>
              <textarea name="message" row="6" placeholder='Enter your message' required></textarea>
              <button type="submit" className='btn dark-btn'>Submit now <img src={arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default contact;