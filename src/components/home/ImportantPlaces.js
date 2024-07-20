import React from "react";
import CommonHeading from "../common/CommonHeading";
import { importantPlaces } from "../data/Data";
import '../../css/style.css';
export default function ImportantPlaces() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading
              heading="Important Places"
              title="Tourist Attractions"
              subtitle="Nearby"
            />
          </div>
          <div className="row g-4">
            {importantPlaces.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  key={key}>
                <a className="service-item rounded">
                <img src={item.icon} className="importantPlaces-item"/>
                  <h5 className="mb-3">{item.name}</h5>
                  {/* <p className="text-body mb-0">{item.discription}</p> */}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
