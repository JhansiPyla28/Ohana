import { Link } from "react-router-dom";
import { footerContact, footerAddress, socialIcons, footerLogoPath } from "../data/Data";
import Newsletter from "../home/Newsletter";
import '../../css/style.css';

export default function Footer() {
  return (
    <>
      {/* <Newsletter /> */}
      <div
        className="container-fluid footerContainer text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="rounded p-4">
                <Link to="/">
                  <img src={footerLogoPath} alt="Ohana Logo" className="img-fluid mb-3" />
                </Link>
                <p className="text-white mb-0">
                  Experience a memorable stay at Ohana Living with modern amenities, nestled in the scenic foothills of the Himalayas.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footerContent">
              <h6 className="section-title text-start text-primary text-uppercase">
                ADDRESS
              </h6>
              {footerAddress.map((val, index) => (
                <p className="mb-2" key={index}>
                 {val.name}
                </p>
              ))}
              
            </div>
            <div className="col-md-6 col-lg-3 footerContent">
              <h6 className="section-title text-start text-primary text-uppercase">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a className="btn btn-outline-light btn-social" href="">
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
