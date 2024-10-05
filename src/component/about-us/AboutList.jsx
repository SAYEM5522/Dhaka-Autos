import React from 'react'

const AboutList = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-16 gap-y-10">
                <div className="xl:pr-24">
                        <p className='font-bold text-5xl'>Our Vision</p>

                        

                        <blockquote className="mt-5 md:mt-7">
                            <p className="text-lg font-normal leading-relaxed text-gray-900 font-pj">To be the leading choice for customers seeking reconditioned cars by offering a transparent, trustworthy, and customer-focused buying experience, ensuring DHAKA AUTOS becomes synonymous with quality, reliability, and ongoing support.</p>
                        </blockquote>

                    </div>
                    <div className="-mx-4 sm:mx-0">
                        <img className="w-full max-w-md mx-auto" src="about1.png" alt="" />
                    </div>

                    
                </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-16 gap-y-10">
                    <div className="-mx-4 sm:mx-0">
                        <img className="w-full max-w-md mx-auto" src="about2.png" alt="" />
                    </div>

                    <div className="xl:pr-24">
                    <p className='font-bold text-5xl'>Our Vision</p>


                      

                        <blockquote className="mt-5 md:mt-7">
                            <p className="text-lg font-normal leading-relaxed text-gray-900 font-pj">At DHAKA AUTOS, we strive to create a car-buying experience built on transparency and trust. We are committed to offering competitive pricing, personalized pre-order services, and expert guidance for vehicle maintenance—helping our customers make informed decisions. Our mission is to ensure that when customers think of buying reconditioned cars, DHAKA AUTOS is always their first choice.</p>
                        </blockquote>

                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutList