import react from "react";
import ProfileContainer from "./ProfileContainer";
import Pronita from "../assets/pronitakesavarapu.png";
import Ariana from "../assets/arianatiscanero.png";
import Anonymous from "../assets/anonymous.png";


function Ambassadors () {
    return (<>
        <div className="w-[95vw] mt-[10rem] ml-[auto] mr-[auto]">
                <p className="text-[4rem] font-corben text-center ml-[auto] mr-[auto]">Ambassadors</p>
                <div className=" ml-[auto] mr-[auto] mt-4 bg-[#ffe8fa] p-[5rem] [@media(max-width:900px)]:w-[70rem]"
                style={{boxShadow: "0 10px 30px rgb(0, 0, 0)"}}>
                    <div className="flex flex-row flex-wrap justify-center">
                        <ProfileContainer photo={Pronita} name="Pronita Kesavarapu" position="India"/>
                        <ProfileContainer photo={Ariana} name="Ariana Tiscanero" position="California, USA"/>
                        <ProfileContainer photo={Anonymous} name="Argam Taha" position="Pennsylvania, USA" /> 
                        <ProfileContainer photo={Anonymous} name="Chirag Menawa" position="North Carolina, USA"/>
                        <ProfileContainer photo={Anonymous} name="Goktug Soyturk" position="Mexico"/>
                        <ProfileContainer photo={Anonymous} name="Harini Chelladu" position="New Jersey, USA"/>
                    </div>

                </div>
            </div>
    </>);
}


export default Ambassadors;