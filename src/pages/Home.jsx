import react from "react";
import buttonbg from '../assets/buttonbg.png';
import frontpage from '../assets/frontpage.png';
import LandingFeature from '../components/LandingFeature';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <LandingFeature />
            <hr className="w-[100vw] h-[1rem] bg-purple-400 mt-[1rem] " style={{boxShadow: "0 10px 30px rgb(240, 173, 255)"}}/>
            <Footer />
        </>
        
    );
}

export default Home;