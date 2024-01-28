'use client';
import React,{useState} from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TwitterIcon from "../../../public/twitter-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value,
    //     }
    //     const JSONdata = JSON.stringify(data);
    //     const endpoint = '/api/send';
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSONdata,
    //     }
    
    //     try {
    //         const response = await fetch(endpoint, options);
    
    //         if (response.ok) {
    //             const resData = await response.json();
    //             console.log(resData);
    
    //             if (resData.status === 'success') {
    //                 alert("Message sent successfully");
    //             } else {
    //                 alert("Message sending failed");
    //             }
    //         } else {
    //             alert("Failed to send message. Please try again.");
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         alert("An error occurred. Please try again later.");
    //     }
    // }
    // components/EmailSection.jsx

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
    };

    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const resData = await response.json();
            console.log(resData);

            if (resData.status === 'success') {
                alert("Message sent successfully");
                setEmailSubmitted(true);
            } else {
                alert("Failed to send message");
            }
        } else {
            console.error('Failed to fetch:', response.status, response.statusText);
            alert("Failed to send message");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred while sending the message");
    }
};

    
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative" id="contact">
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/RithendSushanth">
                        <Image src={GithubIcon} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/rithend-sushanth-40430b248/">
                        <Image src={LinkedinIcon} />
                    </Link>
                    <Link href="https://twitter.com/rithend21">
                        <Image src={TwitterIcon} />
                    </Link>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="mb-6">
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="subject"
                            class="block mb-2 text-sm font-medium text-white"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="subject"
                            class="block mb-2 text-sm font-medium text-white"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <div class="mb-6">
                        <button
                            type="submit"
                            class="bg-secondary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            {" "}
                            Send message{" "}
                        </button>
                        {
                            emailSubmitted && <p className="text-green-500">Email sent successfully</p>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;