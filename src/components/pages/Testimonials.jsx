import React from "react";
import "../styles/testimonials.scss";
import kfckos from "../assets/kfc-kos.svg";
import duatwo from "../assets/dua-two.svg";
import kris from "../assets/kris.svg";
import fourstars from "../assets/fourstars.svg";
import fivestars from "../assets/fivestars.svg";

const Testimonials = () => {
  return (
    <div
      className="testimonials-container
  "
    >
      <h1>Testimonials</h1>
      <p>Satisfied, Rave Reviews, Trustworthy, Impressive, Reliability.</p>
      <div className="testimonials-wrapper">
        <div className="border-one">
          <p>
            “We are incredibly pleased with the outstanding services provided by
            AD Vinci. Their expertise in social media advertising has been
            instrumental in elevating our brand, KFC, to new heights of
            success.”
          </p>
          <div className="img-wrapper">
            <img className="stars" src={fivestars} alt="" />
            <img src={kfckos} alt="" />
          </div>
        </div>
        <div className="border-two">
          <p>
            “After our audit & strategy, there was a 100% increase in leads,
            resulting in a larger number of conversions for the company.
            Growzillas are extremely meticulous in their planning and
            implementation, and that reflects in their results.”
          </p>
          <div className="img-wrapper">
            <img className="stars" src={fivestars} alt="" />
            <img src={kris} alt="" />
          </div>
        </div>
        <div className="border-three">
          <p>
            “We are thrilled with the exceptional service and results delivered
            by AD Vinci. Their team's expertise in social media advertising has
            taken our brand, Dua.com, to new heights.
          </p>
          <div className="img-wrapper">
            <img className="stars-three" src={fivestars} alt="" />
            <img src={duatwo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
