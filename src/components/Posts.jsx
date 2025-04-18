import react from "react";
import Post from "./Post";

function Posts() {
    return (
        <>
            <div className="mt-[5rem] pt-[5rem] flex flex-col items-center">
                <p className="text-[2rem] font-corben">All Posts</p>
                <Post content="" />
            </div>
        </>
    );
}

export default Posts