import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navList, logoPath, Gallery_and_Guests } from "../data/Data";
import SocialIcons from "./SocialIcons";
import '../../css/style.css';

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="container-fluid px-0 bgColor">
        <div className="row gx-0">
          <div className="col-lg-3 d-none d-lg-block">
            <Link
              to="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <img src={logoPath} alt="Ohana Logo" className="img-fluidd" style={{ maxHeight: '50px' }} />
              <span className="logoText1 text-uppercase text-white logo-text" style={{ fontSize: '14px' }}>OHANA HOMESTAY, DEHRADUN</span>
              <span className="logoText2 text-uppercase text-white logo-text" style={{ fontSize: '14px' }}>UTTARAKHAND</span>

            </Link>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-dark p-3 p-lg-0">
              <button
                type="button"
                className="navbar-toggler"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-around navbarCollapse"
                    : "collapse navbar-collapse justify-content-around"
                }
              >
                <div className="navbar-nav mr-auto py-0">
                  {navList.map((item, index) => (
                    <div key={index}>
                      {item.subItems ? (
                        <div
                          className="nav-item dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className="nav-link dropdown-toggle">
                            {item.text}
                          </Link>
                          <div
                            className={`dropdown-menu rounded-0 m-0 ${
                              activeDropdown === item.id ? "show" : ""
                            }`}
                          >
                            {item.subItems.map((sub) => (
                              <Link to={sub.path} className="dropdown-item">
                                {sub.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link to={item.path} className="nav-item nav-link">
                          {item.text}
                        </Link>
                      )}
                    </div>
                  ))}
                  {/* Add buttons after the "Contact" nav item */}
                  {Gallery_and_Guests.map((item, key) => (
                    <div key={key}>
                      <a
                        className="nav-item nav-link"
                        href={key === 2 ? "/contact" : `/guestGallery?roomId=${key}`}
                      >
                        {item.icon}
                      </a>
                    </div>
                  ))}
                </div>
                <SocialIcons />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
