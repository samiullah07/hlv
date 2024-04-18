"use client";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import CustomButtonGroup, {
//   CustomButtonGroupProps,
// } from "../CustomButtonGroup/CustomButtonGroup";

// import "react-multi-carousel/lib/styles.css";
import BurgerCards from "./UsersCards";
import Image from "next/image";
import processlogo from "../../../../public/images/processlogo.png";
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1324 },
//     items: 1.5,
//     slideToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1324, min: 764 },
//     items: 1.5,
//     slideToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 764, min: 0 },
//     items: 1,
//     slideToSlide: 1,
//   },
// };

// const PopularBurger = () => {
//   const customButtonGroupProps: CustomButtonGroupProps = {
//     next: () => {}, // Next button ka action function
//     previous: () => {}, // Previous button ka action function
//     responsive: {}, // Responsive object
//     children: [], // Carousel ke slides
//   };

//   return (
{
  /* <div className="pt-[4rem] pb-[3rem] bg-[#F2F2F2]">
  <div className="flex justify-center items-center h-auto pb-[3rem]">
    <Image
      src={processlogo}
      alt="processlogo"
      className="ml-4 md:mr-0 mr-4 md:block hidden"
    />
    <h1 className="text-[25px] md:text-[40px] font-extrabold">
      What's The Process Like?
    </h1>
  </div>
  <div className="md:w-[80%] w-[80%] sm:mt-[4rem] mx-auto">
    <Carousel
      additionalTransfrom={0}
      autoPlay={false}
      arrows={false}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={false}
      customButtonGroup={<CustomButtonGroup {...customButtonGroupProps} />}
    >
      <BurgerCards
        title="Welcome to the Store"
        image="/images/process1.png"
        step="Step 1"
        para="Welcome to the store! Get ready to discover  product  compatibility with our app. Begin  by picking  up a product from the shelves around you"
        top=""
      />

      <BurgerCards
        title="Select Your Product"
        image="/images/process2.png"
        step="Step 2"
        para="Select a drug product that interests you. Simply reach out and grab it from the shelf. picking  up a product from the shelves around you"
        top=""
      />

      <BurgerCards
        title="Scan For Compatibility"
        image="/images/process3.png"
        step="Step 3"
        para="To scan the product barcode, tap the 'Scan' button in the app and align the barcode within the frame. picking  up a product from the shelves around you "
        top="/images/process3top.png"
      />

      <BurgerCards
        title="View Matching Result"
        image="/images/process4.png"
        step="Step 4"
        para="After scanning, view the compatibility results displayed on your screen.picking  up a product from the shelves around you picking  up a product from the Hlv"
        top="/"
      />
    </Carousel>
  </div>
</div>; */
}
//   );
// };

// export default PopularBurger;

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./../../boostrap.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default () => {
  let swiperRef: any = null;

  const goNext = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="slider-section">
      <div className="flex justify-center items-center h-auto pb-[3rem]">
        <Image
          src={processlogo}
          alt="processlogo"
          className="ml-4 md:mr-0 mr-4 md:block hidden"
        />
        <h1 className="text-[25px] md:text-[40px] font-extrabold">
          What's The Process Like?
        </h1>
      </div>
      <div className="md:w-[80%] w-[80%] sm:mt-[4rem] mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef = swiper)}
          className="owl-carousel slider-carousel"
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            767: {
              slidesPerView: 1.5,
            },
            // Default breakpoints for larger screen widths
          }}
        >
          <SwiperSlide>
            <div className="item">
              <div className="row w-100 mx-auto">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="left-content">
                    <div className="vector-img">
                      <Image
                        src="/images/process side image.png"
                        width={200}
                        height={200}
                        alt={"slider"}
                        className="w-100"
                      />
                    </div>
                    <div className="step-badge">Step 1</div>
                    <div className="heading">Welcome to the Store</div>
                    <div className="text">
                      Welcome to the store! Get ready to discover product
                      compatibility with our app. Begin by picking up a product
                      from the shelves around you
                    </div>
                    <div className="px-2 pb-2 d-flex  justify-content-between justify-content-md-start">
                      <button
                        type="button"
                        role="presentation"
                        className="swiper-button-prev me-5"
                      >
                        <FaChevronLeft />
                      </button>

                      <button
                        type="button"
                        role="presentation"
                        className="swiper-button-next"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                  <div className="img">
                    <Image
                      src="/images/process1.png"
                      width={200}
                      height={200}
                      alt={"slider"}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="row w-100 mx-auto">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="left-content">
                    <div className="vector-img">
                      <Image
                        src="/images/process side image.png"
                        width={200}
                        height={200}
                        alt={"slider"}
                        className="w-100"
                      />
                    </div>
                    <div className="step-badge">Step 2</div>
                    <div className="heading">Select Your Product</div>
                    <div className="text">
                      Select a drug product that interests you. Simply reach out
                      and grab it from the shelf.
                    </div>
                    <div className="px-2 pb-2 d-flex  justify-content-between justify-content-md-start">
                      <button
                        type="button"
                        role="presentation"
                        className="swiper-button-prev me-5"
                      >
                        <FaChevronLeft />
                      </button>

                      <button
                        type="button"
                        role="presentation"
                        className="swiper-button-next"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                  <div className="img">
                    <Image
                      src="/images/process2.png"
                      width={200}
                      height={200}
                      alt={"slider"}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="row w-100 mx-auto">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="left-content">
                    <div className="vector-img">
                      <Image
                        src="/images/process side image.png"
                        width={200}
                        height={200}
                        alt={"slider"}
                        className="w-100"
                      />
                    </div>
                    <div className="step-badge">Step 3</div>
                    <div className="heading">Scan For Compatibility</div>
                    <div className="text">
                      To scan the product barcode, tap the 'Scan' button in the
                      app and align the barcode within the frame.
                    </div>
                    <div className="px-2 pb-2 d-flex  justify-content-between justify-content-md-start">
                      <button
                        type="button"
                        role="presentation"
                        className="swiper-button-prev me-5"
                      >
                        <FaChevronLeft />
                      </button>

                      <button
                        type="button"
                        role="presentation"
                        className="swiper-button-next"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                  <div className="img">
                    <Image
                      src="/images/process3.png"
                      width={200}
                      height={200}
                      alt={"slider"}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="row w-100 mx-auto">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="left-content">
                    <div className="vector-img">
                      <Image
                        src="/images/process side image.png"
                        width={200}
                        height={200}
                        alt={"slider"}
                        className="w-100"
                      />
                    </div>
                    <div className="step-badge">Step 4</div>
                    <div className="heading">View Matching Result</div>
                    <div className="text">
                      After scanning, view the compatibility results displayed
                      on your screen.
                    </div>
                    <div className="px-2 pb-2 d-flex  justify-content-between justify-content-md-start">
                      <button
                        type="button"
                        role="presentation"
                        className="swiper-button-prev me-5"
                      >
                        <FaChevronLeft />
                      </button>

                      <button
                        type="button"
                        role="presentation"
                        className="swiper-button-next"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                  <div className="img">
                    <Image
                      src="/images/process3.png"
                      width={200}
                      height={200}
                      alt={"slider"}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
