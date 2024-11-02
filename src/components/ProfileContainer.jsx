import react from "react";


function ProfileContainer ({photo, name, position}) {
    return (
        <>
            <div className="flex flex-col relative">
                <div className="bg-black w-[18rem] h-[18rem]">

                </div>
                <div className="bg-white h-[6rem] w-[15rem] absolute top-[16rem] left-[3rem] pl-[1rem] pt-[0.5rem]" >
                    <p className="font-bold text-[1.2rem]">Member Name</p>
                    <p>Position</p>
                </div>
            </div>

        </>
    );
}

export default ProfileContainer