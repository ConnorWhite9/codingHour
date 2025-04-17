import react from "react";
import Student from './Student';
import Position from './Position';


function Enroll() {
    return (
        <>
            <div className="flex justify-around ml-[auto] mr-[auto] w-[80%] [@media(max-width:900px)]:flex-col">
                {/* Left Column */}
                <div className="flex flex-col justify-center items-center py-[5rem] rounded">
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