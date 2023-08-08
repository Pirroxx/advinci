import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/emailForm.scss";
import phone from "../assets/phone.svg";
import adress from "../assets/location.svg";
import email from "../assets/email.svg";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_geotyzp",
        "template_mpkqsgm",
        form.current,
        "QNzrcAs0Ziv6R6Afj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="email-container">
      <h1 className="title">Get in touch</h1>
      <div className="seperated">
        <div className="logo-wrapper">
          <div className="about-us-logos">
            <img src={phone} alt="" />
            <div class="vl"></div>
            <div className="p-wrapp">
              <p className="role">PHONE::</p>
              <p className="desc">+2348141898014</p>
            </div>
          </div>
          <div className="about-us-logos">
            <img src={adress} alt="" />
            <div class="vl"></div>
            <div className="p-wrapp">
              <p className="role">ADDRESS:</p>
              <p className="desc">Challenge, Ibadan, Nigeria</p>
            </div>
          </div>
          <div className="about-us-logos">
            <img src={email} alt="" />
            <div class="vl"></div>
            <div className="p-wrapp">
              <p className="role">EMAIL:</p>
              <p className="desc">iremiodeneye126@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <form ref={form} onSubmit={sendEmail}>
            <div className="fis-container">
              <input placeholder="Name" type="text" name="user_name" />

              <input placeholder="email" type="email" name="user_email" />
            </div>
            <div className="second-container">
              <input className="subject" placeholder="subject" name="message" />
              <input className="message" placeholder="message" name="message" />
              <input className="input-button" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EmailForm;
