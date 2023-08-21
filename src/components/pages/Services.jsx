import React from "react";
import first from "../assets/first.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";
import fourth from "../assets/fourth.svg";
import "../styles/services.scss";
const Services = () => {
  return (
    <section id="service">
      <div className="services-container">
        <div className="our-services">
          <h1 className="service-header">Our Services</h1>
          <p className="clients-desc-main">
            Creative, Targeted, Data-Driven, Results-Oriented, Comprehensive.
          </p>
        </div>

        <div className="services-section">
          <img src={first} alt="" />
          <div className="texting">
            <h1>
              Online Growth <br /> Strategy & Ad Creation
            </h1>
            <p className="service-one">
              Online Growth Strategy & Ad Creation is a comprehensive service
              offered to businesses and individuals aiming to accelerate their
              online presence and achieve significant growth. This service
              involves the development and implementation of a tailored growth
              strategy to expand an organization's reach, attract a wider
              audience, and boost overall engagement across various digital
              platforms.
            </p>
            <button className="btn-demo-one">Book a Demo</button>
          </div>
        </div>
        <div className="services-section-two">
          <img className="nono-one" src={second} alt="" />
          <div className="texting-two">
            <h1 className="heading-conatiner">
              Online Growth <br /> Strategy & Ad Creation
            </h1>
            <p className="service-two">
              Online Growth Strategy & Ad Creation is a comprehensive service
              offered to businesses and individuals aiming to accelerate their
              online presence and achieve significant growth. This service
              involves the development and implementation of a tailored growth
              strategy to expand an organization's reach, attract a wider
              audience, and boost overall engagement across various digital
              platforms.
            </p>{" "}
            <button className="btn-demo-two">Book a Demo</button>
          </div>
          <img className="nono-uno" src={second} alt="" />
        </div>
        <div className="services-section">
          <img src={third} alt="" />
          <div className="texting">
            <h1>
              Online Growth <br /> Strategy & Ad Creation
            </h1>
            <p className="service-one">
              Online Growth Strategy & Ad Creation is a comprehensive service
              offered to businesses and individuals aiming to accelerate their
              online presence and achieve significant growth. This service
              involves the development and implementation of a tailored growth
              strategy to expand an organization's reach, attract a wider
              audience, and boost overall engagement across various digital
              platforms.
            </p>
            <button className="btn-demo-one">Book a Demo</button>
          </div>
        </div>
        <div className="services-section-two">
          <img className="nono-one" src={fourth} alt="" />

          <div className="texting-two">
            <h1 className="heading-conatiner">
              Online Growth <br /> Strategy & Ad Creation
            </h1>
            <p className="service-two">
              Online Growth Strategy & Ad Creation is a comprehensive service
              offered to businesses and individuals aiming to accelerate their
              online presence and achieve significant growth. This service
              involves the development and implementation of a tailored growth
              strategy to expand an organization's reach, attract a wider
              audience, and boost overall engagement across various digital
              platforms.
            </p>
            <button className="btn-demo-two">Book a Demo</button>
          </div>
          <img className="nono-uno" src={fourth} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Services;
