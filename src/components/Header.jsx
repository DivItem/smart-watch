import React, { useEffect, useState } from "react";
import Logo from '../assets/img/logo.png'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header"
      className={`menu-area ${
        isSticky ? "bg-sticky sticky-top" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">Home </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">Unique Feature</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#review">Review</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">Faq</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}