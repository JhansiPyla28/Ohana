import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";
import Gallery from "./components/home/Gallery";
import ServiceGallery from "./components/home/serviceGallery";
import GuestsGallery from "./components/home/GuestsGallery";

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/serviceGallery" element={<ServiceGallery />} />
            <Route path="/guestGallery" element={<GuestsGallery />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
