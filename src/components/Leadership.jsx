import react from "react";
import ProfileContainer from './ProfileContainer';

function Leadership () {
    return (
        <>
            <div className="w-[100%] mt-[5rem]">
                <p className="text-[5rem] font-corben text-center ml-[auto] mr-[auto]">Leadership</p>
                <div className="w-[95rem] ml-[auto] mr-[auto] bg-indigo-300 p-[5rem]">
                    <div className="flex flex-row">
                        <ProfileContainer />
                    </div>
                </div>
            </div>
        </>

    );
}


export default Leadership