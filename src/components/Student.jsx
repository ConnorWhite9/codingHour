import react from "react";
import buttonbg from '../assets/buttonbg.png';
import flyer from '../assets/flyer.png';


function Student() {
    return (
        <>
            <div className="bg-[#ffe8fa] h-[50rem] p-[2rem] w-[35rem] rounded-lg" style={{boxShadow: "0px 10px 20px rgb(0, 0, 0)",}}>
                <p className="text-center font-corben ml-[auto] mr-[auto] text-wrap text-[1.4rem] [@media(max-width:900px)]:text-[1.3rem]">Become a Student! Please see the flyer below</p>
                
                <img className="mt-[3rem] ml-[auto] mr-[auto] rounded-[0px] h-[30rem] w-[25rem]" src={flyer}/>
                <button className="mt-10 ml-[auto] mr-[auto] shadow-lg rounded-full text-md font-semibold font-corben py-[2rem] px-[1rem] w-[25rem] text-nowrap [@media(max-width:900px)]:text-[1.1rem]"
                        style={{
                            backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                            backgroundSize: 'cover', // ensures the image covers the button area
                            boxShadow: "0 10px 30px rgb(241, 178, 255)",
                        }}
                        >
                            Sign up to be a student!
                </button>
            </div>
        </>
    );
}

export default Student