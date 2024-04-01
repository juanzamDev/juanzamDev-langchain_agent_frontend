import React from "react";
import { Carousel } from "@material-tailwind/react";

const CarouselT = () => {
  return (
    <Carousel transition={{ duration: 0.5 }} className="rounded-xl bg-blue-gray-50 shadow-md">
      <img
        src="/Laptop1.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/Laptop2.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default CarouselT;
