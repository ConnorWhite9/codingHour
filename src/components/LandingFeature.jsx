import react from "react";
import buttonbg from '../assets/buttonbg.png';
import frontpage from '../assets/frontpage.png';

function LandingFeature () {
    return (
        <>
            <div className="flex flex-row p-[5rem] justify-around [@media(max-width:900px)]:flex-col [@media(max-width:900px)]:center " >
                {/* Left Column */}
                <div className="flex flex-col items-start p-[5rem] rounded">
                    <p className="text-[5rem] font-corben italic">The</p>
                    <p className="text-[5rem] font-corben italic">Coding</p>
                    <p className="text-[5rem] font-corben italic">Hour</p>
                    <p className="font-corben text-[1.5rem] py-[2rem]">Free Tech Education</p>
                    <button className="mt-4 font-corben italic font-[100] rounded-full text-2xl py-[2rem] w-[30rem] hover:bg-gray-200 text-nowrap"
                    style={{
                        backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                        backgroundSize: 'cover', // ensures the image covers the button area
                        boxShadow: "0 10px 30px rgb(240, 173, 255)",
                    }}
                    >
                        Sign up to be a student!
                    </button>
                    <a href="https://forms.gle/QLiAUdarp27rBLkP8">
                        <button className="mt-10 font-corben italic   rounded-full text-2xl py-[2rem] w-[30rem] hover:bg-gray-200 text-nowrap"
                        style={{
                            backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                            backgroundSize: 'cover', // ensures the image covers the button area
                            boxShadow: "0 10px 30px rgb(240, 173, 255)",
                        }}
                        >
                        Apply to be a teacher today!
                        </button>
                    </a>
                    
                </div>


                
                {/* Right Column */}
                <div className="flex justify-center rounded p-[5rem]" >
                    <img src={frontpage} className="w-[25rem] h-[45rem] rounded-[0px]" />
                </div>
            </div>
        </>
    );
}

export default LandingFeature