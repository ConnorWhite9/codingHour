import react, {useState, useEffect} from "react";
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

    const [isHidden, setIsHidden] = useState(false);
    let lastScrollY = 0; // This variable will track the last scroll position

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // If scrolling down, hide the navbar
            setIsHidden(true);
        } else {
            // If scrolling up, show the navbar
            setIsHidden(false);
        }
        lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`h-[6rem] [@media(max-width:900px)]:h-[10rem] navbar fixed top-0 left-0 w-full transition-transform duration-[1000ms] bg-[#ffe8fa] ${isHidden ? 'transform -translate-y-full' : 'transform translate-y-0'}`} style={{zIndex: 1, boxShadow: "0 10px 20px rgb(246, 207, 255)",}}>
                <div className="p-[1rem] flex flex-row justify-between [@media(max-width:900px)]:flex-col">
                    <div className="flex flex-row [@media(max-width:900px)]:justify-center">
                        <img className="ml-[1rem] h-[4rem] w-[4rem] [@media(max-width:900px)]:hidden" src={logo} />
                        <p className=" ml-[1rem] mt-[auto] mb-[auto] text-nowrap font-corben font-bold [@media(max-width:900px)]:text-[2rem]">The Coding Hour</p>    
                    </div>
                    
                    <div className="flex gap-4 mt-[0.5rem] [@media(max-width:900px)]:justify-around ">
                        <Link to="/">
                            <button
                            className={`text-black font-bold font-corben py-[1rem] [@media(max-width:900px)]:px-[3rem] px-[4rem] rounded-full shadow-lg 
                                        ${location.pathname === '/' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                        hover:bg-purple-300 transition duration-300`}
                            >
                            Home
                            </button>
                        </Link>

                        <Link to="/about">
                            <button
                            className={`text-black font-bold font-corben py-[1rem] [@media(max-width:900px)]:px-[3rem] px-[4rem] rounded-full shadow-lg 
                                        ${location.pathname === '/about' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                        hover:bg-purple-300 transition duration-300`}
                            >
                            About
                            </button>
                        </Link>

                        <Link to="/getInvolved">
                            <button
                            className={`text-black font-bold font-corben py-[1rem] [@media(max-width:900px)]:px-[3rem] px-[4rem] rounded-full  shadow-lg 
                                        ${location.pathname === '/getInvolved' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                        hover:bg-purple-300 transition duration-300 whitespace-nowrap`}
                            >
                            Get Involved
                            </button>
                        </Link>

                        <Link to="/blog">
                            <button
                            className={`text-black font-bold font-corben py-[1rem] [@media(max-width:900px)]:px-[3rem] px-[4rem] rounded-full border shadow-lg 
                                        ${location.pathname === '/blog' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                        hover:bg-purple-300 transition duration-300`}
                            >
                            Blog
                            </button>
                        </Link>

                    </div>
                    
                </div>
        
            </header>
        </>
    );
}

export default Navbar;