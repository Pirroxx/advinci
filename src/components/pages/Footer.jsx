import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/footer.scss";
import social from "../assets/social-two.svg";
import ig from "../assets/ig.svg";
import twitter from "../assets/twitter.svg";
import yt from "../assets/yt.svg";
import send from "../assets/send.svg";

const Footer = () => {
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
    <div className="footer-container">
      <div className="wrapper-one">
        <p>
          Copyright © 2020 AD Vinci <br /> All rights reserved
        </p>
        <div className="social-logos">
          <img src={ig} alt="" />
          <img src={social} alt="" />
          <img src={twitter} alt="" />
          <img src={yt} alt="" />
        </div>
      </div>
      <div className="wrapper-two">
        <h1 className="company">Company</h1>
        <a href="">About Us</a>
        <a href="">Testimonial</a>
        <a href="">Contact Us</a>
        <a href="">Clients Journey</a>
      </div>
      <div className="wrapper-three">
        <h1 className="company">Support</h1>
        <a href="">About Us</a>
        <a href="">Testimonial</a>
        <a href="">Contact Us</a>
        <a href="">Clients Journey</a>
      </div>
      <div className="hidd-div">
        <div className="input-container-hidd">
          <input placeholder="Your email address" type="text" />
          {/* <button type="submit" value="Send"> */}
          <img src={send} alt="" />
          {/* </button> */}
        </div>
        <div className="social-logos-hidd">
          <img src={ig} alt="" />
          <img src={social} alt="" />
          <img src={twitter} alt="" />
          <img src={yt} alt="" />
        </div>
        <p className="comp-hidd">
          Copyright © 2020 AD Vinci <br /> All rights reserved
        </p>
      </div>
      <div className="wrapper-four">
        <h1 className="comp">Stay up to date</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div class="input-container">
            <input placeholder="Your email address" type="text" />
            {/* <button type="submit" value="Send"> */}
            <img src={send} alt="" />
            {/* </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
