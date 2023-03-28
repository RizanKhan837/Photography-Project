import React from "react";
import "../../src/App.css";

function Contact(){
    return (
        <div classname="contactform">
          <div classname="heading">
            <h3>Contact Form</h3>
          </div>
          <div classname="form">
            <div classname="about">
              <label htmlfor="Name">Name</label> <br />
              <input type="text" name="Name" classname="About" placeholder=" ..." /><br />
              <label htmlfor="email">Email</label> <br />
              <input type="email" name="email" classname="About" placeholder=" ...@example.com" /> <br />
              <label htmlfor="Subject">Subject</label> <br />
              <input type="text" name="Subject" classname="About" placeholder=" ..." /> <br />
              <div classname="btn3">
                <a href="#">
                  Send
                </a>
                <a href="#">
                  Save draft
                </a>
              </div>
            </div>
            <div classname="message">
              <label htmlfor="Message">Message</label> <br />
              <textarea name="message" classname="form-control" id="message" cols={30} rows={4} placeholder="Your Message..." defaultValue={"            </div>\n          </div>\n        </div>\n"} /></div></div></div>
      );
}

export default Contact;