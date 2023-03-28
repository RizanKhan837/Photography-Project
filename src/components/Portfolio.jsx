import React from "react";
import "../../src/App.css";


function Portfolio(){
    return (
        <div>
          <div classname="photos">
            <h3> <i>Portfolio</i> </h3>
            <section classname="wrapper">
              <i classname="fa-solid fa-arrow-left button" id="prev">
                <div classname="image-container">
                  <div classname="carousel">
                    <a href="/photography1.jpg"><img src="/photography1.jpg" alt="" /></a>
                    <a href="/photography2.jpg"><img src="/photography2.jpg" alt="" /></a>
                    <a href="/photography3.jpg"><img src="/photography3.jpg" alt="" /></a>
                    <a href="/photography.jpg"><img src="/photography.jpg" alt="" /></a>
                  </div>
                  <i classname="fa-solid fa-arrow-right button" id="next">
                    <i classname="fa-solid fa-arrow-left button" id="prev">
                    </i></i></div><i classname="fa-solid fa-arrow-right button" id="next"><i classname="fa-solid fa-arrow-left button" id="prev">
                  </i></i></i></section><i classname="fa-solid fa-arrow-left button" id="prev"><i classname="fa-solid fa-arrow-right button" id="next"><i classname="fa-solid fa-arrow-left button" id="prev">
                </i></i></i></div><i classname="fa-solid fa-arrow-left button" id="prev"><i classname="fa-solid fa-arrow-right button" id="next"><i classname="fa-solid fa-arrow-left button" id="prev">
              </i></i></i></div>
      );
}

export default Portfolio;