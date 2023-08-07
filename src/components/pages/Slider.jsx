import React, { useEffect, useRef } from "react";
import "../styles/clients.scss";
// import kfc from "../assets/kfc.svg";
import kfc from "../assets/kfc.svg";
import usaid from "../assets/usaid.svg";
import dua from "../assets/dua.svg";
import wurth from "../assets/wurth.png";
import kia from "../assets/kia.svg";
import kfor from "../assets/kfor.svg";
import cineplex from "../assets/cinepleks.svg";
import sixt from "../assets/sixt.svg";

const Clients = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const parentElement = logosRef.current.parentElement;
    const copy = logosRef.current.cloneNode(true);
    parentElement.appendChild(copy);
    parentElement.appendChild(logosRef.current);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide" ref={logosRef}>
        <img src={kfc} alt="kfc" />
        <img src={usaid} alt="usaid" />
        <img src={dua} alt="dua" />
        <img src={wurth} alt="wurth" />
        <img src={kia} alt="kia" />
        <img src={kfor} alt="kfor" />
        <img src={cineplex} alt="cineplex" />
        <img src={sixt} alt="sixt" />
      </div>
    </div>
  );
};

export default Clients;
