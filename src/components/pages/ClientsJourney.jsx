import React from "react";
import "../styles/clientsJourney.scss";
import mew from "../assets/new.png";
import metdaan from "../assets/metdaan.svg";

const ClientsJourney = () => {
  return (
    <div className="clients-journey-conatiner">
      <div className="journey-section ">
        <div className="clients-text">
          <h1>Our Clients Journey</h1>
          <p>
            Creative, Targeted, Data-Driven, Results-Oriented, Comprehensive.
          </p>
        </div>
        <div className="img-container">
          <img className="img-one" src={mew} alt="" />
          <img className="img-two" src={metdaan} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientsJourney;
