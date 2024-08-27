"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Cpu, BookOpen, Award, GraduationCap } from "lucide-react"; // Import icons
import { DiNodejs, DiDocker, DiJava, DiMongodb, DiPostgresql, DiAws, DiReact, DiJsBadge, DiJenkins, DiAndroid, DiGithubFull } from "react-icons/di"; // Import Devicons
import { SiExpress, SiNextdotjs } from "react-icons/si";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none pl-2">
                <li className="flex items-center py-2">
                    <DiNodejs className="mr-2 text-green-500 text-4xl" />
                    <span className="text-xl">Node.js</span>
                </li>
                <li className="flex items-center py-2">
                    <SiExpress className="mr-2 text-gray-500 text-4xl" />
                    <span className="text-xl">Express</span>
                </li>
                <li className="flex items-center py-2">
                    <SiNextdotjs className="mr-2 text-white text-4xl" />
                    <span className="text-xl">NextJS</span>
                </li>
                <li className="flex items-center py-2">
                    <DiReact className="mr-2 text-blue-500 text-4xl" />
                    <span className="text-xl">ReactJS</span>
                </li>
                <li className="flex items-center py-2">
                    <DiPostgresql className="mr-2 text-blue-700 text-4xl" />
                    <span className="text-xl">PostgreSQL</span>
                </li>
                <li className="flex items-center py-2">
                    <DiDocker className="mr-2 text-blue-600 text-4xl" />
                    <span className="text-xl">Docker</span>
                </li>
                <li className="flex items-center py-2">
                    <DiJenkins className="mr-2 text-blue-500 text-4xl" />
                    <span className="text-xl">Jenkins</span>
                </li>
                <li className="flex items-center py-2">
                    <DiAws className="mr-2 text-orange-500 text-4xl" />
                    <span className="text-xl">AWS</span>
                </li>
                <li className="flex items-center py-2">
                    <DiJava className="mr-2 text-red-600 text-4xl" />
                    <span className="text-xl">Java</span>
                </li>
                <li className="flex items-center py-2">
                    <DiMongodb className="mr-2 text-green-500 text-4xl" />
                    <span className="text-xl">MongoDB</span>
                </li>
                <li className="flex items-center py-2">
                    <DiAndroid className="mr-2 text-green-500 text-4xl" />
                    <span className="text-xl">React Native</span>
                </li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li className="flex items-center">
                    <GraduationCap className="mr-2 text-yellow-700 text-4xl" />
                    <span className="text-lg">BSc Computer Science: SIES COLLEGE OF ARTS, SCIENCE AND COMMERCE SION (MUMBAI)</span>
                </li>
                <br />
                <li className="flex items-center">
                    <GraduationCap className="mr-2 text-yellow-700 text-4xl" />
                    <span className="text-lg">Masters of Computer Application (MCA): SIES COLLEGE OF MANAGEMENT STUDIES, Nerul (MUMBAI)</span>
                </li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-2">
                <li className="flex items-center py-2">
                    <Award className="mr-2 text-yellow-700 text-4xl" />
                    <span className="text-xl">AWS Cloud Practitioner</span>
                </li>
                <li className="flex items-center py-2">
                    <Award className="mr-2 text-yellow-700 text-4xl" />
                    <span className="text-xl">Google Professional Cloud Developer</span>
                </li>
                <li className="flex items-center py-2">
                    <Award className="mr-2 text-yellow-700 text-4xl" />
                    <span className="text-xl">Postman API Fundamentals Student Expert</span>
                </li>
                <li className="flex items-center py-2">
                    <Award className="mr-2 text-yellow-700 text-4xl" />
                    <span className="text-xl">Python</span>
                </li>
                <li className="flex items-center py-2">
                    <Award className="mr-2 text-yellow-700 text-4xl" />
                    <span className="text-xl">Java</span>
                </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/pc1.jpg" width={500} height={500} alt="pcimage" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-white text-base md:text-lg">
                    <span className="font-semibold">Hello!</span> I&apos;m a passionate <span className="font-semibold">Software Engineer</span>
                         specializing in the <span className="text-green-500">MERN stack </span>
                         and enthusiastic about web and mobile app development. With proficiency in <span className="text-blue-500">Java, JavaScript, and React.js</span>,
                         I craft dynamic and responsive user interfaces to elevate user experiences.
                         My journey in software development is driven by a commitment to transforming innovative ideas into 
                         <span className="font-semibold">practical solutions</span>.
                         I bring hands-on experience in building scalable and efficient applications with the MERN stack and extend my skills into the DevOps realm with 
                         <span className="text-blue-400"> Docker</span>,
                         <span className="text-red-500">Ansible</span>, 
                         <span className="text-gray-500">Jenkins</span>, and 
                         <span className="text-orange-400"> AWS cloud services</span>.
                         Eager to create impactful solutions and collaborate on exciting projects, 
                         I am continuously expanding my expertise and making meaningful contributions to the tech community. 
                         <span className="font-semibold"> <br />
                         Let&apos;s connect and explore the potential to build something extraordinary together!</span>
                    </p>
                    <div className="flex flex-row justify-start mt-8 gap-4">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            <Cpu className="mr-2" /> Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            <BookOpen className="mr-2" /> Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            <Award className="mr-2" /> Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;


