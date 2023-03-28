import React from "react";
import "../../src/App.css";


function Hero(){
    return (

        <div classname="container">
          <div classname="box1">
            <h3>Logo</h3>
            <h4>My name is Abdul</h4>
            <p>And I'm taking awesome photos</p>
            <div classname="btn">
              <navlink to="/details">Portfolio</navlink>
              <a href="#">
                Contact me
              </a>
            </div>
          </div>
          <div classname="box2">
            <img src="/photography.jpg" alt="" />
          </div>
        </div>
      );
}

export default Hero;