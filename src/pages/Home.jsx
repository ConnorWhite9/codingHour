import react from "react";
import buttonbg from '../assets/buttonbg.png';
import frontpage from '../assets/frontpage.png';
import LandingFeature from '../components/LandingFeature';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <LandingFeature />
            <hr className="w-[100vw] h-[1rem] bg-purple-400" />
            <Footer />
        </>
        
    );
}

export default Home;