import react from "react";
import ProfileContainer from "./ProfileContainer";
import Pronita from "../assets/pronitakesavarapu.png";
import Ariana from "../assets/arianatiscanero.png";
import Anonymous from "../assets/anonymous.png";


function Ambassadors () {
    return (<>
        <div className="w-[100%] mt-[3rem]">
                <p className="text-[4rem] font-corben text-center ml-[auto] mr-[auto]">Ambassadors</p>
                <div className="w-[95rem] ml-[auto] mr-[auto] bg-indigo-300 p-[5rem]">
                    <div className="flex flex-row">
                        <ProfileContainer photo={Pronita} name="Pronita Kesavarapu" position="India"/>
                        <ProfileContainer photo={Ariana} name="Ariana Tiscanero" position="California, USA"/>
                        <ProfileContainer photo={Anonymous} name="Argam Taha" position="Pennsylvania, USA" /> 
                        <ProfileContainer photo={Anonymous} name="Chirag Menawa" position="North Carolina, USA"/>
                    </div>
                    <div className="flex flex-row mt-[8rem]">
                        <ProfileContainer photo={Anonymous} name="Goktug Soyturk" position="Mexico"/>
                        <ProfileContainer photo={Anonymous} name="Harini Chelladu" position="New Jersey, USA"/>
                        
                    </div>
                </div>
            </div>
    </>);
}


export default Ambassadors;