import React from "react";

const CallToAction = () => {
  return (
    <div>
      <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://demoapus1.com/boxcar/wp-content/uploads/2023/10/slider3.jpg"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-gray-900/50"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              READY TO DRIVE YOUR DREAM CAR?
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-white sm:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
              nisl eu consectetur. Mi massa elementum odio eu viverra amet.
            </p>

            <div className="mt-8 sm:mt-10">
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
    </div>
  );
};

export default CallToAction;
