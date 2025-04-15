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
        <form onSubmit={handleSubmit} className="flex flex-col  space-y-4 text-black font-corben">
                <div className="flex flex-row gap-[4rem]">
                    <div className="flex flex-col">
                        <label htmlFor="firstname" className="text-left mb-1 text-[1.3rem]">First Name:</label>
                        <input
                        className="relative p-2 border border border-black border-[2px] shadow-md  h-[2rem] w-[15rem]"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        style={{boxShadow: "0 10px 30px  rgb(255, 205, 249)",}}
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="lastname" className="text-left mb-1 text-[1.3rem]">Last Name:</label>
                        <input
                        className="relative p-2 border border border-black border-[2px] shadow-md h-[2rem] w-[15rem]"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                        style={{boxShadow: "0 10px 30px  rgb(255, 205, 249)",}}
                        />
                    </div>
                </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-left mb-1 text-[1.3rem] text-black">Email:</label>
                <input
                className="relative p-2 border border-black border-[2px] h-[2rem] w-[34rem]  "
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{boxShadow: "0 10px 30px  rgb(255, 205, 249)",}}
                />
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-left mb-1 text-[1.3rem] text-black">Message:</label>
                    <input
                    className="relative p-2 border border-black border-[2px] h-[7.5rem] w-[25rem]"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{boxShadow: "0 10px 30px  rgb(255, 205, 249)",}}
                    />
                </div>

                <button className="ml-[2.5rem] bg-[white] h-[3rem] px-[1rem] mt-[6rem] text-[1.3rem]" type="submit">Submit</button>
            </div>
        </form>
    );
}

export default EmailForm;