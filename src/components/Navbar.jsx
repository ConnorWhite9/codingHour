import react from "react";
import logo from '../assets/badlogo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();

    // Define your routes
    const routes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
    ];


    return (
        <>
            <hr className="border-2 border-[#7d007b]" />
            <header className="h-[10vh] ">
                <div class="p-[1rem] flex flex-row items-center">
                    <img className="ml-[1rem]" src={logo}/>
                    <p className=" ml-[1rem] text-nowrap">The Coding Hour</p>
                        
                        
                    <Link to="/">
                        <button
                        className={`ml-[50rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border border-black shadow-lg 
                                    ${location.pathname === '/' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                    hover:bg-purple-300 transition duration-300`}
                        >
                        Home
                        </button>
                    </Link>

                    <Link to="/about">
                        <button
                        className={`ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border border-black shadow-lg 
                                    ${location.pathname === '/about' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                    hover:bg-purple-300 transition duration-300`}
                        >
                        About
                        </button>
                    </Link>

                    <Link to="/getInvolved">
                        <button
                        className={`ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border border-black shadow-lg 
                                    ${location.pathname === '/getInvolved' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                    hover:bg-purple-300 transition duration-300`}
                        >
                        Get Involved
                        </button>
                    </Link>

                    <Link to="/blog">
                        <button
                        className={`ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border border-black shadow-lg 
                                    ${location.pathname === '/blog' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                    hover:bg-purple-300 transition duration-300`}
                        >
                        Blog
                        </button>
                    </Link>
                </div>
        
            </header>
        </>
    );
}

export default Navbar;