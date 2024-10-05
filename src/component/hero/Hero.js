import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { IoTimeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import Brand from "../brand/Brand";

const Hero = () => {
  return (
    <div>
      <section>
      <div className="relative py-[120px] bg-white sm:py-[150px] md:py-[200px] lg:py-[300px]">
  <div className="absolute inset-0 z-0">
    <img
      className="object-cover object-right w-full  lg:object-center"
      src="banner1.png"
      alt=""
    />
  </div>

  {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div> */}

  <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl z-20">
    <div className="max-w-lg mx-auto text-left xl:max-w-4xl">
      <p className="text-5xl font-nunito-sans mt-[-100px] font-bold text-white sm:text-4xl xl:text-7xl">
        Find Your Next
      </p>
    </div>
  </div>
</div>

     <div className="bg-white  !justify-center items-center flex shadow-lg mx-auto 3xl:mt-[-150px] 2xl:mt-[-150px] xl:mt-[-150px] lg:mt-[-150px] md:mt-[-150px] sm:mt-[-60pxpx] mt-[-55px] z-40 h-auto p-5 rounded-lg xl:w-[60%] md:w-[70%] sm:w-[90%] w-full relative flex-wrap gap-4">
  <div className="flex flex-col !items-center text-center sm:flex-row sm:text-left sm:items-start ">
    <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
      <HiOutlinePhone size={24} color="#fff" />
    </div>
    <div className="flex sm:ml-5 flex-col items-center sm:items-start mt-3 sm:mt-0">
      <p>Contact Us</p>
      <p className="font-semibold text-xl">+88 013 30 30 30 87</p>
    </div>
  </div>

  <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start">
    <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
      <CiStar size={24} color="#fff" />
    </div>
    <div className="flex sm:ml-5 flex-col items-center sm:items-start mt-3 sm:mt-0">
      <p>Email Us</p>
      <p className="font-semibold text-xl">info@dhakaautos.com</p>
    </div>
  </div>

  <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start">
    <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
      <IoTimeOutline size={24} color="#fff" />
    </div>
    <div className="flex sm:ml-5 flex-col items-center sm:items-start mt-3 sm:mt-0">
      <p>Thursday to Tuesday</p>
      <p className="font-semibold text-xl">10:00 AM - 08:00 PM</p>
    </div>
  </div>
</div>


        <div style={{
      backgroundImage: "url('brand.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center", 
    }} className="bg-[#fff]  z-30 mt-[-120px] relative xl:mt-[-120px] md:mt-[-120px] sm:mt-[-120px]">
          <section className="py-10 mt-[50px] sm:py-16 lg:py-24">
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
              <Brand />
             
            </div>
          </section>
        </div>
        <div  style={{
          backgroundImage: "url('preorder.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", 
        }}  className="py-10">
        <div className="text-center">
          <div className="flex justify-center items-center">
          <img src="preorder2.png" width={400}  />

          </div>
          <p className="max-w-md mx-auto mt-6 text-lg font-normal text-gray-400">
          Can’t find the car you're looking for? No problem! With our Pre-Order Program, you can reserve your dream car before it hits our lot. Simply tell us what make and model you're searching for, and we'll source it for you from our network of trusted suppliers.
          </p>
          <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
            <div
              className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
            </div>
            
          </div>
        </div>
          <div className="flex items-center justify-center ">
          {/* <div className="grid items-center !place-items-center h-full grid-cols-3 mt-12"> */}
                    <div className="relative mt-12 group">
                      <img width={600} className=" transition-all duration-200 "
                        src="preorder3.png" alt=""/>
                    </div>
                  </div>
          {/* </div> */}
       
      </div>
      </section>
    </div>
  );
};

export default Hero;
