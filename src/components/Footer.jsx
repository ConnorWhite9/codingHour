import react from 'react';
import EmailForm from './EmailForm';


function Footer() {

    return (
        <>
            <div className="grid grid-cols-2 " >
                {/* Left Column */}
                <div className="flex flex-col items-start p-[5rem] rounded">
                    <div className="pl-[5rem]">
                        <p className="text-center text-[3rem] font-semibold">Contact Us</p>
                        <p className="text-[1rem] w-[20rem]">We appreciate you taking the time to inquire about our organization! We will get back to you in 2-3 business days.</p>
                    </div>
                </div>


                
                {/* Right Column */}
                <div className="flex justify-center rounded p-[5rem] relative">
                   <div className="bg-purple-200 p-[5rem]">
                        <EmailForm />
                   </div>
                    
                </div>
            </div>
        </>
    );
}

export default Footer;