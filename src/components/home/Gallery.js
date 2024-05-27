import React from 'react';
import CommonHeading from '../common/CommonHeading';
import { roomItems } from '../data/Data';

export default function Gallery() {
  // Function to parse URL parameters
  const getRoomIdFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('roomId');
  };

  const roomId = getRoomIdFromURL();
  const room = roomItems[roomId];

  if (!room) {
    return (
      <div className="container-xxl py-5">
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
          heading="Our Room Gallery"
          title={room.name}
          subtitle="Explore Our"
        />
        <div className="gallery">
          {room.images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Room ${room.name} image ${index + 1}`} />
            </div>
          ))}
        </div>
        <a
          className="btn btn-sm btn-primary rounded py-2 px-4 mt-4"
          href="/"
        >
          Back to Rooms
        </a>
      </div>
    </div>
  );
}
