import React, { useState } from "react";
import { socialIcons } from "../data/Data";
import { Link } from "react-router-dom";
import {Popup} from "../home/Carousel";
import '../../css/style.css';
export default function SocialIcons() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="col-lg-3 px-5">
        <div className="d-inline-flex align-items-center py-2">
          {socialIcons.map((val, index) => (
            <div key={index}>
              <a href="#" onClick={val.onclick ?  openPopup : undefined} className="me-3" >
                {val.icon}
              </a>
              {showPopup && <Popup onClose={closePopup} />}

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
