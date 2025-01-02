import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";




export default function Footer() {
    return (
        <div className="bg-[#e6e6e6] mt-[-12px]">
            <div className="max-w-[1200px] mx-auto px-2 ">
                    <div className="flex my-3 items-center justify-between">
                        <div className="justify-center items-center mt-10 flex text-[25px] font-bold">For better experience,download the Swiggy app now
                            <img className="ml-[50px] w-[200px] h-[64px] cursor-pointer" src="/images/play_store.png" alt="" />
                            <img className="ml-[10px] w-[200px] h-[64px] cursor-pointer" src="/images/app_store.png" alt="" />
                        </div>
                    </div>
                    <div className="flex mt-20">
                    <div>
                        <span>
                        <img className="w-12 h-12 cursor-pointer" src="/images/swiggy_logo.jpeg" alt="" />
                        <AiOutlineCopyrightCircle className="mr-2 inline font-sm"/>
                        2025 Swiggy Limited
                        </span>
                    </div>
                    <div className="ml-[200px]"> 
                        <h2 className="font-bold">Company</h2>
                        <ul className="cursor-pointer">
                        <li>About us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy one</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Swiggy Genie</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold ml-10">Contact us</h2>
                        <ul className="ml-10 mb-10 cursor-pointer">
                            <li>Help & Support</li>
                            <li>Partnew with us</li>
                            <li>Ride with us</li>
                            <h2 className="mt-20 font-bold cursor-text">Legal</h2>
                            <li>Term & Conditions</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                            <li>investore Relations</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold ml-10">Available in:</h2>
                        <ul className="ml-10 cursor-pointer">
                            <li>Bangalore</li>
                            <li>Delhi</li>
                            <li>Greater Noida</li>
                            <li>Gurgaon</li>
                            <li>Mumbai</li>
                            <li>Hyderabad</li>
                            <button className="border border-[2px] border-black rounded-[10px] px-5 py-1 mt-2 cursor-pointer">679+ cities</button>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold ml-10">Life at swiggy</h2>
                        <ul className="ml-10 cursor-pointer">
                            <li>Explore with Swiggy</li>
                            <li>Swiggy News</li>
                            <li>Snackables</li>
                        </ul>
                        <h2 className="font-bold ml-10 mt-20 mb-5">Social Links</h2>
                        <ul className="flex ml-10 justify-between font-xl cursor-pointer">
                            <li><FaLinkedin /></li>
                            <li><FaInstagram /></li>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaPinterest /></li>
                        </ul>
                    </div>
                    </div>
        </div>
        </div>
    )
}