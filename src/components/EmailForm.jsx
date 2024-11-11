import React, {useState} from 'react';
import emailjs from 'emailjs-com';



 



const EmailForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();


        const fullname = `${formData.firstname} ${formData.lastname}`;
        const emailData = {
            name: fullName,
            email: formData.email,
            message: formData.message,
        };

        /*emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, emailData, import.meta.env.VITE_PUBLIC_KEY)
          .then((result) => {
            console.log('Message sent successfully!');
            setFormData({
              firstname: '',
              lastname: '',
              email: '',
              message: '',
            });
          })
          .catch((error) => {
            console.log('An error occurred. Please try again.');
            console.error('Error sending email:', error);
          });*/
    
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col  space-y-4">
                <div className="flex flex-row gap-[4rem]">
                    <div className="flex flex-col">
                        <label htmlFor="firstname" className="mb-1">First Name:</label>
                        <div className="absolute left-[12.5rem] top-[12.5rem] w-[15rem] h-[2rem] bg-[#FFEBF4] "></div>
                        <input
                        className="relative p-2 border border border-black border-[2px] shadow-md  h-[2rem] w-[15rem]"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="lastname" className="mb-1">Last Name:</label>
                        <div className="absolute left-[31.5rem] top-[12.5rem] w-[15rem] h-[2rem] bg-[#FFEBF4] "></div>
                        <input
                        className="relative p-2 border border border-black border-[2px] shadow-md h-[2rem] w-[15rem]"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                        />
                    </div>
                </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1">Email:</label>
                <div className="absolute left-[12.5rem] top-[17rem] w-[34rem] h-[2rem] bg-[#FFEBF4] "></div>
                <input
                className="relative p-2 border border-black border-[2px] h-[2rem] w-[34rem]  "
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-1">Message:</label>
                    <div className="absolute left-[12.5rem] top-[22rem] w-[25rem] h-[7.5rem] bg-[#FFEBF4] "></div>
                    <input
                    className="relative p-2 border border-black border-[2px] h-[7.5rem] w-[25rem]"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>

                <button className="ml-[2.5rem] bg-[white] h-[3rem] px-[1rem] mt-[6rem]" type="submit">Submit</button>
            </div>
        </form>
    );
}

export default EmailForm;