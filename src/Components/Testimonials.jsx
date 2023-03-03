import React, {useRef, useState} from "react";
import {FaStar} from "react-icons/fa";
import {BsArrowRight,BsArrowLeft} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go"

import Carousel, { consts } from 'react-elastic-carousel';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";


const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? true : false
    return (
        <div></div>
    )
}

const Testimonials = () => {

    const carousel = useRef()
    const [currentActive,setCurrentActive] = useState(0)

    return(
        <>
            <Carousel renderArrow={myArrow} itemsToShow={1}
                      infiniteLoop={true}
                      renderPagination={({ pages, activePage, onClick }) => {
                          return <div></div>
                      }}
                      ref={carousel}
                      onChange={(currentItem, pageIndex) =>
                          setCurrentActive(pageIndex)
                      }
            >
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

                </div>
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

                </div>
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

                </div>

            </Carousel>
            <div className="flex justify-between mt-[40px] md:mt-[20px]">
                <div className="flex flex-row items-center gap-[2px]">
                    <GoPrimitiveDot onClick={() => carousel.current.goTo(0)} className={`w-[20px] cursor-pointer h-[20px] ${currentActive == 0 ? "text-blue-600" : "text-gray-400"}`} />
                    <GoPrimitiveDot onClick={() => carousel.current.goTo(1)} className={`w-[20px] cursor-pointer h-[20px] ${currentActive == 1 ? "text-blue-600" : "text-gray-400"}`} />
                    <GoPrimitiveDot onClick={() => carousel.current.goTo(2)} className={`w-[20px] cursor-pointer h-[20px] ${currentActive == 2 ? "text-blue-600" : "text-gray-400"}`} />
                </div>
                <div className="flex justify-center md:justify-end mt-auto gap-[10px]">
                    <BsArrowLeft onClick={() => carousel.current.slidePrev()} className="h-[40px] w-[40px] border border-[#2563EB] text-[#2563EB] rounded-[50%] p-[10px] cursor-pointer" />
                    <BsArrowRight onClick={() => carousel.current.slideNext()} className="h-[40px] w-[40px] bg-[#2563EB] text-white border rounded-[50%] p-[10px] cursor-pointer" />
                </div>
            </div>
        </>
    )
}

export default Testimonials