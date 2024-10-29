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
      <img
        className="w-full h-auto object-cover lg:object-center"
        src="auction_sheet_banner.png"
        alt=""
      />

      <div
        className="py-[120px]"
        style={{
          backgroundImage: "url(auction_sheet_section1.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl z-20">
          <div className="max-w-xl mx-auto text-center xl:max-w-4xl flex flex-col justify-center items-center text-black">
            <p className="text-2xl md:text-3xl lg:text-4xl font-nunito-sans font-bold">
              Auction Sheet Verification
            </p>
            <p className="text-xl md:text-2xl font-nunito-sans mt-5">
              Get the original Auction Sheet Verified by Dashboard to buy the
              Japanese car with complete peace of mind!
            </p>
            <form
              className="mt-9 w-4/5 flex flex-col md:flex-row md:w-3/4 xl:w-3/5"
              onSubmit={handleSearch}
            >
              <input
                placeholder="Write Chassis Number"
                onChange={(e) => {
                  if (verifiedData) setVerifiedData(null);

                  setSearchValue(e.target.value);
                }}
                value={searchValue}
                name="search"
                type="text"
                className="px-3 py-4 text-xl flex-1 rounded-l-md w-full border border-red-200 transition duration-300 ease focus:outline-none focus:border-red-500 hover:border-red-700 shadow-sm focus:shadow"
              />
              <button
                className="text-white bg-red-500 hover:bg-red-700 p-3 rounded-r-md text-xl px-5 mt-5 md:mt-0"
                onClick={handleSearch}
                type="submit"
              >
                Submit Now
              </button>
            </form>
            {verifiedImage ? (
              <div className="flex flex-col md:flex-row border border-black rounded z-20 mt-10 w-fit mx-auto p-5 text-black gap-7 items-center">
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
