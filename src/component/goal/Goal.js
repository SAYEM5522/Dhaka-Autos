import React from "react";

const Goal = () => {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-7">
          <div className="hidden lg:col-span-3 lg:block">
            <img
              className="object-cover w-full h-full"
              src="https://demoapus1.com/boxcar/wp-content/uploads/2023/09/bg-video.jpg"
              alt=""
            />
          </div>

          <div className="flex items-center justify-center text-center lg:text-left lg:col-span-4">
            <div className="px-4 py-12 lg:px-16 lg:py-20 xl:py-0 xl:px-40">
              <h2 className="max-w-lg px-4 mx-auto text-3xl font-bold text-white sm:px-0 lg:mx-0 sm:text-4xl lg:text-5xl xl:text-6xl">
                What Sets Us Apart
              </h2>
              <p className="max-w-md mt-4 text-base font-normal text-gray-300 sm:mx-auto lg:mx-0 sm:mt-8">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis arua.
              </p>

              <p className="mt-5 text-sm font-normal text-gray-300">
                We don’t spam, ever!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goal;
