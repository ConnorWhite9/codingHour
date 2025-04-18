import react from "react";
import purpleback from '../assets/purpleback.png';

function AboutDescrip () {
    return (
        <>
            <div className="grid grid-cols-2 h-[30rem]">
                {/* Left Column */}
                <div className="flex flex-col items-start  p-[5rem] shadow-sm rounded bg-cover" style={{backgroundImage : `url(${purpleback})`}}>
                    <p className="ml-[auto] mt-[3rem] mr-[auto] font-corben font-[400] italic text-[4rem]">Our Story</p>
                </div>
                {/* Right Column */}
                <div className="flex flex-col justify-center rounded shadow-sm p-[5rem]">
                    <p className="font-bold font-corben text-[3rem]">Who are we?</p>
                    <p className="mt-[3rem] text-[1.5rem] font-corben">
                        This organization was founded by highschool
                        students with the mission of bringing resources, opportunities, and free technology education to students of underrepresented backgrounds throughout the world.
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutDescrip 