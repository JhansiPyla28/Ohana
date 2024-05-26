import React, { useEffect, useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";

export default function Rooms() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCarouselSlide = (direction) => {
    const totalSlides = roomItems.length;
    console.log(roomItems);
    let nextSlide = currentSlide + direction;

    if (nextSlide < 0) {
      nextSlide = totalSlides - 1;
    } else if (nextSlide >= totalSlides) {
      nextSlide = 0;
    }

    setCurrentSlide(nextSlide);
    
    console.log(nextSlide)
  };
  
  useEffect(() => {
    const buttons = document.querySelectorAll('.zoom-btn');
    const modal = document.querySelector('.modal');
    const modalContentWrapper = document.querySelector('.modal-content-wrapper');
    const modalImg = document.querySelector('.modal-content');
    const modalDescription = document.querySelector('.modal-description');
    const modalPrice = document.querySelector('.modal-price');
    const closeModal = document.querySelector('.close');

    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const roomItem = event.target.closest('.room-item');
        const imgSrc = roomItem.querySelector('.img-fluid').src;
        const description = roomItem.querySelector('.room-description').textContent;
        const price = roomItem.querySelector('.room-price').textContent;

        modalImg.src = imgSrc;
        modalDescription.textContent = description;
        modalPrice.textContent = price;

        modal.style.display = 'flex';
        setTimeout(() => {
          modal.classList.add('show');
          modalContentWrapper.classList.add('show');
        }, 10);
      });
    });

    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
      modalContentWrapper.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('show');
        modalContentWrapper.classList.remove('show');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      }
    });
  }, []);

  return (
    <>
      <div className="modal">
        <div className="modal-content-wrapper">
          <span className="close">&times;</span>
          <div id="carouselExampleIndicators" className="carousel slide modal-content" data-bs-ride="carousel">
            <div className="carousel-inner">
              {roomItems.map((item, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={item.images[currentSlide]} className="d-block w-100" alt={`Room ${index + 1}`} />
                </div>
              ))}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={() => handleCarouselSlide(-1)}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={() => handleCarouselSlide(1)}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>            

          </div>
          <div className="modal-details">
            <p className="modal-price"></p>
            <p className="modal-description"></p>
          </div>
        </div>
      </div>

      <div className="row g-4 rooms">
        {roomItems.map((item, key) => (
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={key}>
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                {item.images && item.images.length > 0 && (
                  <img className="img-fluid" src={item.images[0]} alt={`Room ${key + 1}`} />
                )}
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4 room-price">
                  {item.price}
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{item.name}</h5>
                  <div className="ps-2">{item.star}</div>
                </div>
                <div className="d-flex mb-3">
                  {facility.map((facilityItem, index) => (
                    <small className="border-end me-3 pe-3" key={index}>
                      {facilityItem.icon}
                      {facilityItem.quantity} {facilityItem.facility}
                    </small>
                  ))}
                </div>
                <p className="text-body mb-3 room-description">{item.description}</p>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4 zoom-btn"
                    href=""
                  >
                    {item.yellowbtn}
                  </a>
                  <a className="btn btn-sm btn-dark rounded py-2 px-4" href="/contact">
                    {item.darkbtn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}