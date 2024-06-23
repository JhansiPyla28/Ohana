import React from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import Services from "./Service";
import Rooms from "./Rooms";
import HomeAbout from "./HomeAbout"
import Sliders from "./Slider";
import Teams from "./Team";

export default function Home() {
  return (
    <>
      <Carousel />
      <HomeAbout />
      <Rooms />
      <Services />
      <Sliders />
      {/* <Teams /> */}
    </>
  );
}