// "use client";
// import React, { useState, useTransition } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";
// import { Cpu, BookOpen, Award, GraduationCap } from "lucide-react"; // Import icons
// import { DiNodejs, DiDocker, DiJava, DiMongodb, DiPostgresql, DiAws, DiReact, DiJenkins, DiAndroid } from "react-icons/di"; // Import Devicons
// import { SiExpress, SiNextdotjs } from "react-icons/si";
// import { motion } from "framer-motion";

// const TAB_DATA = [
//     {
//         title: "Skills",
//         id: "skills",
//         content: (
//             <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-none p-4 bg-gray-800 rounded-lg shadow-md">
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiNodejs className="mr-2 text-green-500 text-4xl" />
//                     <span className="text-lg font-medium">Node.js</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <SiExpress className="mr-2 text-gray-500 text-4xl" />
//                     <span className="text-lg font-medium">Express</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <SiNextdotjs className="mr-2 text-white text-4xl" />
//                     <span className="text-lg font-medium">NextJS</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiReact className="mr-2 text-blue-500 text-4xl" />
//                     <span className="text-lg font-medium">ReactJS</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiPostgresql className="mr-2 text-blue-700 text-4xl" />
//                     <span className="text-lg font-medium">PostgreSQL</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiDocker className="mr-2 text-blue-600 text-4xl" />
//                     <span className="text-lg font-medium">Docker</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiJenkins className="mr-2 text-blue-500 text-4xl" />
//                     <span className="text-lg font-medium">Jenkins</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiAws className="mr-2 text-orange-500 text-4xl" />
//                     <span className="text-lg font-medium">AWS</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiJava className="mr-2 text-red-600 text-4xl" />
//                     <span className="text-lg font-medium">Java</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiMongodb className="mr-2 text-green-500 text-4xl" />
//                     <span className="text-lg font-medium">MongoDB</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <DiAndroid className="mr-2 text-green-500 text-4xl" />
//                     <span className="text-lg font-medium">React Native</span>
//                 </li>
//             </ul>
//         ),
//     },
//     {
//         title: "Education",
//         id: "education",
//         content: (
//             <ul className="list-none p-4 bg-gray-800 rounded-lg shadow-md">
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md mb-2">
//                     <GraduationCap className="mr-2 text-yellow-700 text-4xl" />
//                     <span className="text-lg font-medium">BSc Computer Science: SIES COLLEGE OF ARTS, SCIENCE AND COMMERCE SION (MUMBAI)</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <GraduationCap className="mr-2 text-yellow-700 text-4xl" />
//                     <span className="text-lg font-medium">Masters of Computer Application (MCA): SIES COLLEGE OF MANAGEMENT STUDIES, Nerul (MUMBAI)</span>
//                 </li>
//             </ul>
//         ),
//     },
//     {
//         title: "Certifications",
//         id: "certifications",
//         content: (
//             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-4 bg-gray-800 rounded-lg shadow-md">
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <Award className="mr-2 text-yellow-700 text-4xl" />
//                     <span className="text-lg font-medium">AWS Cloud Practitioner</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <Award className="mr-2 text-yellow-700 text-4xl" />
//                     <span className="text-lg font-medium">Google Professional Cloud Developer</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <Award className="mr-2 text-yellow-700 text-4xl" />
//                     <span className="text-lg font-medium">Postman API Fundamentals Student Expert</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <Award className="mr-2 text-yellow-700 text-4xl" />
//                     <span className="text-lg font-medium">Python</span>
//                 </li>
//                 <li className="flex items-center p-2 bg-gray-900 rounded-md">
//                     <Award className="mr-2 text-yellow-700 text-4xl" />
//                     <span className="text-lg font-medium">Java</span>
//                 </li>
//             </ul>
//         ),
//     },
// ];

