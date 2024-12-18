import Logo from "./Logo";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import Star from "./Star";

import Carousel from "react-bootstrap/Carousel";

function LogoHeader({ dados }) {
  return (
    <header className="top-96 gap">
      <div className="w-full p-8 h-72 ">
        <ul className=" p-4 space-x-3 ">
          <h1 className="mx-8 w-full flex items-center p-2  gap-4 text-3xl font-bold text-center bg-gradient-to-r from-leftViolet-100 to-rightViolet-100 bg-clip-text text-transparent">
            <Logo /> SlideMovies
          </h1>

          <center className="">
            <Carousel
              indicators={false}
              prevIcon={
                <span className="text-leftViolet-100 text-5xl">
                  <FaArrowLeft />
                </span>
              }
              nextIcon={
                <span className=" text-leftViolet-100  text-5xl">
                  <FaArrowRight />
                </span>
              }
              className=" w-2/3 h-36 "
            >
              {dados.map(
                (data, key) =>
                  key < 3 && (
                    <Carousel.Item interval={3000} className="justify-end">
                      <img
                        className="h-56 w-56 d-block opacity-90 scale-x-105 object-cover justify-end"
                        src={data.image_url}
                        alt="imageCarousel"
                      />
                      <Carousel.Caption>
                        <li key={key} className="text-end p-2 rounded-md ">
                          <p className="text-black text-left  text-sm font-bold font-Montserrat rounded-md space-y-2">
                            Destaques do mês
                          </p>
                          <h4 className=" text-black text-left text-lg font-Montserrat font-bold  rounded-md  ">
                            {data.title}
                          </h4>
                          <p className="text-black text-left text-xs font-bold font-Montserrat rounded-md flex  ">
                            {data.crew}
                          </p>
                          <strong className=" bg-violet-700 p-1 gap-1 flex text-slate-50 w-24 h-7 rounded-xl items-center ">
                            <Star /> {data.rating}/10
                          </strong>
                        </li>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
              )}
            </Carousel>
          </center>
        </ul>
      </div>
    </header>
  );
}
export default LogoHeader;
