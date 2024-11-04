import react from "react";
import ruffledpaper from "../assets/ruffledpaper.png";
import Posts from '../components/Posts';



function Blog() {
    return (
        <>
            <div style={{ backgroundImage:  `url(${ruffledpaper})`, backgroundSize: 'cover', // ensures the image covers the button area 
            }} className="h-[100vh] w-[100vw]">
                <Posts />
                
            </div>
        </>
    );
}

export default Blog