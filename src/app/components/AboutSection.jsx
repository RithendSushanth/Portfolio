"use client";

// import React, { useState } from "react"
// import Image from "next/image"
// import { Cpu, BookOpen, Award, GraduationCap } from "lucide-react"
// import { DiNodejs, DiDocker, DiJava, DiMongodb, DiPostgresql, DiAws, DiReact, DiJenkins, DiAndroid } from "react-icons/di"
// import { SiExpress, SiNextdotjs } from "react-icons/si"

// const SkillItem = ({ Icon, label, color }) => (
//     <li className="flex items-center py-2">
//         <Icon className={`mr-2 text-4xl ${color}`} />
//         <span className="text-xl">{label}</span>
//     </li>
// )

// const CertificationItem = ({ title }) => (
//     <li className="flex items-center py-2">
//         <Award className="mr-2 text-yellow-500 text-2xl" />
//         <span className="text-xl">{title}</span>
//     </li>
// )

// const EducationItem = ({ degree, institution }) => (
//     <li className="mb-4">
//         <div className="flex items-center">
//             <GraduationCap className="mr-2 text-yellow-500 text-2xl flex-shrink-0" />
//             <div>
//                 <h4 className="text-xl font-medium">{degree}</h4>
//                 <p className="text-lg text-gray-300">{institution}</p>
//             </div>
//         </div>
//     </li>
// )

// const TAB_DATA = [
//     {
//         title: "Skills",
//         id: "skills",
//         icon: Cpu,
//         content: (
//             <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none pl-0">
//                 <SkillItem Icon={DiNodejs} label="Node.js" color="text-green-500" />
//                 <SkillItem Icon={SiExpress} label="Express" color="text-gray-500" />
//                 <SkillItem Icon={SiNextdotjs} label="Next.js" color="text-white" />
//                 <SkillItem Icon={DiReact} label="React" color="text-blue-500" />
//                 <SkillItem Icon={DiPostgresql} label="PostgreSQL" color="text-blue-700" />
//                 <SkillItem Icon={DiDocker} label="Docker" color="text-blue-600" />
//                 <SkillItem Icon={DiJenkins} label="Jenkins" color="text-blue-500" />
//                 <SkillItem Icon={DiAws} label="AWS" color="text-orange-500" />
//                 <SkillItem Icon={DiJava} label="Java" color="text-red-600" />
//                 <SkillItem Icon={DiMongodb} label="MongoDB" color="text-green-500" />
//                 <SkillItem Icon={DiAndroid} label="React Native" color="text-green-500" />
//             </ul>
//         ),
//     },
//     {
//         title: "Education",
//         id: "education",
//         icon: BookOpen,
//         content: (
//             <ul className="list-none pl-0">
//                 <EducationItem
//                     degree="Masters of Computer Application (MCA)"
//                     institution="SIES COLLEGE OF MANAGEMENT STUDIES, Nerul (MUMBAI)"
//                 />
//                 <EducationItem
//                     degree="BSc Computer Science"
//                     institution="SIES COLLEGE OF ARTS, SCIENCE AND COMMERCE SION (MUMBAI)"
//                 />
//             </ul>
//         ),
//     },
//     {
//         title: "Certifications",
//         id: "certifications",
//         icon: Award,
//         content: (
//             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
//                 <CertificationItem title="AWS Cloud Practitioner" />
//                 <CertificationItem title="Google Professional Cloud Developer" />
//                 <CertificationItem title="Postman API Fundamentals Student Expert" />
//                 <CertificationItem title="Python" />
//                 <CertificationItem title="Java" />
//             </ul>
//         ),
//     },
// ]

// const TabButton = ({ active, selectTab, children }) => {
//     const buttonClasses = active
//         ? "text-white border-b border-purple-500"
//         : "text-[#ADB7BE] hover:text-white"

//     return (
//         <button onClick={selectTab} className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
//             {children}
//         </button>
//     )
// }

// export default function AboutSection() {
//     const [activeTab, setActiveTab] = useState("skills")

//     return (
//         <section className="text-white" id="about">
//             <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//                 <Image src="/images/pc1.jpg" width={500} height={500} alt="Computer setup" className="rounded-lg" />
//                 <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//                     <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//                     <p className="text-muted-foreground mb-6">
//                         Hello! I&apos;m a passionate <span className="font-semibold text-gray-600">Software Engineer</span> specializing
//                         in the <span className="text-green-500">MERN stack</span> and enthusiastic about web and mobile app
//                         development. With proficiency in <span className="text-blue-500">Java, JavaScript, and React.js</span>, I
//                         craft dynamic and responsive user interfaces to elevate user experiences. My journey in software
//                         development is driven by a commitment to transforming innovative ideas into{" "}
//                         <span className="font-semibold">practical solutions</span>. I bring hands-on experience in building
//                         scalable and efficient applications with the MERN stack and extend my skills into the DevOps realm with{" "}
//                         <span className="text-blue-400">Docker</span>, <span className="text-red-500">Ansible</span>,{" "}
//                         <span className="text-gray-500">Jenkins</span>, and{" "}
//                         <span className="text-orange-400">AWS cloud services</span>. Eager to create impactful solutions and
//                         collaborate on exciting projects, I am continuously expanding my expertise and making meaningful
//                         contributions to the tech community.
//                     </p>
//                     <p className="font-semibold mb-8">
//                         Let&apos;s connect and explore the potential to build something extraordinary together!
//                     </p>

