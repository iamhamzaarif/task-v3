import React from "react";

const PromotionBanner = () => {
    return(
        <>
            <div className="flex w-[100%] h-[195px] justify-between bg-[#D9E9DF] overflow-hidden">
                <div className="flex flex-col justify-evenly ml-[26px]">
                    <p className="text-[20px] font-[600] text-[#232859]">Discover our summer promotions</p>
                    <p className="text-[11px] font-[400] text-[#6B7280] w-[200px]">The free sample with any order when you spend $50.</p>
                    <button className="w-[110px] h-[30px] bg-white text-[#78909C] text-[11px] rounded">View All</button>
                </div>
                <div className="flex items-center justify-center w-[200px] pl-[26px] bg-[#CFE3D7] rounded-l-[180px]">
                    <img src="/assets/images/BannerImage.png" />
                </div>
            </div>
        </>
    )
}

export default PromotionBanner