import React, { useState } from "react";

const SearchVerification = () => {
  const [searchValue, setSearchValue] = useState("");
  const [verifiedData, setVerifiedData] = useState(null);
  const [verifiedImage, setVerifiedImage] = useState("");

  const handleSearch = async (e) => {
    e?.preventDefault();

    if (!searchValue) return;

    try {
      const response = await fetch(
        "https://backoffice-dhakaautos.vercel.app/api/verify-auction",
        {
          method: "POST",
          body: JSON.stringify({
            chassisId: searchValue,
          }),
        }
      );
      const { data } = await response.json();
      const { imageUrl, ...car } = data;

      setVerifiedImage(imageUrl);
      setVerifiedData(car);
    } catch (error) {}
  };

  return (
    <section>
      <div
        className="relative py-[120px] bg-white sm:py-[150px] md:py-[200px] lg:py-[300px]"
        style={{
          backgroundImage: "url(banner1.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl z-20">
          <div className="max-w-xl mx-auto text-center xl:max-w-4xl flex flex-col justify-center items-center">
            <p className="text-2xl md:text-3xl font-nunito-sans font-bold text-white">
              Auction Sheet Verification Of Japanese Cars in Bangladesh
            </p>
            <form
              className="mt-5 w-4/5 flex flex-col md:flex-row md:w-3/4 xl:w-3/5 gap-4"
              onSubmit={handleSearch}
            >
              <input
                placeholder="Enter Chassis No"
                onChange={(e) => {
                  if (verifiedData) setVerifiedData(null);

                  setSearchValue(e.target.value);
                }}
                value={searchValue}
                name="search"
                type="text"
                className="px-3 py-4 text-xl rounded-md w-full border border-red-200 transition duration-300 ease focus:outline-none focus:border-red-500 hover:border-red-700 shadow-sm focus:shadow"
              />
              <button
                className="text-white bg-red-500 hover:bg-red-700 p-3 rounded-md text-xl px-5"
                onClick={handleSearch}
                type="submit"
              >
                Search
              </button>
            </form>
            {verifiedImage ? (
              <div className="flex flex-col md:flex-row border border-white rounded z-20 mt-10 w-fit mx-auto p-5 text-white gap-7 items-center">
                <div>
                  <img src={verifiedImage} className="h-auto" />
                </div>
                <div className="text-xl text-left">
                  {verifiedData &&
                    Object.keys(verifiedData)?.map((key) => (
                      <p className="mt-1">
                        <span className="font-bold">{key.toUpperCase()}: </span>
                        {verifiedData[key].toUpperCase()}
                      </p>
                    ))}
                </div>
              </div>
            ) : verifiedData && searchValue ? (
              <div className="text-xl bg-white p-3 px-6 rounded-md mt-14">
                <p>
                  No record found for Chassis Number:{" "}
                  <span className="font-bold text-red-600">{searchValue}</span>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchVerification;
