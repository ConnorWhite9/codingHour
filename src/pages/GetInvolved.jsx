import react from "react";
import Enroll from "../components/Enroll";

function GetInvolved() {
    return (
        <>
            <p className="font-corben text-center text-[3rem] mt-[12rem]">The Coding Hour Program</p>
            <Enroll />
            <p className="text-center font-corben py-[5rem] [@media(max-width:900px)]:text-[1.2rem]">Please contact thecodinghour1@gmail.com for any questions/inquries</p>
        </>
    );
}

export default GetInvolved