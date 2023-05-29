"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { imageList } from "../assets/consts/images";
type Props = {};

function ImageSlider({}: Props) {
  return (
    <div className=" w-full h-fit">
      <Carousel showStatus={false} infiniteLoop={true} showIndicators={false}>
        {imageList.map((img, idx) => {
          return <Image key={idx} src={img} alt="" />;
        })}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
