// 'use client';
// import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import TwitterIcon from "../../../public/twitter-icon.svg";
// import Link from "next/link";
// import Image from "next/image";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const EmailSection = () => {
//     const [emailSubmitted, setEmailSubmitted] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = {
//             email: e.target.email.value,
//             subject: e.target.subject.value,
//             message: e.target.message.value,
//         };

//         console.log('Form data:', data); // Log the form data being sent

//         try {
//             const response = await fetch('/api/send', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });

//             console.log('Response status:', response.status); // Log the HTTP response status

//             const resData = await response.json();
//             console.log('Response data:', resData); // Log the response body

//             if (response.ok) {
//                 if (resData.status === 'success') {
//                     toast.success("Message sent successfully");
//                     setEmailSubmitted(true);
//                 } else {
//                     toast.error("Failed to send message");
//                 }
//             } else {
//                 toast.error("Failed to send message");
//             }
//         } catch (error) {
//             console.error('Error during fetch:', error); // Log any fetch errors
//             toast.error("An error occurred while sending the message");
//         }
//     };

//     return (
//         <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative" id="contact">
//             <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
//             <div className="z-10">
//                 <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
//                 <p className="text-[#ADB7BE] mb-4 max-w-md">
//                     I&apos;m currently looking for new opportunities, my inbox is always open.
//                     Whether you have a question or just want to say hi, I&apos;ll try my best
//                     to get back to you!
//                 </p>
//                 <div className="socials flex flex-row gap-2">
//                     <Link href="https://github.com/RithendSushanth">
//                         <Image src={GithubIcon} alt="Github" />
//                     </Link>
//                     <Link href="https://www.linkedin.com/in/rithend-sushanth-40430b248/">
//                         <Image src={LinkedinIcon} alt="Linkedin" />
//                     </Link>
//                     <Link href="https://twitter.com/rithend21">
//                         <Image src={TwitterIcon} alt="Twitter" />
//                     </Link>
//                 </div>
//             </div>
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-6">
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
//                             Your email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
//                             placeholder="name@gmail.com"
//                             required
//                         />
//                     </div>

//                     <div className="mb-6">
//                         <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
//                             Subject
//                         </label>
//                         <input
//                             type="text"
//                             id="subject"
//                             name="subject"
//                             className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
//                             placeholder="Just saying hi"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
//                             Message
//                         </label>
//                         <textarea
//                             name="message"
//                             id="message"
//                             className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
//                             placeholder="Let's talk about..."
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <button
//                             type="submit"
//                             className="bg-secondary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//                         >
//                             Send message
//                         </button>
//                     </div>
//                 </form>
//                 <ToastContainer />
//             </div>
//         </section>
//     );
// };

// export default EmailSection;


'use client';
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TwitterIcon from "../../../public/twitter-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        console.log('Form data:', data); // Log the form data being sent

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('Response status:', response.status); // Log the HTTP response status

            const resData = await response.json();
            console.log('Response data:', resData); // Log the response body

            if (response.ok) {
                if (resData.status === 'success') {
                    toast.success("Message sent successfully");
                    setEmailSubmitted(true);
                } else {
                    toast.error("Failed to send message");
                }
            } else {
                toast.error("Failed to send message");
            }
        } catch (error) {
            console.error('Error during fetch:', error); // Log any fetch errors
            toast.error("An error occurred while sending the message");
        } finally {
            setLoading(false); // Set loading to false after the request is complete
        }
    };

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative" id="contact">
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/RithendSushanth">
                        <Image src={GithubIcon} alt="Github" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/rithend-sushanth-40430b248/">
                        <Image src={LinkedinIcon} alt="Linkedin" />
                    </Link>
                    <Link href="https://twitter.com/rithend21">
                        <Image src={TwitterIcon} alt="Twitter" />
                    </Link>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="bg-secondary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? "Sending..." : "Send message"} {/* Conditional text */}
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </section>
    );
};

export default EmailSection;
