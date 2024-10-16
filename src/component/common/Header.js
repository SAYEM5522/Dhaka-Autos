import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AppNavLink from "./AppNavLink";

const HeaderTabs = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Verify Auction Sheet",
    url: "/verify-auction",
  },
  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "Our Services",
    url: "/services",
    // sub_headers: [
    //   {
    //     label: "Electrical Installation and Testing",
    //     url: "/service-list/electrical-installation-and-testing",
    //   },
    //   {
    //     label: "Testing and Commissioning",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "SCADA System Installation & Operation",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "Fault Detection and Fix",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "Continuous Monitoring & Preventive Maintenance",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "Repair and Certify",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "Inventory Management",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "Trenching & Cable Laying Activities",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "Repair and Certify",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "Piling",
    //     url: "/about-us",
    //   },
    //   {
    //     label: "IPV Module Installation",
    //     url: "/about-us",
    //   },
    // ],
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded((expanded) => !expanded);
  };

  return (
    <>
      <header
        style={{
          backgroundImage: "url('header.png')",
          backgroundRepeat: "no-repeat",
        }}
        className="py-4 bg-white lg:max-h-[100px] flex items-center justify-center relative"
      >
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

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-200"
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

            <nav className="hidden !mx-auto lg:items-center lg:ml-16 lg:mr-auto lg:space-x-18 lg:flex"></nav>

            <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
              <div className="flex items-center justify-center">
                {HeaderTabs.map((header) => (
                  <div key={header.label}>
                    {header.sub_headers?.length ? (
                      <div className="group relative cursor-pointer">
                        <AppNavLink
                          label={header.label}
                          url={header.url}
                          className="text-base font-medium mr-8 text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                        />
                        <div class="invisible absolute z-50 py-3  min-w-[280px] flex w-full flex-col bg-white  px-4 text-gray-800 shadow-xl group-hover:visible">
                          <div className="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2">
                            {header.sub_headers.map((sub, i) => (
                              <AppNavLink
                                key={header.label + "_" + i}
                                label={sub.label}
                                url={sub.url}
                                className="my-1 block border-b border-gray-100 py-1 font-normal text-black hover:text-[#2DD4C0] md:mx-2"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <AppNavLink
                        label={header.label}
                        url={header.url}
                        className="text-base font-medium mr-8 text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                      />
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>

          <nav
            className={`${
              expanded ? "" : "hidden "
            }absolute top-full left-0 bg-white text-black z-50 w-full lg:hidden`}
          >
            <div className="px-3 py-5">
              <div className="grid gap-y-3 text-black w-fit">
                {HeaderTabs.map((header) => (
                  <AppNavLink
                    key={header.label}
                    label={header.label}
                    url={header.url}
                    className="text-base font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
