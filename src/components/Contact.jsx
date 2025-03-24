// components/Contact.js
import React from "react";
import { Helmet } from "react-helmet-async";
import { useState } from 'react'; 
import emailjs from "@emailjs/browser";
import SuccessNotification from './SuccessNotification'; // Import the component

const Contact = () => {
  // Add state to control notification visibility
  const [showNotification, setShowNotification] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_0uogdi9',
      'template_uw5o9qy', 
      e.target, 
      'SVZleaTKKN6bNiH2B'
    ).then(
      () => {
        // Show notification when email is sent successfully
        setShowNotification(true);
        // Reset form fields
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        // Optionally handle error case
      }
    );
  }
  
  return (
    <>
      {/* <Helmet>
        <title>Prabesh | Contact</title>
      </Helmet> */}
      <a name="contact" id="contact"></a>
      <h3 style={{ textAlign: "center" }}>GET IN TOUCH</h3>
      
      <form
        id="contact-form"
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input className="input-field" type="text" name="name" />
        
        <label>Email</label>
        <input className="input-field" type="text" name="email" />
        
        <label>Message</label>
        <textarea className="input-field" name="message"></textarea>
        
        <input id="submit-btn" type="submit" value="Send" />
      </form>
      
      <SuccessNotification 
        show={showNotification}
        onClose={() => setShowNotification(false)}
        duration={5000}
      />
      
      <div className="social-links">
        <h4>
          OR, <br />
          FIND ME AT FACEBOOK & LINKEDIN :{" "}
        </h4>
        <ul id="social-links">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100055741815637">
              Facebook: प्रवेश भण्डारी
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.linkedin.com/in/prabesh-bhandari-4357b02b9">
              Linkedin: Prabesh Bhandari
            </a>
          </li>
          <br />
          <br />
        </ul>
      </div>
    </>
  );
};

export default Contact;