import React from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";

export default function Rooms() {
const roomData=(room,facility)=>{
  if(facility.facility==='Wifi'){
    console.log(true,room.wifi)
    return room.wifi;
  }else if(facility.facility==='bath'){

    return room.bath;
  }
  else{

    return room.rooms;
  }
}
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={key}>
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.img} alt="img" />
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
                          {roomData(item,facilityItem)} {facilityItem.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <a
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href={`/gallery?roomId=${key}`}
                      >
                        {item.yellowbtn}
                      </a>
                      <a className="btn btn-sm rounded py-2 px-4" href="/contact">
                        {item.darkbtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
