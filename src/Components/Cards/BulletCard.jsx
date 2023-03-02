import React from "react";

const BulletCard = ({title,img}) => {
    return(
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-[102px] w-[80px] bg-[#F3F2FF] rounded-[30px]">
                <img src={img} />
            </div>
            <p className="text-[15px] font-[600] text-[#232859] w-[120px] text-center mt-[10px]">{title}</p>
        </div>
    )
}

export default BulletCard