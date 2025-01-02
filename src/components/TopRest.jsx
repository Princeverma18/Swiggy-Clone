import { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./Card";


export default function TopRest(){

    const [data, setData] = useState([""]);
    const scrollImg = useRef(null);
    



    const fetchTopRestaurant = async () =>{
        const response = await fetch("/data/restaurantChains.json");
        const apiData = await response.json();
        setData(apiData);
    };


    useEffect(
        () => {
            fetchTopRestaurant();
            console.log("Scroll Container:", scrollImg.current);
        }
    );


    const scrollLeft = () => {
        if(scrollImg.current){
            scrollImg.current.scrollBy({ left: -600, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if(scrollImg.current){
            scrollImg.current.scrollBy({ left: 600, behavior: "smooth" });
        }
    };


    return (
        <>
        <div className="max-w-[1200px] mx-auto px-2">
            {/* Header Section*/}
        <div className="flex my-3 items-center justify-between">
            <div className="text-[25px] font-bold">Top restaurants chains in Greater Noida</div>
                        {/* Scroll Buttons*/}
                <div className="flex">
                    <div
                        onClick={scrollLeft}
                        className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:bg-gray-300">
                        <FaArrowLeft />
                    </div> 
                         <div
                            onClick={scrollRight}
                            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:bg-gray-300">
                            <FaArrowRight />
                        </div>
                </div>
        </div>
        {/* Scrollable Content */}
        <div ref={scrollImg}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide max-w-[1200px] overflow-hidden">
            {
                data.map(
                    (d, i) => {
                        return <Card width="w-full md:w-[273px]" {...d} key={i}/>
                    }
                )
            }
            {
                data.map(
                    (d, i) => {1
                        return <Card width="w-full md:w-[273px]" {...d} key={i}/>
                    }
                )
            }

        </div>
        <hr className="my-4 border-[1px]"/>
        </div>
 
        </>
    )
}