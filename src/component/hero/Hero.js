import React from "react";
import { HiPhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";
import Brand from "../brand/Brand";

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <div className="relative">
          <img
            className="w-full h-auto object-cover lg:object-center"
            src="banner1.png"
            alt=""
          />

          <div className="absolute top-[50%] md:top-[40%] w-full left-[50%] md:left-[32%] lg:left-[30%] -translate-y-1/2 -translate-x-1/2 text-center z-10  tracking-[7px] font-logotype">
            <p
              className="text-xl md:text-2xl lg:text-4xl xl:text-[52px] text-white font-bold"
              style={{ textShadow: "#FF0000 2px 1px 10px" }}
            >
              FIND YOUR NEXT
            </p>
            <p className="text-xl md:text-2xl lg:text-4xl xl:text-[52px] text-white pt-2 lg:pt-7 font-[900]  tracking-[10px]">
              AWESOME VEHICLE
            </p>
          </div>
        </div>

        {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-20 z-10"></div> */}

        <div className="relative md:absolute bottom-0 md:-bottom-[15%] lg:-bottom-[13%] xl:-bottom-[8%] left-[50%] -translate-x-1/2 bg-white flex flex-wrap justify-start items-center md:justify-center shadow-lg z-40 py-10 px-5 rounded-lg w-full lg:w-[80%] xl:w-[70%] gap-6 md:gap-4 xl:gap-10">
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
              <HiPhone size={24} color="#fff" />
            </div>
            <div className="ml-3 xl:ml-5 text-left md:text-center">
              <p>Contact Us</p>
              <p className="font-semibold text-lg xl:text-xl">
                +88 013 30 30 30 87
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
              <HiOutlineMail size={28} color="#fff" />
            </div>
            <div className="ml-3 xl:ml-5 text-left md:text-center">
              <p>Email Us</p>
              <p className="font-semibold text-lg xl:text-xl">
                info@dhakaautos.com
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
              <HiOutlineClock size={28} color="#fff" />
            </div>
            <div className="ml-3 xl:ml-5 text-left md:text-center">
              <p>Contact Us</p>
              <p className="font-semibold text-lg xl:text-xl">
                10:00 AM - 08:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        style={{
          backgroundImage: "url('brand.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="-mt-[150px] md:-mt-[100px] lg:-mt-[50px]"
      >
        <div className="py-16 mt-[50px] lg:py-24">
          <div className="mt-[150px] max-w-[85rem] px-10 mx-auto lg:px-8">
            <Brand />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: "url('preorder.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="py-24"
      >
        <div className="text-center w-[80%] md:w-[75%] mx-auto">
          <div className="flex justify-center items-center">
            <img src="preorder2.png" />
          </div>
          <div className="w-full xl:w-[80%] mx-auto">
            <p className="mt-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-600 leading-[30px] md:leading-[40px] lg:leading-[50px] xl:leading-[60px]">
              Can’t find the car you're looking for? No problem! With our
              Pre-Order Program, you can reserve your dream car before it hits
              our lot. Simply tell us what make and model you're searching for,
              and we'll source it for you from our network of trusted suppliers.
            </p>
          </div>
          <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
          </div>
        </div>
        <div className="mx-auto w-[80%] md:w-[75%]">
          <div className="flex items-center justify-center mt-12">
            <img
              className=" transition-all duration-200 "
              src="preorder3.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
