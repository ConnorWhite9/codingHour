import react from "react";


function Post() {
    return (
        <>
            <div className="mt-[3rem] w-[50rem] h-[20rem] border border-purple-300 p-[2rem] flex flex-col justify-between">
                <div>
                    <p>This is User 1</p>
                    <p className="mt-[0.5rem] text-3xl">Name for the Post</p>
                    <p className="mt-[0.5rem] w-[30rem]">This is the post content example text here blah blah blah  jfkdl;sfkjla;fjlka;kljfads;jklfad;ladk;lfakl</p>
                </div>
                <div className="ml-[auto] w-[45rem] mr-[auto]">
                    <hr className=" border border-black" />
                    <p>11 views 0 comments</p>
                </div>
                
            </div>
        </>

    );
}

export default Post