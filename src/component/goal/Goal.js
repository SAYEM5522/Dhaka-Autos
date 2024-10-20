import React from "react";

const Goal = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url('goal.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="grid grid-cols-1 py-32 lg:grid-cols-7"
      >
        <div className="hidden lg:col-span-3 lg:block">
          <div className="w-full h-full" />
        </div>

        <div className="flex items-center justify-center text-left lg:col-span-4">
          <div className="px-4 py-12 lg:px-16 lg:py-20 xl:py-0 xl:px-40">
            <h2 className="max-w-xl px-4 mx-auto text-3xl font-bold text-white sm:px-0 lg:mx-0 sm:text-3xl lg:text-4xl xl:text-5xl font-dm-sans">
              Benefits of Pre-Ordering
            </h2>
            <p className="max-w-md mt-4 text-2xl font-semibold text-gray-300 sm:mx-auto lg:mx-0">
              Pre-order your next car today and be the first to drive it!
            </p>

            <ul className="mt-3 list-disc list-inside">
              <li className="text-white">
                Access to exclusive models and hard-to-find vehicles
              </li>
              <li className="text-white">
                Personalized service to match your preferences
              </li>
              <li className="text-white">
                Priority delivery once your vehicle arrives
              </li>
            </ul>
            <div className="mt-8 sm:mt-10">
              <a
                href="/preorder"
                title=""
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                role="button"
              >
                Pre Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goal;
