import React from "react";

const AboutUs = ({left}) =>{
    return(
        <div className={`flex flex-col md:flex-row w-[100%] justify-between ${left? " md:flex-row":"md:flex-row-reverse"} `}>
            <div className="flex w-[100%] md:w-[50%] items-center justify-center">
                <div className="flex flex-col w-[300px]">
                    <p className="font-[600] text-[20px] text-[#232859]">Naturals organic skin creams for face & body</p>
                    <p className="font-[400] text-[11.32px] text-[#6B7280] mt-[20px]">our skin is the largest part of our body  needs constants
                        and miniaturization to achieve a healthy glow. first  skin
                        healthy - looking skin is maintaining an internal regimen
                        moisturized and blemish free.</p>
                    <button className="w-[110px] h-[40px] flex items-center rounded justify-center text-[10px] text-white bg-[#2563EB]  mt-[20px]">Buy Now</button>
                </div>
            </div>
            <div className="w-[100%] my-[15px] md:mt-0 md:w-[50%]">
                <img className="h-[350px] w-[380px]" src="/assets/images/about-us.png" />
            </div>
        </div>
    )
}

export default AboutUs