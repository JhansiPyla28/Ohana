import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  const contactDetails = contact.general; // Accessing the general contact details

  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading 
            heading="Contact Us"
            subtitle="Contact us for Bookings"
            title=""
          />
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <h6 className="text-start text-primary text-uppercase">
                    {contactDetails.name}
                  </h6>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {contactDetails.address}
                  </p>
                  <p>
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    Phone 1: {contactDetails.phone1}
                  </p>
                  <p>
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    Phone 2: {contactDetails.phone2}
                  </p>
                  <p>
                    <i className="fa fa-envelope-open text-primary me-2"></i>
                    Email: {contactDetails.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.188487720287!2d78.0862126754265!3d30.374005174759194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7f440d0d793%3A0x2b8417710ac9b292!2sOHANA%20Homestay%20Dehradun!5e0!3m2!1sen!2sin!4v1716490213517!5m2!1sen!2sin"
                frameBorder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <h5 className="text-start text-primary mb-3">
              Urban Gold Rated Homestay by Uttarakhand Tourism Development Board
              </h5>
              <img 
                src="../assets/img/certification.jpg" 
                alt="Certification"
                className="img-fluid"
                style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
