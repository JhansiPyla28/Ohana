import React from "react";
import { Link } from "react-router-dom";
import '../../css/style.css';

export default function Heading({ heading, title, subtitle }) {
  return (
    <>
      <div className="container-fluid page-header mb-5 p-0 bgImg">
        <div className="container-fluid py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              {heading}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/">{title}</Link>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  {subtitle}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
