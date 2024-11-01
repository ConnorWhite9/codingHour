import react from "react";
import logo from '../assets/badlogo.png';

function Navbar() {
    return (
        <>
            <hr className="border-2 border-[#7d007b]" />
            <header className="h-[10vh] ">
                <div class="p-[1rem] flex flex-row items-center">
                    <img className="ml-[1rem]" src={logo}/>
                    <p className=" ml-[1rem] text-nowrap">The Coding Hour</p>
                    <button className="ml-[50rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border border-black shadow-lg bg-[#ffe8fa] hover:bg-purple-200 transition duration-300 ">Home</button>
                    <button className="ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border border-black shadow-lg bg-[#ffe8fa] hover:bg-purple-200 transition duration-300 ">About</button>
                    <button className="ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border border-black shadow-lg bg-[#ffe8fa] hover:bg-purple-200 transition duration-300 text-nowrap ">Get Involved</button>
                    <button className="ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border border-black shadow-lg bg-[#ffe8fa] hover:bg-purple-200 transition duration-300 ">Blog</button>
                
                </div>
        
            </header>
        </>
    );
}

export default Navbar;