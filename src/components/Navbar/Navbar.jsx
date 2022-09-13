import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useRef } from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };
  useEffect(() => {
    hideNavbar();
  }, [location]);
  return (
    <header>
      <span className="app-logo">
        <Link className="app-logo-link" to="/">
          <LiveTvIcon fontSize="large" />
          <span>Movies App</span>
        </Link>
      </span>

      <nav ref={navRef}>
        <div className="navLink">
          <Link to="/">Home</Link>
          <Link to="/nominees">Nominees</Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
