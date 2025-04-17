import react from "react";
import buttonbg from '../assets/buttonbg.png';

function Position() {
    return (
        <>
            <div className="bg-[#ffe8fa] h-[50rem] p-[2rem] w-[35rem] rounded-lg" style={{boxShadow: "0px 10px 20px rgb(0, 0, 0)",}}>
                <p className="ml-[auto] mr-[auto] font-corben text-[1.5rem] text-center w-[70%] ">Gain teaching expereince and do good with your coding skills by joining our team!</p>
                <div className="flex flex-col items-center">
                    <button className="mt-[7.5rem] shadow-lg font-semibold rounded-full text-[1rem] font-corben py-[2rem] px-[1rem] w-[25rem] hover:bg-gray-200 text-nowrap [@media(max-width:900px)]:text-[1.05rem]"
                        style={{
                            backgroundImage:  `url(${buttonbg})`,
                            backgroundSize: 'cover',
                            boxShadow: "0 10px 30px rgb(241, 178, 255)",
                        }}
                    >
                       Apply to be a teacher today!
                    </button>
                    
                    <button className="mt-[5rem] shadow-lg font-semibold rounded-full text-[1rem] font-corben py-[2rem] px-[1rem] w-[25rem] hover:bg-gray-200 text-nowrap [@media(max-width:900px)]:text-[1.05rem]"
                        style={{
                            backgroundImage:  `url(${buttonbg})`,
                            backgroundSize: 'cover',
                            boxShadow: "0 10px 30px rgb(241, 178, 255)",
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