// const AboutSection = () => {
//     const [tab, setTab] = useState("skills");
//     const [isPending, startTransition] = useTransition();

//     const handleTabChange = (id) => {
//         startTransition(() => {
//             setTab(id);
//         });
//     };

//     return (
//         <section className="text-white py-12" id="about">
//             <div className="container mx-auto flex flex-col md:flex-row gap-12 items-start px-4 md:px-0">
//                 <motion.div
//                     className="md:w-1/2 flex justify-center"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <Image
//                         src="/images/pc2.jpg"
//                         width={500}
//                         height={500}
//                         alt="pcimage"
//                         className="rounded-lg shadow-lg"
//                     />
//                 </motion.div>
//                 <div className="md:w-1/2 flex flex-col">
//                     <motion.h2
//                         className="text-5xl font-extrabold mb-6"
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         About Me
//                     </motion.h2>
//                     <motion.p
//                         className="text-base md:text-lg leading-relaxed mb-8 bg-gray-800 p-6 rounded-lg shadow-lg"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <span className="font-semibold">Hello!</span> I&apos;m a passionate <span className="font-semibold">Software Engineer</span>
//                         specializing in the <span className="text-green-500">MERN stack</span>
//                         and enthusiastic about web and mobile app development. With proficiency in <span className="text-blue-500">Java, JavaScript, and React.js</span>,
//                         I craft dynamic and responsive user interfaces to elevate user experiences.
//                         My journey in software development is driven by a commitment to transforming innovative ideas into 
//                         <span className="font-semibold">practical solutions</span>.
//                         I bring hands-on experience in building scalable and efficient applications with the MERN stack and extend my skills into the DevOps realm with 
//                         <span className="text-blue-400">Docker</span>,
//                         <span className="text-red-500">Ansible</span>, 
//                         <span className="text-gray-500">Jenkins</span>, and 
//                         <span className="text-orange-400">AWS cloud services</span>.
//                         Eager to create impactful solutions and collaborate on exciting projects, 
//                         I am continuously expanding my expertise and making meaningful contributions to the tech community. 
//                         <span className="font-semibold"> <br />
//                         Let&apos;s connect and explore the potential to build something extraordinary together!</span>
//                     </motion.p>

//                     <motion.div
//                         className="flex space-x-4 mb-8"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <TabButton
//                             selectTab={() => handleTabChange("skills")}
//                             active={tab === "skills"}
//                         >
//                             <Cpu className="mr-2" /> Skills
//                         </TabButton>
//                         <TabButton
//                             selectTab={() => handleTabChange("education")}
//                             active={tab === "education"}
//                         >
//                             <BookOpen className="mr-2" /> Education
//                         </TabButton>
//                         <TabButton
//                             selectTab={() => handleTabChange("certifications")}
//                             active={tab === "certifications"}
//                         >
//                             <Award className="mr-2" /> Certifications
//                         </TabButton>
//                     </motion.div>

//                     <motion.div
//                         className="bg-gray-800 p-4 rounded-lg shadow-lg"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         {TAB_DATA.find(({ id }) => id === tab)?.content}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutSection;
