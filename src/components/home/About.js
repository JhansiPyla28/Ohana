import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";

export default function About() {
  return (
    <>
      <div className="container-xxl py-4">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className=" text-uppercase">OHANA</span>
              </h1>
              <p className="mb-4" style={{ textAlign: "justify" }}>
              Ohana Homestay is the right choice for guests who are looking for a peaceful and memorable stay on the foothills of the Himalayas. This sprawling bungalow has been tastefully constructed, decorated & maintained and gives a look of old British bungalow. With modern amenities in the lap of nature, Ohana Homestay is the perfect getaway in the beautiful valley of Dehradun.
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/about-1.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/about-2.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/about-4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-2">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <img
                  className="img-fluid rounded wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/assets/img/about-6.jpg"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <div className="col-lg-6"  style={{ textAlign: "justify" }}>
              <h6 className="section-title text-start text-primary text-uppercase">
                About Homestay
              </h6>
              <p className="mb-4" >
                Enjoy a private holiday in a cosy home surrounded by the calling mountains..where you must go!!! Perched in a valley bestowed by nature..this quaint homestay will win you over its warm homely vibe.
              </p>
              <p className="mb-4">
                Right from the cosy timbered façade to the breath-taking views of the Himalayan ranges from your room window, there is plenty to capture in your camera…Each room here has a personal veranda that opens up to mesmerizing views..Make your evenings special with barbeques by the bonfire in the lawns. Relish home-style food served or cook yourself a meal in the shared kitchen area. This blissful picturesque cocooned homestay is hand-picked just for you!!!!!!
              </p>
              {/* <a className="btn btn-primary py-3 px-5 mt-2" href="/rooms">
                Explore More
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-3">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6"  style={{ textAlign: "justify" }}>
              <h6 className="section-title text-start text-primary text-uppercase">
                Ohana Homestay
              </h6>
              <p className="mb-4" >
                A name that spells Tranquality; A Luxury Homestay, The new-age way of Holiday, located amidst The Beautiful City of Dehradun. Adorned with a beautiful panoramic view of hills & bestowed with natural beauty in a pleasantly cool atmosphere with uncanny peace enthralled with nature, OHANA, serves as a wonderful alternate to the cookie clutter hotel rooms. 
              </p>
              <p className="mb-4">
              The facility has four AC luxury rooms well equipped with high-end- modern amenities and can accommodate 8 guests. Guests can additionally access living and dinning room and kitchen. All rooms have attached toilet fitted with modern sanitary fittings including geyser & big looking mirror, TV, writing table with chair, king size bed, sides tool cupboard and high quality bedding. Spacious balcony is connected with all rooms.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img
                  className="img-fluid rounded wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/assets/img/about-5.jpeg"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="btn btn-primary py-3 px-5 mt-2" href="/rooms">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
