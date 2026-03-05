import { section } from 'framer-motion/client'
import newImg from "../../assets/Image/Option 4 1.png";
import arrow from "../../assets/Image/arrow.svg";
import newImg2 from "../../assets/Image/Option 4 2.png";
import newImg3 from "../../assets/Image/Hero 1 (1).png";
import newImg4 from "../../assets/Image/Hero 1.png";
import newImg5 from "../../assets/Image/Hero 1(2).png";

import React from 'react'

const NewSmallComponent = () => {
    return (
        <section className="w-full py-5">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Large Image Card */}
                    <div className="col-span-2 rounded-[20px] overflow-hidden">
                        <img
                            src={newImg}
                            alt="newImg"
                            className="w-full h-full object-cover aspect-9/5"
                        />
                    </div>

                    {/* Orange Card */}
                    <div className=" text-white rounded-[20px]  bg-[rgba(250,136,38,0.05)]  p-[20px] flex flex-col items-start gap-8 self-stretch transition-all duration-300 ease-in-out border border-transparent hover:border hover:border-[#FA8826] hover:shadow-[2px_2px_25px_10px_rgba(255,161,52,0.25)] cursor-pointer">

                        <h3 className="text-[#E9E9E9] text-[24px] font-inter font-normal">
                            Works everywhere your customers find you phone, tablet, or desktop.
                        </h3>

                        <button className="mt-auto w-full text-[#FAFAFA] text-[16px] font-normal flex items-center justify-between">
                            <span>Build Your Website</span>
                            <img src={arrow} alt="arrow icon" className="w-5 h-5" />
                        </button>

                    </div>


                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-5'>
                        <div className="text-white rounded-[20px]  bg-[rgba(250,136,38,0.05)]  p-[20px] flex flex-col items-start gap-8 self-stretch transition-all duration-300 ease-in-out border border-transparent hover:border hover:border-[#FA8826] hover:shadow-[2px_2px_25px_10px_rgba(255,161,52,0.25)] cursor-pointer">


                            <h3 className="text-[#E9E9E9] text-[24px] font-inter font-normal">
                                Clear, professional design that builds trust with customers.
                            </h3>

                        </div>

                        <div className="col-span-2 rounded-[20px] overflow-hidden">
                            <img
                                src={newImg4}
                                alt="newImg"
                                className="w-full h-full object-cover aspect-9/5"
                            />
                        </div>
                    </div>

                    <div className=" rounded-[20px] overflow-hidden">
                        <img
                            src={newImg3}
                            alt="newImg"
                            className="w-full h-full object-cover aspect-9/5"
                        />
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className="rounded-[18px] overflow-hidden">
                            <img
                                src={newImg5}
                                alt="newImg"
                                className="w-full h-full object-cover aspect-9/5"
                            />
                        </div>
                        <div className="text-white rounded-[20px]  bg-[rgba(250,136,38,0.05)]  p-[20px] flex flex-col items-start gap-8 self-stretch transition-all duration-300 ease-in-out border border-transparent hover:border hover:border-[#FA8826] hover:shadow-[2px_2px_25px_10px_rgba(255,161,52,0.25)] cursor-pointer">


                            <h3 className="text-[#E9E9E9] text-[24px] font-inter font-normal">
                                Built to support your business goals, not just look good.
                            </h3>

                        </div>


                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Orange Card */}
                    <div className="text-white rounded-[20px]  bg-[rgba(250,136,38,0.05)]  p-[20px] flex flex-col items-start gap-8 self-stretch transition-all duration-300 ease-in-out border border-transparent hover:border hover:border-[#FA8826] hover:shadow-[2px_2px_25px_10px_rgba(255,161,52,0.25)] cursor-pointer">


                        <h3 className="text-[#E9E9E9] text-[24px] font-inter font-normal">
                            Works everywhere your customers find you phone, tablet, or desktop.
                        </h3>

                        <button className="mt-auto w-full text-[#FAFAFA] text-[16px] font-normal flex items-center justify-between">
                            <span>Build Your Website</span>
                            <img src={arrow} alt="arrow icon" className="w-5 h-5" />
                        </button>

                    </div>


                    {/* Large Image Card */}
                    <div className="col-span-2 rounded-[20px] overflow-hidden">
                        <img
                            src={newImg2}
                            alt="newImg"
                            className="w-full h-full object-cover aspect-9/5"
                        />
                    </div>



                </div>

            </div>
        </section>
    )
}

export default NewSmallComponent
