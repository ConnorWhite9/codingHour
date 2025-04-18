import react from "react";
import ProfileContainer from './ProfileContainer';
import helenahu from '../assets/helenahu.png';
import emilychow from '../assets/emilychow.png';
import aanya from '../assets/aanyauprethi.png';
import hansika from '../assets/hansikakantheti.png';
import vishal from '../assets/vishalvarma.png';
import shaun from  '../assets/shauniyer.png';
import connor from "../assets/connorwhite.png";


function Leadership () {
    return (
        <>
            <div className="w-[95vw] mt-[10rem] ml-[auto] mr-[auto]">
                <p className="text-[4rem] font-corben text-center ml-[auto] mr-[auto]">Leadership</p>
                <div className="w-[100%] mt-4 p-[5rem] bg-[#ffe8fa] rounded-lg [@media(max-width:900px)]:w-[70rem]" 
                style={{boxShadow: "0 10px 30px rgb(0, 0, 0)"}}>
                    <div className="flex flex-row flex-wrap justify-center">
                        <ProfileContainer photo={emilychow} name="Emily Chow" position="Founder"/>
                        <ProfileContainer photo={aanya} name="Aanya Uprethi" position="Director of Public Relations"/>
                        <ProfileContainer photo={vishal} name="Vishal Varma" position="Strategy and Logistics"/>
                        <ProfileContainer photo={hansika} name="Hansika Kantheti" position="Webmaster" />
                        <ProfileContainer photo={connor} name="Connor White" position="Co-Webmaster"/>
                        <ProfileContainer photo={helenahu} name="Helena Hu" position="Co-director of Curriculum"/>
                        <ProfileContainer photo={shaun} name="Shaun Iyer" position="Co-director of Curriculum" />
                    </div>

                </div>
            </div>
        </>

    );
}


export default Leadership