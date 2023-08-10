import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/emailForm.scss";
import phone from "../assets/phone.svg";
import adress from "../assets/location.svg";
import email from "../assets/email.svg";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.querySelector('input[name="user_email"]');
    const emailValue = emailInput.value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailValue)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        html: '<span style="color: #717171; font-family: Arial, sans-serif">Please enter a valid email address.</span>',
        customClass: {
          popup: "custom-popup-class",
          title: "custom-title-class",
          text: "custom-text-class",
          content: "custom-content-class",
          confirmButton: "custom-confirm-button-class",
        },
      });
      return;
    }

    emailjs
      .sendForm(
        "service_geotyzp",
        "template_mpkqsgm",
        form.current,
        "QNzrcAs0Ziv6R6Afj"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            html: '<span style="color: #717171; font-family: Arial, sans-serif">Email sent successfully!</span>',
            customClass: {
              popup: "custom-popup-class",
              title: "custom-title-class",
              text: "custom-text-class",
              content: "custom-content-class",
              confirmButton: "custom-confirm-button-class",
            },
          });
          console.log(result.text);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            html: '<span style="color: #717171; font-family: Arial, sans-serif">Failed to send email. Please try again later!</span>',
            customClass: {
              popup: "custom-popup-class",
              title: "custom-title-class",
              text: "custom-text-class",
              content: "custom-content-class",
              confirmButton: "custom-confirm-button-class",
            },
          });
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
            <div className="vl"></div>
            <div className="p-wrapp">
              <p className="role">PHONE:</p>
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
              <input required placeholder="Name" type="text" name="user_name" />

              <input
                required
                placeholder="email"
                type="email"
                name="user_email"
              />
            </div>
            <div className="second-container">
              <input
                required
                className="subject"
                placeholder="subject"
                name="message"
              />
              <input
                required
                className="message"
                placeholder="message"
                name="message"
              />
              <input className="input-button" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EmailForm;
