import React from "react";

import {BsDot} from "react-icons/bs"

const BlogCard = ({img}) => {
    return(
        <div className="flex flex-col items-center justify-center w-[200px]">
            <img className="rounded-[8px] w-[250px]" src={img} />
            <div className="flex items-center justify-center gap-[5px] mt-[10px]">
                <span className="text-[10px] font-[400] text-[#6B7280]">Serum</span>
                <BsDot className="text-[10px] font-[400] h-[10px] w-[10px] text-[#6B7280]" />
                <span className="text-[10px] font-[400] text-[#6B7280]">May 2, 2021</span>
            </div>
            <p className="text-[12.58px] text-[#232859] font-[600] text-center w-[200px] mt-[10px]">An instant answer to all burning & beauty issue</p>
        </div>
    )
}

export default BlogCard