import React from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import Services from "./Service";
import Rooms from "./Rooms";
import HomeAbout from "./HomeAbout"
import Sliders from "./Slider";
import Teams from "./Team";
import Gallery from "./Gallery";
import ImportantPlaces from "./ImportantPlaces";
import Footer from "../common/Footer";

export default function Home() {
  return (
    <>
      <Carousel />
      <Footer />
      <HomeAbout />
      <Rooms />
      <Services />
      <ImportantPlaces/>
      <Sliders />
      {/* <Teams /> */}
    </>
  );
}
