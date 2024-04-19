"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { SiGitbook } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
// import "swiper/swiper-bundle.min.css";

const Experience = () => {
  const swiperRef = useRef<SwiperCore>(null);
  let swiperInstance: SwiperCore | null = null;
  const slideToCenter = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };
  return (
    <div className="bg-white">
      <div className="mt-[5rem] mb-[3rem]">
        <div className="text-center md:items-center justify-center flex flex-cols-2">
          <div>
            <h1 className="font-extrabold text-[25px] md:text-[40px] mx-[4rem] md:mx-0">
              Don't Just Take Our Words For It.
            </h1>
            <p className="font-bold text-[20px] mt-4">
              See what others says about us
            </p>
          </div>
          <div>
            <SiGitbook className="text-[#99C8FF] md:block hidden w-[2rem] h-[2rem] md:ml-[4rem] rotate-180" />
          </div>
        </div>

        <div className="testimonial-section">
          <div className="container">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={5}
              className="testimonial-carousel"
              loop
              onSwiper={(swiper) => {
                swiperInstance = swiper;
              }}
            >
              <SwiperSlide onClick={() => slideToCenter(0)}>
                <div className="item center">
                  <div className="img">
                    <img
                      src="/images/testimonial-1.png"
                      alt=""
                      className="mw-100 w-100"
                    />
                    <div className="content">
                      These features are yet the best i have ever seen. I didn’t
                      have to go see the physician before i could get a medicine
                      that works without complications.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => slideToCenter(1)}>
                <div className="item center">
                  <div className="img">
                    <img
                      src="/images/testimonial-2.png"
                      alt=""
                      className="mw-100 w-100"
                    />
                    <div className="content">
                      These features are yet the best i have ever seen. I didn’t
                      have to go see the physician before i could get a medicine
                      that works without complications.
                    </div>
                  </div>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide onClick={() => slideToCenter(2)}>
                <div className="item center">
                  <div className="img">
                    <img
                      src="/images/testimonial-3.png"
                      alt=""
                      className="mw-100 w-100"
                    />
                    <div className="content">
                      These features are yet the best i have ever seen. I didn’t
                      have to go see the physician before i could get a medicine
                      that works without complications.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => slideToCenter(3)}>
                <div className="item center">
                  <div className="img">
                    <img
                      src="/images/testimonial-4.png"
                      alt=""
                      className="mw-100 w-100"
                    />
                    <div className="content">
                      These features are yet the best i have ever seen. I didn’t
                      have to go see the physician before i could get a medicine
                      that works without complications.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => slideToCenter(4)}>
                <div className="item center">
                  <div className="img">
                    <img
                      src="/images/testimonial-5.png"
                      alt=""
                      className="mw-100 w-100"
                    />
                    <div className="content">
                      These features are yet the best i have ever seen. I didn’t
                      have to go see the physician before i could get a medicine
                      that works without complications.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
