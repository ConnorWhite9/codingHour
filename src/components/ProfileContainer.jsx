import react from "react";


function ProfileContainer ({photo, name, position}) {
    return (
        <>
            <div className="flex flex-col relative ml-[2rem]">
                <div className=" w-[18rem] h-[18rem]" style={{backgroundImage: `url(${photo})`, backgroundSize: 'cover'}}>

                </div>
                <div className="bg-white h-[6rem] w-[15rem] absolute top-[16rem] left-[3rem] pl-[1rem] pt-[0.5rem]" >
                    <p className="font-bold text-[1.2rem]">{name}</p>
                    <p>{position}</p>
                </div>
            </div>

        </>
    );
}

export default ProfileContainer