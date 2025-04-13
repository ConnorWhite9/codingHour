import react from "react";
import buttonbg from '../assets/buttonbg.png';
import flyer from '../assets/flyer.png';


function Student() {
    return (
        <>
            <p className="text-center ml-[auto] mr-[auto]">Become a Student! Please see the flyer below</p>
            <button className="mt-4 ml-[auto] mr-[auto] shadow-lg font-semibold rounded-full text-md py-[2rem] px-[1rem] w-[20rem] text-nowrap"
                    style={{
                        backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                        backgroundSize: 'cover', // ensures the image covers the button area
                        boxShadow: "0 10px 30px rgb(241, 178, 255)",
                    }}
                    >
                        Sign up to be a student!
            </button>
            <img className="mt-[3rem] ml-[auto] mr-[auto] rounded-[0px] h-[90%] w-[90%]" src={flyer}/>
        </>
    );
}

export default Student