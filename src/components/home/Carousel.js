import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";
import '../../css/style.css'; // Ensure you import the CSS file

const Popup = ({ onClose }) => {
  const [fade, setFade] = useState(false);

  const handleClose = () => {
    setFade(true);
    setTimeout(onClose, 300); // Match the duration of the fade-out animation
  };

  return (
    <div className={`popup-overlay ${fade ? 'fade-out' : ''}`}>
      <div className="popup-content">
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> Ohana </p>
        <p><strong>Email:</strong> ohana@example.com</p>
        <p><strong>Phone:</strong> 9878786545 </p>
        <button onClick={handleClose} className="btn btn-primary">
          Close
        </button>
      </div>
    </div>
  );
};

export default function Carousel() {
  const sliderRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const openPopup = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <Slider ref={sliderRef} {...settings}>
              {carouselData.map((val, index) => (
                <div className="carousel-item" key={index}>
                  <img className="w-100" src={val.img} alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center carousel-overlay">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                        {val.subtitle}
                      </h6>
                      <h1 className="display-3 text-white mb-4 animated slideInDown">
                        {val.title}
                      </h1>
                      <a
                        href="/rooms"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        {val.btn1}
                      </a>
                      <a
                        href="#"
                        onClick={openPopup}
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                      >
                        {val.btn2}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <button className="carousel-control-prev" type="button" onClick={previous}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={next}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {showPopup && <Popup onClose={closePopup} />}
    </>
  );
}
