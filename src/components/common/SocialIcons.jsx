import React, { useState } from "react";
import { socialIcons } from "../data/Data";
import { Link } from "react-router-dom";
import {Popup} from "../home/Carousel";
import '../../css/style.css';
export default function SocialIcons() {
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(0);

  const openPopup = (index) => {
    if(socialIcons[index].name=="instagram"){
      window.location.href = "https://www.instagram.com/ohana_homestay_dehradun?igsh=MnNmcTIxN3o0NzJl";
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
      <div className="col-lg-3 px-5">
        <div className="d-inline-flex align-items-center py-2">
          {socialIcons.map((val, index) => (
            <div key={index}>
              <a href="#"   onClick={val.onclick ? () => openPopup(index) : undefined} 
 className="me-3" >
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
