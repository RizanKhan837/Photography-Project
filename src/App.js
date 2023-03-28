import './App.css'
import React, { useEffect } from 'react';
import './script.js'
import { NavLink } from "react-router-dom";
/* import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer'; */


function App() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
        <link rel="stylesheet" href="style.css" />
        <title>Saas Website</title>
        <div className="container">
          <div className="box1">
            <h3>Logo</h3>
            <h4>My name is Abdul</h4>
            <p>And I'm taking awesome photos</p>
            <div className="btn">
              <NavLink to="/details">Portfolio</NavLink>
              <a href="#">
                Contact me
              </a>
            </div>
          </div>
          <div className="box2">
            <img src="/photography.jpg" alt="" />
          </div>
        </div>
        <div className="photos">
          <h3> <i>Portfolio</i> </h3>
          <section className="wrapper">
            <i className="fa-solid fa-arrow-left button" id="prev" />
            <div className="image-container">
              <div className="carousel">
                <a href="/photography1.jpg"><img src="/photography1.jpg" alt="" /></a>
                <a href="/photography2.jpg"><img src="/photography2.jpg" alt="" /></a>
                <a href="/photography3.jpg"><img src="/photography3.jpg" alt="" /></a>
                <a href="/photography.jpg"><img src="/photography.jpg" alt="" /></a>
              </div>
              <i className="fa-solid fa-arrow-right button" id="next" />
              <i className="fa-solid fa-arrow-left button" id="prev" />
            </div>
          </section>
        </div>
        <div className="contactform">
          <div className="heading">
            <h3>Contact Form</h3>
          </div>
          <div className="form">
            <div className="about">
              <label htmlFor="Name">Name</label> <br />
              <input type="text" name="Name" className="About" placeholder=" ..." /><br />
              <label htmlFor="email">Email</label> <br />
              <input type="email" name="email" className="About" placeholder=" ...@example.com" /> <br />
              <label htmlFor="Subject">Subject</label> <br />
              <input type="text" name="Subject" className="About" placeholder=" ..." /> <br />
              <div className="btn3">
                <a href="#">
                  Send
                </a>
                <a href="#">
                  Save draft
                </a>
              </div>
            </div>
            <div className="message">
              <label htmlFor="Message">Message</label> <br />
              <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Your Message..." />
            </div>
          </div>
        </div>
        <div className="footer">
          <h2>Let's Work Together</h2>
          <a href="#">
            Download Resume
          </a>
        </div>
        <div className="icons">
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-unsplash" />
        </div>
      </div>
  );
}

export default App;
