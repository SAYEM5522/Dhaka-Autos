import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <header style={{
        backgroundImage:"url('header.png')",
        backgroundRepeat:"no-repeat"
      }} className="py-4 bg-white lg:max-h-[100px] flex items-center justify-center">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className={"flex items-center justify-between"}>
            <div className="flex-shrink-0">
              <a href="/" title="" className="flex">
                <img
                  className=""
                  width={250}
                  height={120}
                  src="/logo.png"
                  alt=""
                />
              </a>
            </div>
            {/* <div class="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="#" title="" class="inline-flex">
                <img
                  class="w-[250px] h-full"
                  src="logo.jpeg"
                  alt=""
                />
              </a>
            </div> */}

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900  "
                onClick={toggleMenu}
                aria-expanded={expanded}
              >
                <span aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {expanded ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </span>
              </button>
            </div>

            {/* <nav className={`lg:hidden ${expanded ? "" : "hidden"}`}>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <a
                  href="#"
                  title=""
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  title=""
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Our Services
                </a>

                <a
                  href="#"
                  title=""
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  About Us{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Faq
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav> */}

            <nav class="hidden !mx-auto lg:items-center lg:ml-16 lg:mr-auto lg:space-x-18 lg:flex"></nav>

            <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  title=""
                  class="text-base font-medium mr-8 text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  title=""
                  class="text-base font-medium mr-4 text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  About Us
                </a>

                <div class=" flex min-w-[120px] mr-4 items-center justify-center">
                  <div class="group relative cursor-pointer">
                    <div class="flex items-center justify-between space-x-6 ">
                      <a
                        href="/service-list"
                        class="menu-hover  text-base font-medium text-white "
                      >
                        Our Services
                      </a>
                    </div>

                    {/* <div class="invisible absolute z-50 py-3  min-w-[280px] flex w-full flex-col bg-white  px-4 text-gray-800 shadow-xl group-hover:visible">
                      <a
                        href="/services/electrical-installation-testing"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        Electrical Installation and Testing
                      </a>

                      <a
                        href="/services/testing-commissioning"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        Testing and Commissioning
                      </a>

                      <a
                        href="/services/scada-system-installation-operation"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        SCADA System Installation & Operation
                      </a>
                      <a
                        href="/services/fault-detection-fix"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        Fault Detection and Fix
                      </a>
                      <a
                        href="/services/continuous-monitoring-preventive-maintenance"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        Continuous Monitoring & Preventive Maintenance
                      </a>
                      <a
                        href="/services/repair-certify"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        Repair and Certify
                      </a>
                      <a
                        href="/services/inventory-management"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        Inventory Management
                      </a>
                      <a
                        href="/services/trenching-cable-laying-activities"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        Trenching & Cable Laying Activities
                      </a>
                      <a
                        href="/services/piling"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        Piling
                      </a>
                      <a
                        href="/services/pv-inverter-structure"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        PV and Inverter Structure
                      </a>
                      <a
                        href="/services/ipv-module-installation"
                        class="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                      >
                        IPV Module Installation
                      </a>
                    </div> */}
                  </div>
                </div>

                <a
                  href="/contact-us"
                  title=""
                  class="text-base mr-8 font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
          <nav className={`lg:hidden  ${expanded ? "" : "hidden"}`}>
            <div className="px-1 py-8 ">
              <div className="grid gap-y-7">
                <div class=" flex  w-full "></div>

                <a
                  href="/"
                  title=""
                  class="text-base font-medium mr-8 text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  title=""
                  class="text-base font-medium mr-8 text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  About Us
                </a>

                <div class="mr-8">
                  <div class="group relative cursor-pointer">
                    <div class="flex items-center justify-between space-x-6 ">
                      <a
                        href="/service-list"
                        class="menu-hover  text-base font-medium text-white lg:mx-4"
                      >
                        Services
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="/contact-us"
                  title=""
                  class="text-base mr-8 font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
