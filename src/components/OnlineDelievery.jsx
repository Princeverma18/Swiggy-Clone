import { useState, useEffect } from "react";
import Card from "./Card";


export default function OnlineDelievery() {

    const [data, setData] = useState([""]);
        
    
    
    const fetchTopRestaurant = async () =>{
        const response = await fetch("/data/restaurantChains.json");
        const apiData = await response.json();
        setData(apiData);
    };

        
    useEffect(
        () => {
            fetchTopRestaurant();
        }
    );


    
    return (
         <div className="max-w-[1200px] mx-auto ">
                    {/* Header Section*/}
                <div className="flex my-3 items-center justify-between">
                    <div className="text-[25px] font-bold">Restaurants with online food delievery in Greater Noida</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {
                        data.map(
                            (d, i) => {
                                return <Card {...d}/>
                            }
                        )
                    }
                </div>
        </div>
    )
}












// import { useEffect, useState } from "react";

// export default function OnlineDelivery() {
//     const [data, setData] = useState([]); // State to store fetched data

//     // Function to fetch restaurant data
//     const fetchTopRestaurant = async () => {
//         const response = await fetch("/data/restaurantChains.json");
//         const apiData = await response.json();
//         setData(apiData); // Update state with fetched data
//     };

//     // Fetch data on component mount
//     useEffect(() => {
//         fetchTopRestaurant();
//     }, []);

//     return (
//         <div className="max-w-[1200px] mx-auto mb-[100px]">
//             {/* Header Section */}
//             <div className="flex my-3 items-center justify-between">
//                 <div className="text-[25px] font-bold">Top restaurants chains in Greater Noida</div>
//             </div>

//             {/* Displaying Data */}
//             <div className="flex gap-4 flex-wrap">
//                 {data.map((item, index) => (
//                     <div
//                         key={index}
//                         className="p-4 border rounded-md shadow-md bg-white w-[250px]">
//                         <img
//                             src={item.image}
//                             alt={item.name}
//                             className="w-full h-[150px] object-cover rounded-md"
//                         />
//                         <div className="mt-2 text-lg font-semibold">{item.name}</div>
//                         <div className="text-gray-500">{item.description}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
