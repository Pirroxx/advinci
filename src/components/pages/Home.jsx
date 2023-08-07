import React, { useState, useEffect } from "react";
import "../styles/home.scss";
import main from "../assets/main.svg";
import first from "../assets/first.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";

const images = [main, first, second];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-section">
        <img src={images[currentImageIndex]} alt="" />
        <div className="text-overlay">
          <h1>Creativity Unleashed Your Ultimate Ad Agency</h1>
        </div>
        <div className="second-text">
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <div className="btn-container">
          <button className="btn-demo-book">Get a demo</button>
        </div>
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
