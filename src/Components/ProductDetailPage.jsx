import React, {useEffect, useState} from "react";

import ProductCard from "./Cards/ProductCard";
import PromotionBanner from "./Banners/PromotionBanner";
import BlogCard from "./Cards/BlogCard";
import Testimonials from "./Testimonials";
import BulletCard from "./Cards/BulletCard";
import AboutUs from "./Cards/AboutUs";


const ProductDetailPage = () => {

    const [count, setCount] = useState(1)

    const BlogCardsArr = [
        {
            img: "/assets/images/blog_1.png"
        },
        {
            img: "/assets/images/blog_2.png"
        },
        {
            img: "/assets/images/blog_3.png"
        },
    ]

    const BulletCardsArr = [
        {
            img: "/assets/images/Bullet_01.png",
            title: "Fast & Secure Delivery"
        },
        {
            img: "/assets/images/truck.png",
            title: "Free Shipping"
        },
        {
            img: "/assets/images/ecology.png",
            title: "Vegan Friendly Formula"
        },
        {
            img: "/assets/images/cruelty-free.png",
            title: "Cruelty Free"
        },
    ]

    const ProductCardsArr = [
        {
            title: "Antiaging  Shampoo",
            img: "/assets/images/product_02.png",
            price: 44.00
        },
        {
            title: "Cream To Foam Lotion",
            img: "/assets/images/product_03.png",
            price: 12.00
        },
        {
            title: "Face Moisturizer",
            img: "/assets/images/product_01.png",
            price: 36.00
        },
    ]

    const addItem = () => {
        setCount(count + 1)
    }
    const removeItem = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-[100%]">
                <div className="max-w-[814px] border w-[100%] h-[100%] p-[30px]">
                    <div className="flex flex-col md:flex-row gap-[20px]">
                        <div>
                            <img className="w-[392.5px] h-[384.95px]" src="/assets/images/main.png"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <p className="text-[12px] text-[#000000] font-[12px] ">CURLISTAR</p>
                                <p className="text-[20px] text-[#000000] font-bold ">CURLISTA Pro 5 IN 1</p>
                            </div>
                            <div className="flex gap-[10px]">
                                <p className="font-[12px] font-[400] line-through text-[#232859]">$199.99 USD</p>
                                <p className="font-[12px] font-[600] text-[#232859]">$99.99 USD</p>
                                <span
                                    className="flex items-center justify-center font-[12px] font-bold bg-[#DAD8FF] w-[45px] h-[24px] rounded-[10px]">-40%</span>
                            </div>
                            <div className="flex flex-col mt-[20px]">
                                <div
                                    className="flex items-center mb-0.5 gap-[10px] py-[8px] px-[10px] bg-[#EFEEFE] rounded-t-[8px]">
                                    <img className="w-[20px] h-[18px]" src="/assets/images/1.svg"/>
                                    <p className="text-[#232859] font-bold text-[11.32px]">ALL-IN-ONE DEVICE</p>
                                </div>
                                <div className="flex items-center mb-0.5 gap-[10px] py-[8px] px-[10px] bg-[#EFEEFE]">
                                    <img className="w-[20px] h-[18px]" src="/assets/images/3.svg"/>
                                    <p className="text-[#232859] font-bold text-[11.32px]">FOR ALL HAIR TYPES</p>
                                </div>
                                <div className="flex items-center mb-0.5 gap-[10px] py-[8px] px-[10px] bg-[#EFEEFE]">
                                    <img className="w-[20px] h-[18px]" src="/assets/images/2.svg"/>
                                    <p className="text-[#232859] font-bold text-[11.32px]">INTELLIGENT HEAT CONTROL</p>
                                </div>
                                <div className="flex items-center mb-0.5 gap-[10px] py-[8px] px-[10px] bg-[#EFEEFE]">
                                    <img className="w-[20px] h-[18px]" src="/assets/images/4.svg"/>
                                    <p className="text-[#232859] font-bold text-[11.32px]">EASY TO USE</p>
                                </div>
                                <div
                                    className="flex items-center mb-0.5 gap-[10px] py-[8px] px-[10px] bg-[#EFEEFE] rounded-b-[8px]">
                                    <img className="w-[20px] h-[18px]" src="/assets/images/5.svg"/>
                                    <p className="text-[#232859] font-bold text-[11.32px]">NO RISK FOR YOUR HAIR</p>
                                </div>
                            </div>
                            <div className="flex flex-col mt-[10px]">
                                <p className="text-[12.58px] font-bold text-[#232859]">Color</p>
                                <div className="flex gap-[5px] mt-[5px]">
                                    <span
                                        className="flex items-center justify-center text-[11.32px] w-[55px] h-[26px] bg-[#2563EB] font-bold rounded-lg text-white">Gold</span>
                                    <span
                                        className="flex items-center justify-center text-[11.32px] w-[55px] h-[26px] text-[#232859] font-[500]">Blue</span>
                                    <span
                                        className="flex items-center justify-center text-[11.32px] w-[55px] h-[26px] text-[#232859] font-[500]">Pink</span>
                                    <span
                                        className="flex items-center justify-center text-[11.32px] w-[55px] h-[26px] text-[#232859] font-[500]">Purple</span>
                                    <span
                                        className="flex items-center justify-center text-[11.32px] w-[55px] h-[26px] text-[#232859] font-[500]">Red</span>
                                </div>
                            </div>
                            <div className="flex flex-col mt-[10px]">
                                <p className="text-[12.58px] font-bold text-[#232859]">Quantity</p>
                                <div
                                    className="flex items-center border-solid justify-evenly w-[90px] h-[35px] rounded gap-[5px] mt-[5px] border border-[2px]">
                                    <span onClick={removeItem}
                                          className="text-[#232859] text-[16px] cursor-pointer">-</span>
                                    <span className="text-[#232859] text-[16px]">{count}</span>
                                    <span onClick={addItem}
                                          className="text-[#232859] text-[16px] cursor-pointer">+</span>
                                </div>
                            </div>
                            <div className="flex flex-col mt-[10px]">
                                <button
                                    className="w-[100%] h-[35px] rounded border-[1px] border-[#2563EB] text-[#2563EB] text-[10.06px] outline-0">Add
                                    to Cart
                                </button>
                            </div>
                            <div className="w-[100%] mt-[10px]">
                                <img className="w-[100%]" src="/assets/images/payment.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] bg-[#FBFBFE] mt-[31px]">
                        <div className="m-4">
                            <div className="flex justify-evenly flex-wrap m-[30px] ">
                                <img src="/assets/images/airbnb.png"/>
                                <img src="/assets/images/Hubspot.png"/>
                                <img src="/assets/images/Google.png"/>
                                <img src="/assets/images/Microsoft.png"/>
                                <img src="/assets/images/Walmart.png"/>
                                <img src="/assets/images/FedEx.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-[30px]">
                        <p className="font-bold text-[26px] text-[#232859]">Most loved by Customer</p>
                    </div>
                    <div className="flex w-[100%] justify-evenly flex-wrap mt-[20px]">
                        {ProductCardsArr.map(({title, price, img}) => {
                            return (
                                <ProductCard title={title} img={img} price={price}/>
                            )
                        })}
                    </div>
                    <div className="w-[100%] mt-[30px]">
                        <PromotionBanner/>
                    </div>
                    <div className="flex items-center justify-center mt-[30px]">
                        <p className="font-bold text-[26px] text-[#232859]">Blog</p>
                    </div>
                    <div className="flex w-[100%] justify-evenly flex-wrap mt-[20px]">
                        {BlogCardsArr.map(({img}) => {
                            return (
                                <BlogCard img={img}/>
                            )
                        })}
                    </div>
                    <div className="flex items-center justify-center mt-[30px]">
                        <p className="font-bold text-[26px] text-[#232859]">Testimonials</p>
                    </div>
                    <div className="flex flex-col md:flex-row w-[100%] gap-[20px] mt-[20px]">
                        <img className="w-auto lg:w-[180px] h-auto lg:h-[180px]" src="/assets/images/testimonials.png"/>
                        <div className="w-[100%]">
                            <Testimonials/>
                        </div>
                    </div>
                    <div className="flex w-[100%] justify-between flex-wrap mt-[20px]">
                        {BulletCardsArr.map(({img, title}) => {
                            return (
                                <BulletCard img={img} title={title}/>
                            )
                        })}
                    </div>
                    <div className="flex items-center justify-center mt-[30px]">
                        <p className="font-bold text-[26px] text-[#232859]">About us</p>
                    </div>
                    <div className="w-[100%] mt-[20px]">
                        <AboutUs left={true}/>
                    </div>
                    <div className="w-[100%]">
                        <AboutUs left={false}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailPage