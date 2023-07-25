import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Import the hamburger menu and close icons from React Icons
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="header__left">
        <h1>
          <span><Link to="/">Develop<span>er</span></Link></span>
        </h1>
      </div>
      <div className={`header__right ${showMenu ? "show-menu" : ""}`}>
        <Link to="about" smooth={true} duration={500}>
          <h4>About</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="exp" smooth={true} duration={500}>
          <h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
        <h4 className="header__rightbutton">Join with Me!</h4>
      </div>
      {/* Hamburger Menu Icon */}
      <span className="hamburger-menu" onClick={toggleMenu}>
        {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
      </span>
    </div>
  );
};

export default Header;
