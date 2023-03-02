import React from "react";

import {FaStar} from "react-icons/fa";

const ProductCard = ({title,img,price}) => {
    return(
        <>
            <div className="flex flex-col justify-center items-center w-[200px]">
                <div className="flex items-end justify-center w-[181px] h-[190px] bg-[#F3E9DF] rounded">
                    <img src={img} />
                </div>
                <p className="text-[15px] font-[400] mt-[5px]">{title}</p>
                <div className="flex gap-[5px] mt-[5px]">
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                    <FaStar className="w-[20px] h-[20px] text-[#F2C94C]" />
                </div>
                <p className="font-bold text-[20px]">${price}</p>
            </div>
        </>
    )
}

export default ProductCard