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
              className="object-cover object-right w-full h-full lg:object-center"
              src="banner1.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl z-20">
            <div className="max-w-lg mx-auto text-center xl:max-w-4xl">
              <p className="max-w-lg mx-auto font-nunito-sans text-lg mt-6  font-normal leading-7 text-gray-300">
                TRUSTWORTHY CAR DEALERSHIP
              </p>
              <p className="text-5xl font-nunito-sans font-bold text-white sm:text-4xl xl:text-5xl">
                Find Your Perfect Car At Dhaka Autos
              </p>
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transition-all duration-1000 opacity-70 inset-0 blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <a
                  href="/"
                  title=""
                  className="relative inline-flex items-center rounded-lg justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-[#23A999] border border-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] justify-evenly items-center flex shadow-lg mx-auto mt-[-150px] z-40 h-[120px] p-5 rounded-lg xl:w-[60%] md:w-[70%] sm:w-[70%] w-[100%] relative">
          <div className="flex flex-row items-center">
            <div className="h-12 w-12 bg-[#000] rounded-full flex items-center justify-center">
              <HiOutlinePhone size={24} color="#fff" />
            </div>
            <div className="flex ml-5 flex-col items-center">
              <p>Contact Us</p>
              <p className="font-semibold text-xl">+88 013 30 30 30 87</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="h-12 w-12 bg-[#000] rounded-full flex items-center justify-center">
              <CiStar size={24} color="#fff" />
            </div>
            <div className="flex ml-5 flex-col items-center">
              <p>Email Us</p>
              <p className="font-semibold text-xl">info@dhakaautos.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="h-12 w-12 bg-[#000] rounded-full flex items-center justify-center">
              <IoTimeOutline size={24} color="#fff" />
            </div>
            <div className="flex ml-5 flex-col items-center">
              <p>Thursday  to  Tueday</p>
              <p className="font-semibold text-xl">10:00 AM - 08:00 PM</p>
            </div>
          </div>
        </div>
        <div className="bg-[#fff]  shadow-lg z-30 mt-[-120px] relative xl:mt-[-120px] md:mt-[-120px] sm:mt-[-120px]">
          <section className="py-10 mt-[50px] sm:py-16 lg:py-24">
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
              <Brand />
              <div className="grid items-center md:grid-cols-2 md:gap-x-20 mt-[80px] gap-y-10">
                <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                  <div className="relative max-w-xl ml-auto">
                    <div className="overflow-hidden flex flex-row aspect-w-3 aspect-h-4">
                      <img
                        className="object-cover w-[600px] rounded-md h-[550px]"
                        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="md:order-1">
                  <h2 className="text-[30px] mb-[30px] font-nunito-sans font-bold leading-tight text-black sm:text-4xl lg:text-[60px]">
                    About Us
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    Dhaka Autos is a premier car dealership in Dhaka,
                    specializing in the import and sale of Japanese cars. Our
                    extensive collection of vehicles comes straight from live
                    auctions in Japan, giving our customers the best opportunity
                    to own their dream car at the lowest possible cost.
                    Alongside our sales, we also provide a range of services to
                    ensure a seamless car ownership experience. With a
                    commitment to quality and customer satisfaction, Dhaka Autos
                    BD is your one-stop destination for finding and owning your
                    perfect car. Established with a passion for providing
                    high-quality Japanese cars to the people of Dhaka, Dhaka
                    Autos BD started its journey in 2020. Since then, we have
                    grown into a trusted dealership with a wide network of
                    satisfied customers.
                  </p>

                  <div className="relative inline-flex mt-10 group">
                    <div className="absolute transition-all duration-1000 opacity-70 inset-0 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                    <a
                      href="#"
                      title=""
                      className="relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-[#23A999] border border-transparent rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;
