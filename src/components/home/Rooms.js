import React, { useEffect } from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";

export default function Rooms() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.zoom-btn');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');
    const modalDescription = document.querySelector('.modal-description');
    const modalPrice = document.querySelector('.modal-price');

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

        modal.style.display = 'block';
      });
    });

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }, []);
  return (
    <>
      <div className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" />
        <div className="modal-details">
          <p className="modal-price"></p>
          <p className="modal-description"></p>
        </div>
      </div>
      <div className="row g-4 rooms">
        {roomItems.map((item, key) => (
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={key}>
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src={item.img} alt="img" />
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
                  {facility.map((item, index) => (
                    <small className="border-end me-3 pe-3" key={index}>
                      {item.icon}
                      {item.quantity} {item.facility}
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
