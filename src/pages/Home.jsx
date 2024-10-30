import react from "react";
import buttonbg from '../assets/buttonbg.png';
import frontpage from '../assets/frontpage.png';


function Home() {
    return (
        <>
            <div className="grid grid-cols-2 h-screen">
                {/* Left Column */}
                <div className="flex flex-col items-start  p-[5rem] shadow-md rounded">
                    <p className="text-2xl font-bold">The</p>
                    <p className="text-2xl font-bold">Coding</p>
                    <p className="text-2xl font-bold">Hour</p>
                    <button className="mt-4 border border-black shadow-lg font-bold rounded-full text-2xl py-[1rem] px-[6rem] hover:bg-gray-200"
                    style={{
                        backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                        backgroundSize: 'cover', // ensures the image covers the button area
                    }}
                    >
                        Sign up to be a student!
                    </button>
                    <button className="mt-4 border font-bold border-black shadow-lg rounded-full text-2xl py-[1rem] px-[6rem] hover:bg-gray-200"
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
                    <img className="w-[50rem] h-[40rem]" src={frontpage} />
                    
                </div>
            </div>
        </>
        
    );
}

export default Home;