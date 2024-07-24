import React, { useState } from "react";
import { socialIcons } from "../data/Data";
import { Popup } from "../home/Carousel";
import '../../css/style.css';

export default function SocialIcons() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (index, event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const socialIcon = socialIcons[index];

    if (socialIcon.name === "instagram") {
      window.location.href = "https://www.instagram.com/ohana_homestay_dehradun?igsh=MnNmcTIxN3o0NzJl";
    } else if (socialIcon.name === "facebook") {
      window.location.href = "https://www.facebook.com/people/Ohana-Homestay-Dehradun/61563504231490/?mibextid=qi2Omg&rdid=Kn6HXpXxVUzEK7vX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FMa8YWaMo7QjXkExc%2F%3Fmibextid%3Dqi2Omg"; // Replace with your Facebook URL
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="col-lg-3 px-5">
      <div className="d-inline-flex align-items-center py-2">
        {socialIcons.map((val, index) => (
          <div key={index}>
            <a 
              href="#" 
              onClick={(event) => openPopup(index, event)} 
              className="me-3"
            >
              {val.icon}
            </a>
            {showPopup && <Popup onClose={closePopup} />}
          </div>
        ))}
      </div>
    </div>
  );
}
