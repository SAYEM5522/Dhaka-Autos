import React from "react";

const Home = () => {
  return (
    <div>
      <section className="pt-6 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-8xl  sm:px-6 lg:px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="mt-5 text-4xl font-bold mt-[-30px] leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              This website is under development
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> phase </span>
              </span>
            </p>
          </div>
        </div>

        <div className="pb-12 mt-8 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className="transform scale-110"
                  src="https://www.spinxdigital.com/app/uploads/2023/01/Image-Maintenance.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
