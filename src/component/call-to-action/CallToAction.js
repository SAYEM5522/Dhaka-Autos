import React from "react";

const CallToAction = () => {
  return (
    <section className="relative py-16 lg:py-20 xl:py-32">
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src="call.png" alt="" />
      </div>

      {/* <div className="absolute inset-0 bg-gray-900/50"></div> */}

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
            Get Latest Car
          </h2>
          <p className="mt-7 text-xl md:text-2xl font-normal leading-8 text-white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>

          <div className="pt-20">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              role="button"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
