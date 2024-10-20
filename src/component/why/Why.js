import React from "react";

const Why = () => {
  return (
    <section
      style={{
        backgroundImage: "url('why.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="py-12 px-10 bg-gray-50 lg:py-28"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl xl:text-5xl font-dm-sans">
            Why Choose Us
          </h2>
        </div>

        <div className="flex flex-col gap-6 items-center max-w-md mx-auto mt-8 lg:mt-20 lg:flex-row lg:max-w-none">
          <div className="flex-1 overflow-hidden bg-white border border-gray-200 rounded-2xl">
            <div className="py-8 px-9">
              <p className="text-4xl">&#128522;</p>
              <p className="mt-8 text-xl font-bold text-gray-900">
                Expert Customer Service
              </p>
              <p className="mt-5 text-sm leading-5 font-normal text-gray-900">
                Our team of dedicated car enthusiasts is here to guide you every
                step of the way. From selecting the right vehicle to securing
                the best financing option, we're committed to providing
                personalized service to make your car-buying experience smooth
                and enjoyable.
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden bg-white border border-gray-200 rounded-2xl">
            <div className="py-8 px-9">
              <p className="text-4xl">&#128515;</p>
              <p className="mt-8 text-xl font-bold text-gray-900">
                Quality You Can Trust
              </p>
              <p className="mt-5 text-sm leading-5 font-normal text-gray-900">
                Every vehicle in our inventory goes through a rigorous
                inspection process to ensure it meets our high standards of
                safety, performance, and comfort. We believe in transparency,
                offering a detailed history report for every car so you can buy
                with confidence.
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden bg-white border border-gray-200 rounded-2xl">
            <div className="py-8 px-9">
              <p className="text-4xl">&#x1F44D;</p>
              <p className="mt-8 text-xl font-bold text-gray-900">
                Affordable Pricing & Flexible Financing
              </p>
              <p className="mt-5 text-sm leading-5 font-normal text-gray-900">
                We offer competitive pricing to ensure you get the best deal
                possible. With a variety of financing options available,
                including no-down-payment plans and low-interest loans, we make
                owning your dream car easier than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
