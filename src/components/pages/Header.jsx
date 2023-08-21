import { useState } from "react";
import "../styles/header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="header-container">
        <div className="this-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <MenuIcon style={{ color: "black" }} />
          </div>
        </div>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
          </ul>
        </div>
        <button className="btn-demo">Get a demo</button>
      </div>
    </nav>
  );
};

export default Header;