//                     <div className="flex flex-row justify-start mt-8">
//                         {TAB_DATA.map((tab) => (
//                             <TabButton
//                                 key={tab.id}
//                                 selectTab={() => setActiveTab(tab.id)}
//                                 active={activeTab === tab.id}
//                             >
//                                 <tab.icon className="mr-2 inline-block" /> {tab.title}
//                             </TabButton>
//                         ))}
//                     </div>
//                     <div className="mt-8">
//                         {TAB_DATA.find((t) => t.id === activeTab).content}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


"use client";

import React, { useState } from "react"
import Image from "next/image"
import { Cpu, BookOpen, Award, GraduationCap } from "lucide-react"
import { FaAward } from "react-icons/fa";
import { DiNodejs, DiDocker, DiJava, DiMongodb, DiPostgresql, DiAws, DiReact, DiJenkins, DiAndroid } from "react-icons/di"
import { AiOutlineKubernetes } from "react-icons/ai";
import { SiExpress, SiNextdotjs } from "react-icons/si"

const SkillItem = ({ Icon, label, color }) => (
  <div className="transform hover:scale-105 transition-all duration-300 group">
    <div className="flex items-center gap-3">
      <Icon className={`text-4xl ${color} group-hover:scale-110 transition-transform duration-300`} />
      <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{label}</span>
    </div>
  </div>
)

const CertificationItem = ({ title }) => (
  <div className="transform hover:translate-x-2 transition-all duration-300 group">
    <div className="flex items-center gap-4">
      <FaAward className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
      <div>
        <h4 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">{title}</h4>
        <p className="text-sm text-gray-400">Verified Certificate</p>
      </div>
    </div>
  </div>
)

const EducationItem = ({ degree, institution }) => (
  <div className="transform hover:translate-x-2 transition-all duration-300 group">
    <div className="flex items-center gap-4">
      <GraduationCap className="text-blue-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
      <div>
        <h4 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">{degree}</h4>
        <p className="text-sm text-gray-400">{institution}</p>
      </div>
    </div>
  </div>
)

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: Cpu,
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillItem Icon={DiNodejs} label="Node.js" color="text-green-500" />
        <SkillItem Icon={SiExpress} label="Express" color="text-gray-400" />
        <SkillItem Icon={SiNextdotjs} label="Next.js" color="text-white" />
        <SkillItem Icon={DiReact} label="React" color="text-blue-500" />
        <SkillItem Icon={DiPostgresql} label="PostgreSQL" color="text-blue-700" />
        <SkillItem Icon={DiDocker} label="Docker" color="text-blue-600" />
        <SkillItem Icon={DiJenkins} label="Jenkins" color="text-red-800" />
        <SkillItem Icon={DiAws} label="AWS" color="text-orange-500" />
        <SkillItem Icon={DiJava} label="Java" color="text-red-600" />
        <SkillItem Icon={DiMongodb} label="MongoDB" color="text-green-500" />
        <SkillItem Icon={DiAndroid} label="React Native" color="text-green-500" />
        <SkillItem Icon={AiOutlineKubernetes} label={"Kubernetes"} color="text-blue-500" />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: BookOpen,
    content: (
      <div className="space-y-6">
        <EducationItem
          degree="Masters of Computer Application (MCA)"
          institution="SIES COLLEGE OF MANAGEMENT STUDIES, Nerul (MUMBAI)"
        />
        <EducationItem
          degree="BSc Computer Science"
          institution="SIES COLLEGE OF ARTS, SCIENCE AND COMMERCE SION (MUMBAI)"
        />
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: Award,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CertificationItem title="AWS Cloud Practitioner" />
        <CertificationItem title="Google Professional Cloud Developer" />
        <CertificationItem title="Postman API Fundamentals Student Expert" />
        <CertificationItem title="Python" />
        <CertificationItem title="Java" />
      </div>
    ),
  },
]

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-purple-500 pb-2"
    : "text-[#ADB7BE] hover:text-white border-b-2 border-transparent pb-2 transition-all duration-300"

  return (
    <button onClick={selectTab} className={`mr-8 font-semibold ${buttonClasses}`}>
      {children}
    </button>
  )
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/pc1.jpg" width={500} height={500} alt="Computer setup" className="rounded-lg shadow-2xl" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-muted-foreground mb-6">
            Hello! I&apos;m a passionate <span className="font-semibold text-gray-300">Software Engineer</span> specializing
            in the <span className="text-green-500">MERN stack</span> and enthusiastic about web and mobile app
            development. With proficiency in <span className="text-blue-500">Java, JavaScript, and React.js</span>, I
            craft dynamic and responsive user interfaces to elevate user experiences.
          </p>
          <p className="text-muted-foreground mb-6">
            My journey in software development is driven by a commitment to transforming innovative ideas into{" "}
            <span className="font-semibold text-gray-300">practical solutions</span>. I bring hands-on experience in building
            scalable and efficient applications with the MERN stack and extend my skills into the DevOps realm with{" "}
            <span className="text-blue-400">Docker</span>, <span className="text-red-500">Ansible</span>,{" "}
            <span className="text-gray-400">Jenkins</span>, and{" "}
            <span className="text-orange-400">AWS cloud services</span>.
          </p>
          <p className="font-medium text-purple-400 mb-8">
            Let&apos;s connect and explore the potential to build something extraordinary together!
          </p>

          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tab) => (
              <TabButton
                key={tab.id}
                selectTab={() => setActiveTab(tab.id)}
                active={activeTab === tab.id}
              >
                <tab.icon className="mr-2 inline-block" /> {tab.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === activeTab).content}
          </div>
        </div>
      </div>
    </section>
  )
}