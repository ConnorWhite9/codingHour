import react from "react";
import Post from "./Post";

function Posts() {
    return (
        <>
            <div className="px-[35rem] pt-[7rem]">
                <p className="text-xl">All Posts</p>
                <Post />
            </div>
        </>
    );
}

export default Posts