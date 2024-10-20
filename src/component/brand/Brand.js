import React from "react";

const brands = [
  { name: "Toyota", image: "toyota.png" },
  { name: "Toyota", image: "honda.png" },
  { name: "Toyota", image: "mitsubishi.png" },
  { name: "Toyota", image: "nissan.png" },
  { name: "Toyota", image: "lexus.png" },
  { name: "Toyota", image: "subaru.png" },
  { name: "Toyota", image: "audi.png" },
  { name: "Toyota", image: "benze.png" },
  { name: "Toyota", image: "bmw.png" },
  { name: "Toyota", image: "porsche.png" },
  { name: "Toyota", image: "land.png" },
  { name: "Toyota", image: "mazda.png" },
  { name: "Toyota", image: "ford.png" },
  { name: "Toyota", image: "volk.png" },
  { name: "Toyota", image: "jeep.png" },
];

const Brand = () => {
  return (
    <div className="">
      <div className="mx-auto">
        <div className="max-w-xl mt-8 mx-auto text-center lg:max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-5xl font-pj">
            Buy/Pre - Order Your Vehicle Now
          </h2>
          <p className="text-2xl lg:text-3xl mt-2">Choose Your Brand</p>
        </div>
      </div>

      <div className="mt-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-center lg:grid-cols-5 lg:gap-6 xl:gap-4">
          {brands.map((brand) => (
            <div
              key={brand.image}
              className="h-[200px] w-auto bg-white  shadow-lg  items-center justify-center flex"
            >
              <div className="inline-flex items-center justify-center w-[80%] h-[80%] rounded-full">
                <img src={brand.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
