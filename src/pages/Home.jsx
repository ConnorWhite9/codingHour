import react from "react";
import buttonbg from '../assets/buttonbg.png';
import frontpage from '../assets/frontpage.png';


function Home() {
    return (
        <>
            <div className="grid grid-cols-2 h-screen">
                {/* Left Column */}
                <div className="flex flex-col items-start  p-[5rem] shadow-md rounded">
                    <p className="text-[5rem] font-corben italic">The</p>
                    <p className="text-[5rem] font-corben italic">Coding</p>
                    <p className="text-[5rem] font-corben italic">Hour</p>
                    <p>Free Tech Education</p>
                    <button className="mt-4 border border-black shadow-lg font-bold rounded-full text-2xl py-[1rem] w-[30rem] hover:bg-gray-200 text-nowrap"
                    style={{
                        backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                        backgroundSize: 'cover', // ensures the image covers the button area
                    }}
                    >
                        Sign up to be a student!
                    </button>
                    <button className="mt-4 border font-bold border-black shadow-lg rounded-full text-2xl py-[1rem] w-[30rem] hover:bg-gray-200 text-nowrap"
                    style={{
                        backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                        backgroundSize: 'cover', // ensures the image covers the button area
                    }}
                    >
                       Apply to be a teacher today!
                    </button>
                </div>

                {/* Right Column */}
                <div className="flex justify-center rounded shadow-md p-[5rem]">
                    <div className="relative"> {/* Create a relative container */}
                        {/* Fixed Background Image */}
                        <img
                            className="fixed inset-0 w-full h-full object-cover"
                            style={{ zIndex: -1 }} // Ensure the image is behind other content
                            src={frontpage}
                            alt="Background" // Add an alt attribute for accessibility
                        />

                        {/* Content Container */}
                        <div className="flex justify-center items-center h-screen p-8 relative z-10">
                            <div className="rounded shadow-md p-8 bg-white bg-opacity-80"> {/* Optional background for content */}
                                <h1 className="text-2xl font-bold">Welcome to My Website</h1>
                                <p className="mt-4">This content scrolls over the static background image.</p>
                                {/* Add more content here */}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
        
    );
}

export default Home;