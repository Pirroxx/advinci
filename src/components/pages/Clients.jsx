import React, { useEffect, useRef } from "react";
import "../styles/clients.scss";
import Slider from "./Slider";

const Clients = () => {
  return (
    <section id="clients">
      <div className="clients-conatiner">
        <div className="clients-section">
          <div className="clients-text">
            <h1 className="clients-header">Our Clients</h1>
            <p className="clients-desc">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Clients;
