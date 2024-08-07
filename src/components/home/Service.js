import React from "react";
import CommonHeading from "../common/CommonHeading";
import { services } from "../data/Data";

export default function Services() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading
              heading="our Services"
              title="Services"
              subtitle="Explore our"
            />
          </div>
          <div className="row g-4">
            {services.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  key={key}>
                <a className="service-item rounded">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <a className="w-100 h-100 border rounded d-flex align-items-center justify-content-center"href={`/serviceGallery?roomId=${key}`}>
                      {item.icon}</a>
                    {/* </div> */}
                  </div>
                  <h5 className="mb-3">{item.name}</h5>
                  <p className="text-body mb-0" style={{ textAlign: 'justify', margin: '0 auto', width: 'fit-content' }}>{item.discription}</p>
                  </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
