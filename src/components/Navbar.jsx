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
            <header className={`h-[10vh] navbar fixed top-0 left-0 w-full transition-transform duration-[1000ms] bg-[#ffe8fa] ${isHidden ? 'transform -translate-y-full' : 'transform translate-y-0'}`} style={{zIndex: 1}}>
                <div class="p-[1rem] flex flex-row items-center">
                    <img className="ml-[1rem] h-[4rem] w-[4rem]" src={logo}/>
                    <p className=" ml-[1rem] text-nowrap font-corben">The Coding Hour</p>
                        
                        
                    <Link to="/">
                        <button
                        className={`ml-[50rem] text-black font-bold py-[1rem] px-[4rem] rounded-full shadow-lg 
                                    ${location.pathname === '/' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                    hover:bg-purple-300 transition duration-300`}
                        >
                        Home
                        </button>
                    </Link>

                    <Link to="/about">
                        <button
                        className={`ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full shadow-lg 
                                    ${location.pathname === '/about' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                    hover:bg-purple-300 transition duration-300`}
                        >
                        About
                        </button>
                    </Link>

                    <Link to="/getInvolved">
                        <button
                        className={`ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full  shadow-lg 
                                    ${location.pathname === '/getInvolved' ? 'bg-purple-300' : 'bg-[#ffe8fa]'} 
                                    hover:bg-purple-300 transition duration-300`}
                        >
                        Get Involved
                        </button>
                    </Link>

                    <Link to="/blog">
                        <button
                        className={`ml-[2rem] text-black font-bold py-[1rem] px-[4rem] rounded-full border shadow-lg 
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