import React from "react";
import misson1 from "../assets/misson.svg";
import misson2 from "../assets/misson2.svg";
import "../styles/aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-services">
        <h1 className="services-header">Our Services</h1>
        <p className="description">
          At AD Vinci, we are passionate about empowering businesses to reach
          their full potential through the power of digital marketing. Our team
          of innovative and skilled experts is dedicated to crafting compelling
          campaigns and creating meaningful connections between brands and their
          audiences.
        </p>
      </div>
      <div className="services-section">
        <img className="show-img" src={misson1} alt="" />
        <div className="texting">
          <h1 className="misson">Our Mission</h1>
          <p>
            Our mission is to be the driving force behind our clients' success
            in the digital landscape. We strive to deliver exceptional results
            by combining creativity, data-driven strategies, and cutting-edge
            technology.
          </p>
          <img className="hidd-img" src={misson1} alt="" />
        </div>
      </div>
      <div className="services-section-two">
        {" "}
        <div className="texting-two">
          <h1 className="heading-conatiner">What sets us apart</h1>
          <p>
            At AD Vinci, we believe that every brand has a unique story to tell.
            Our approach to digital marketing revolves around understanding our
            clients' brand identity, objectives, and target audience. This deep
            understanding allows us to tailor our solutions to meet the specific
            needs and aspirations of each client.
          </p>{" "}
        </div>
        <img src={misson2} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
