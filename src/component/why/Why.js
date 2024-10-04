import React from "react";

const Why = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: "url('why.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", 
        }}
        className="py-12 bg-gray-50 sm:py-16 lg:py-20"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Why Choose Us
            </h2>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto mt-8 lg:mt-20 lg:flex-row lg:max-w-none">
            <div className="relative mr-2 flex-1 w-full overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="py-8 px-9">
                <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">
                  1
                </div>
                <p className="mt-5 text-xl font-medium text-gray-900 font-pj">
                  Expert Customer Service
                </p>
                <p className="mt-5 text-sm font-normal text-gray-900 font-pj">
                  Our team of dedicated car enthusiasts is here to guide you
                  every step of the way. From selecting the right vehicle to
                  securing the best financing option, we're committed to
                  providing personalized service to make your car-buying
                  experience smooth and enjoyable.
                </p>
              </div>
            </div>

            <div className="relative flex-1 w-full mr-2">
              <div className="absolute -inset-4"></div>

              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="py-8 px-9">
                  <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">
                    2
                  </div>
                  <p className="mt-5 text-xl font-medium text-gray-900 font-pj">
                    Quality You Can Trust
                  </p>
                  <p className="mt-5 text-sm font-normal text-gray-900 font-pj">
                    Every vehicle in our inventory goes through a rigorous
                    inspection process to ensure it meets our high standards of
                    safety, performance, and comfort. We believe in
                    transparency, offering a detailed history report for every
                    car so you can buy with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex-1 w-full overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="py-8 px-9">
                <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">
                  3
                </div>
                <p className="mt-5 text-xl font-medium text-gray-900 font-pj">
                  Affordable Pricing & Flexible Financing
                </p>
                <p className="mt-5 text-sm font-normal text-gray-900 font-pj">
                  We offer competitive pricing to ensure you get the best deal
                  possible. With a variety of financing options available,
                  including no-down-payment plans and low-interest loans, we
                  make owning your dream car easier than ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
