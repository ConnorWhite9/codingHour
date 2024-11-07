import react from "react";
import Post from "./Post";

function Posts() {
    return (
        <>
            <div className="px-[30vw] pt-[5rem]">
                <p className="text-xl">All Posts</p>
                <Post content="" />
            </div>
        </>
    );
}

export default Posts