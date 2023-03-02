import React from "react";
import {FaStar} from "react-icons/fa";
import {BsArrowRight,BsArrowLeft} from "react-icons/bs";

const Testimonials = () => {
    return(
        <div className="w-[100%] h-[100%]">
            <p className="text-[20px] font-[600] text-[#232859]">Best organic products that  your could find!</p>
            <p className="text-[11.32px] font-[400] text-[#6B7280] mt-[10px]">A daily skincare regimen one of the easiest ways to ensure long-term skin health and a glowing complexion. Natural and organic skincare products, in particular, combine essential vitamins, botanicals, and minerals that heal and restore skinwithout harming our bodies or the earth.</p>
            <div className="flex items-center mt-[15px]">
                <img className="h-[30px] w-[30px]" src="/assets/images/profile.png"  />
                <p className="text-[20px] font-[600] text-[#232859] ml-[10px]">Denial</p>
                <div className="flex gap-[5px] ml-[15px]">
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                </div>
            </div>
            <div className="flex justify-center mt-[40px] md:mt-[0px] md:justify-end mt-auto gap-[10px]">
                <BsArrowLeft className="h-[40px] w-[40px] border border-[#2563EB] text-[#2563EB] rounded-[50%] p-[10px] cursor-pointer" />
                <BsArrowRight className="h-[40px] w-[40px] bg-[#2563EB] text-white border rounded-[50%] p-[10px] cursor-pointer" />
            </div>
        </div>
    )
}

export default Testimonials