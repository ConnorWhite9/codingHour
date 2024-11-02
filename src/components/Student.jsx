import react from "react";
import buttonbg from '../assets/buttonbg.png';
import flyer from '../assets/flyer.png';


function Student() {
    return (
        <>
            <p className="text-center ml-[auto] mr-[auto]">Become a Student! Please see the flyer below</p>
            <button className="mt-4 ml-[auto] mr-[auto] shadow-lg font-semibold rounded-full text-lg py-[2rem] w-[20rem] hover:bg-gray-200 text-nowrap"
                    style={{
                        backgroundImage:  `url(${buttonbg})`, // replace with your image URL
                        backgroundSize: 'cover', // ensures the image covers the button area
                    }}
                    >
                        Sign up to be a student!
            </button>
            <img className="mt-[3rem]" src={flyer}/>
        </>
    );
}

export default Student