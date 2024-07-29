import React, { useState, useRef } from 'react';
import CommonHeading from '../common/CommonHeading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Gallery_and_Guests } from '../data/Data';
import '../../css/style.css'; // Ensure you import the CSS file

export default function GuestsGallery() {
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

  // Function to parse URL parameters
  const getRoomIdFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('roomId');
  };

  const roomId = getRoomIdFromURL();
  const room = Gallery_and_Guests[roomId];

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

  if (!room) {
    return (
      <div className="galleryContainer container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Room Not Found"
            title="Error"
            subtitle="Invalid Room"
          />
          <p>Sorry, the room you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <CommonHeading
          heading="Our Gallery"
          title={room.name}
          subtitle="Our"
        />
        <div className="gallery">
          {room.images.map((media, index) => (
            <div className="gallery-item" key={index}>
              {media.type === 'image' ? (
                <img src={media.url} alt={`Room ${room.name} image ${index + 1}`} />
              ) : (
                <video controls>
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
        <a
          className="btn btn-sm btn-primary rounded py-2 px-4 mt-4 me-2"
          href="/"
        >
          Back to Home page
        </a>
        <button
          className="btn btn-sm btn-primary rounded py-2 px-4 mt-4"
          onClick={openPopup}
        >
          Book Now
        </button>
      </div>
      {showPopup && (
        <div className={`popup-overlay ${showPopup ? '' : 'fade-out'}`}>
          <div className="popup-content">
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> Ohana </p>
            <p><strong>Email:</strong> ohanalivingdoon@gmail.com</p>
            <p><strong>Phone:</strong> +91 9058303579 </p>
            <button onClick={closePopup} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
