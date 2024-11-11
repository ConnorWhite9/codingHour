import react from "react";
import buttonbg from '../assets/buttonbg.png';
import frontpage from '../assets/frontpage.png';

function LandingFeature () {
    return (
        <>
            <div className="grid grid-cols-2 h-screen">
                {/* Left Column */}
                <div className="flex flex-col items-start ml-[auto] mr-[auto] p-[5rem] rounded">
                    <p className="text-[5rem] font-corben italic">The</p>
                    <p className="text-[5rem] font-corben italic">Coding</p>
                    <p className="text-[5rem] font-corben italic">Hour</p>
                    <p className="font-avenir-light py-[2rem]">Free Tech Education</p>
                    <button className="mt-4 shadow-lg font-semibold rounded-full text-2xl py-[2rem] w-[30rem] hover:bg-gray-200 text-nowrap"
                    style={{
                        backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                        backgroundSize: 'cover', // ensures the image covers the button area
                    }}
                    >
                        Sign up to be a student!
                    </button>
                    <button className="mt-4  font-semibold  shadow-lg rounded-full text-2xl py-[2rem] w-[30rem] hover:bg-gray-200 text-nowrap"
                    style={{
                        backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                        backgroundSize: 'cover', // ensures the image covers the button area
                    }}
                    >
                       Apply to be a teacher today!
                    </button>
                </div>


                
                {/* Right Column */}
                <div className="flex justify-center rounded p-[5rem] ">
                    <img src={frontpage} className="w-[100%] h-[60%] rounded-[0px]" />
                    
                </div>
            </div>
        </>
    );
}

export default LandingFeature