import React, { useState } from "react";
import { Link } from "react-router-dom";
import { footerContact, footerAddress, socialIcons, footerLogoPath } from "../data/Data";
import { Popup } from "../home/Carousel";
import '../../css/style.css';


export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSocialIconClick = (name, event) => {
    event.preventDefault(); // Prevent default anchor behavior

    if (name === "instagram") {
      window.location.href = "https://www.instagram.com/ohana_homestay_dehradun?igsh=MnNmcTIxN3o0NzJl";
    } else if (name === "facebook") {
      window.location.href = "https://www.facebook.com/people/Ohana-Homestay-Dehradun/61563504231490/?mibextid=qi2Omg&rdid=Kn6HXpXxVUzEK7vX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FMa8YWaMo7QjXkExc%2F%3Fmibextid%3Dqi2Omg"; // Replace with your Facebook URL
    }
    else{
      setShowPopup(true);
    }
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {/* <Newsletter /> */}
      <div
        className="container-fluid footerContainer text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="rounded p-4">
                <Link to="/">
                  <img src={footerLogoPath} alt="Ohana Logo" className="img-fluid mb-3" />
                </Link>
                <p className="text-white mb-0">
                  Experience a memorable stay at Ohana Homestay with modern amenities, nestled in the scenic foothills of the Himalayas.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footerContent">
              <h6 className="section-title text-start text-primary text-uppercase">
                ADDRESS
              </h6>
              {footerAddress.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.name}
                </p>
              ))}
            </div>
            <div className="col-md-6 col-lg-3 footerContent">
              <h6 className="section-title text-start text-primary text-uppercase">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    onClick={(event) => handleSocialIconClick(val.name, event)} 
                    className="btn btn-outline-light btn-social"
                  >
                    {val.icon}
                  </a>
                ))}
                {showPopup && <Popup onClose={closePopup} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
