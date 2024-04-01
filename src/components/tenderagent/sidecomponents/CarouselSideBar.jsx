import React from "react";
import { Carousel } from "@material-tailwind/react";

const CarouselSideBar = () => {
  return (
    <Carousel transition={{ type: "tween", duration: 0.5}} className="rounded-xl shadow-md opacity-70 hover:opacity-100">
      <img
        src="/inicio.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/inicio.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/inicio.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default CarouselSideBar;
