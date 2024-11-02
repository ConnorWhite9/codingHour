import react from "react";
import Student from './Student';
import Position from './Position';


function Enroll() {
    return (
        <>
            <div className="grid grid-cols-2 ml-[auto] mr-[auto] w-[80%]">
                {/* Left Column */}
                <div className="flex flex-col items-start  p-[5rem]  rounded ml-[auto] mr-[auto]">
                    <Student />
                </div>

                {/* Right Column */}
                <div className="flex justify-center rounded p-[5rem]">
                    <Position />
                    
                </div>
            </div>
        </>
    );
}

export default Enroll