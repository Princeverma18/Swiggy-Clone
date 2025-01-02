// import React, { useEffect, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";

// export default function Category() {
//     const [categories, setCategories] = useState([]);

//     const fetchCategory = async () => {
//         const response = await fetch("/data/category.json");
//         const data = await response.json();
//         setCategories(data);
//     };

//     useEffect(() => {
//         fetchCategory();
//     }, []);

//     const arrow = [
//         {
//             icon: <FaArrowLeft />,
//             text: ""
//         },
//         {
//             icon: <FaArrowRight />,
//             text: ""
//         },
//     ];

//     return (
//         <div className="max-w-[1200px] mx-auto">
//             <div className="flex my-3 items-center justify-between">
//                 <div className="text-[25px] font-bold">What's on your mind</div>
//                 <div className="flex">
//                     {arrow.map((arrow, index) => (
//                         <div
//                             key={index}
//                             className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
//                         >
//                             {arrow.icon}
//                             {arrow.name}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="flex flex-wrap gap-4">
//                 {categories.map((cat, index) => (
//                     <div key={index} className="items-center justify-center text-center">
//                         <img
//                             src={"/images/" + cat.image}
//                             alt={cat.path}
//                             className="h-[100px] w-[100px] rounded-full object-cover flex justify-center items-center"
//                         />
//                         <div className="text-sm font-medium mt-2 capitalize">
//                             {cat.path.replace(" ", " ")}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }








import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Category() {
    const [categories, setCategories] = useState([]);
    const scrollRef = useRef(null);

    const fetchCategory = async () => {
        const response = await fetch("/data/category.json");
        const data = await response.json();
        setCategories(data);
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    };

    return (
        <div className="max-w-[1200px] mx-auto px-2">
            <div className="flex my-3 items-center justify-between">
                <div className="text-[25px] font-bold">What's on your mind</div>
                <div className="flex">
                    <div
                        onClick={scrollLeft}
                        className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:bg-gray-300"
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={scrollRight}
                        className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:bg-gray-300"
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-10 scrollbar-hide px-2"
            >
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 items-center justify-center text-center transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={"/images/" + cat.image}
                            alt={cat.path}
                            className="h-[150px] w-[150px] sm:h-[150px] sm:w-[150px] mt-10  object-cover mx-auto"
                        />
                        <div className="text-sm font-medium mt-2 mb-2 capitalize">
                        </div>
                    </div>
                ))}
            </div>
            <hr className="my-20 border-[1px]"/>
        </div>
    );
}
