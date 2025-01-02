import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiGps } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";

export default function Header(){ 

    const[toggle, setToggle] = useState(false);

    const showSIdeMenu = () => {
        setToggle(true);
    };

    const links = [
        {
            icon:<IoSearch />,
            name:"Search"
        },
        {
            icon:<RiDiscountPercentLine />,
            name:"Offers",
            sup:"New"
        },
        {
            icon:<IoMdHelpCircleOutline />,
            name:"Help"
        },
        {
            icon:<FaRegUser />,
            name:"Sign in"
        },
        {
            icon:<FiShoppingCart />,
            name:"Cart",
            sup:"0"
        },

    ]

    const hideSideMenu = () =>{
        setToggle(false);
    };
    return ( 
        <>

        {/* It is for Toggle/sidemenu button*/}
        <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden",
            zIndex:999999999
        }}>
            {/* It is for after Toggle - jo sidemenu niklega uske liye*/}
            <div onClick={(e) => {
                e.stopPropagation();
            }} className="w-[650px] bg-white h-full absolute duration-[400ms]" 
            style={{
                left: toggle ? "0%" : "-100%"
            }}>
                <HiXMark className="ml-[180px] text-2xl mt-[20px] cursor-pointer"/>

                <div>
                    <input type="text" placeholder="Search for area, street name..." className="border border-[1px] border-[#939393] w-[350px] h-[50px]  my-[35px] shadow pl-2 ml-[180px]" />
                </div>
                <div className="flex justify-center items-center hover:text-red-500 cursor-pointer border border-[1px] border-[#939393] w-[350px] h-[100px]  my-[20px] shadow pl-2 ml-[180px]">
                <CiGps className="inline text-2xl mr-[20px] mb-10 "/>
                <p className="mr-[100px] mb-10 text-hover:red">GPS Current Location</p>
                </div>

            </div>
        </div>
        {/* It is for Header*/}
        <header className="sticky top-0 bg-white z-[999999] p-[15px] shadow-xl shadow-xl text-[#686b78]">
            <div className="max-w-[1200px] mx-auto  flex items-center">
                <div className="w-[100px]">
                    {/* It is for Swiggy Image*/}
                    <img src="images/swiggy_logo.jpeg" className="w-12 h-12 text-[#FF5200] mr-5" alt="" />
                </div>
                <div className="">
                   <span className="font-bold border-b-[3px] border-[black]"> Greater Noida</span> Gautam Buddh Nager, India 
                   <RxCaretDown onClick={showSIdeMenu} fontSize={25} className="font-bold inline text-[#ff6600] cursor-pointer"/>
                </div>
                <nav className="hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]"> 
                    {/* Iski help se hmne sare icons ek jagah map kr diye hme br br nhi likhn pde*/}
                    {
                        links.map(
                            (link, index) => {
                                return (
                                <li key={index} className="flex hover:text-[#ff6600] items-center gap-1 cursor-pointer">
                                    {link.icon}
                                    {link.name}
                                    <sup className="text-[#ff9900]">{link.sup}</sup>
                               </li>
                                )
                            }
                        )
                    }
                </nav>
            </div> 
        </header>
        </>
    )
}