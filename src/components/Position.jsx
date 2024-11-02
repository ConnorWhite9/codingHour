import react from "react";
import buttonbg from '../assets/buttonbg.png';

function Position() {
    return (
        <>
            <div className="bg-[#F3D8CA] h-[50%] p-[2rem]">
                <p className="ml-[auto] mr-[auto] text-center w-[70%] ">Gain teaching expereince and do good with your coding skills by joining our team!</p>
                <div className="flex flex-col items-center">
                    <button className="mt-4 shadow-lg font-semibold rounded-full text-lg py-[2rem] w-[20rem] hover:bg-gray-200 text-nowrap"
                        style={{
                            backgroundImage:  `url(${buttonbg})`,
                            backgroundSize: 'cover',
                        }}
                    >
                       Apply to be a teacher today!
                    </button>
                    
                    <button className="mt-[2rem] shadow-lg font-semibold rounded-full text-lg py-[2rem] w-[20rem] hover:bg-gray-200 text-nowrap"
                        style={{
                            backgroundImage:  `url(${buttonbg})`,
                            backgroundSize: 'cover',
                        }}
                    >
                       Apply to be an ambassador today!
                    </button>
                </div>
            </div>
        </>



    );
}


export default Position