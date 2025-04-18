import react from "react";
import logo from '../assets/badlogo.png';


function Post({content}) {
    const text = "Welcome to our blog! In order to advance our mission, our blog will give insights about the newest events and releases in tech. If you would like to contribute to our blog, please contact us at thecodinghour1@gmail.com!"
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
      };
    const truncatedText = truncateText(text, 100);
    return (
        <>
            <div className="mt-[3rem] w-[50rem] h-[20rem] border border-purple-300 p-[2rem] flex flex-col justify-between"
            style={{boxShadow: "0 10px 30px rgb(44, 44, 44)",}}>
                <div>
                    <div className="flex flex-row">
                        <img className="h-[2rem] w-[2rem]" src={logo} />
                        <div className="flex flex-col">
                            <p className="mt-[auto] mb-[auto] ml-[0.3rem] text-[0.6rem]">TheCodingHour1</p>
                            <p className="mt-[auto] mb-[auto] ml-[0.3rem] text-[0.6rem]">Mar 12 • 1 min read</p>
                        </div>
                        
                    </div>
                    
                    <p className="mt-[0.5rem] text-3xl font-corben font-bold">Name for the Post</p>
                    <p className="mt-[1rem] ml-[auto] mr-[auto] w-[35rem]">{truncatedText}</p>
                </div>
                <div className="ml-[auto] w-[45rem] mr-[auto]">
                    <hr className=" border border-black" />
                    <p className="mt-[1rem] text-[0.7rem]">11 views 0 comments</p>
                </div>
                
            </div>
        </>

    );
}

export default Post