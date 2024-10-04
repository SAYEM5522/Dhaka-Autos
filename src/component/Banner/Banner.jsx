import React from 'react'

const Banner = ({url,title}) => {
  return (
    <section>
         <div className="relative py-[120px] bg-white sm:py-[150px] md:py-[200px] lg:py-[300px]">
  <div className="absolute inset-0 z-0">
    <img
      className="object-cover object-right w-full  lg:object-center"
      src={url}
      alt=""
    />
  </div>

  <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>

  <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl z-20">
    <div className="max-w-lg mx-auto text-left xl:max-w-4xl">
      <p className="text-5xl font-nunito-sans mt-[-100px] font-bold text-white sm:text-4xl xl:text-7xl">
        {title}
      </p>
    </div>
  </div>
</div>
    </section>
  )
}

export default Banner