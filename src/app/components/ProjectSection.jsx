// "use client";
// import React, { useState, useRef } from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

// const projectsData = [
//     {
//         id: 1,
//         title: "Prompter : Discover, Create and Share Creative Prompts",
//         description: "Prompter is an AI prompting tool for modern world to discover, create and share creative prompts. Built with NextJs 13",
//         image: "/images/projects/Prompter.png",
//         tag: ["All", "Web", "NEXTJS"],
//         githubUrl: "https://github.com/RithendSushanth/Prompter",
//         deployedUrl: "https://prompter-eta.vercel.app/",
//     },
//     {
//         id: 2,
//         title: "Compressio: A Video Showcase",
//         description: "Compressio is a modern and engaging web application for showcasing, transforming, and sharing videos. The platform utilizes Cloudinary for media management and offers a responsive, user-friendly interface built with Next.js, Tailwind CSS, and Clerk.",
//         image: "/images/projects/Compressio.png",
//         tag: ["All", "Web", "NEXTJS"],
//         githubUrl: "https://github.com/RithendSushanth/Compressio-A-Video-Showcase",
//         deployedUrl: "https://compressio-a-video-showcase.vercel.app",
//     },
//     {
//         id: 3,
//         title: "Portfolio Website",
//         description: "This is my personal Portfolio Website",
//         image: "/images/projects/Portfolio.png",
//         tag: ["All", "Web", "NEXTJS"],
//         githubUrl: "https://github.com/RithendSushanth/portfolio",
//         deployedUrl: "https://portfolio-rithend-sushanths-projects.vercel.app/",
//     },
//     {
//         id: 4,
//         title: "iNotebook",
//         description: "iNotebook is an open-source web application for managing your notes. It is built with React.js and Node.js. It is designed to be user-friendly and easy to use. It is fully responsive and works on all devices.",
//         image: "/images/projects/iNotebook.png",
//         tag: ["All", "Web", "MERN"],
//         githubUrl: "https://github.com/RithendSushanth/iNotebook",
//         deployedUrl: "https://github.com/RithendSushanth/iNotebook",
//     },
//     {
//         id: 5,
//         title: "DailyBugle : A News App",
//         description: "DailyBugle is a news app built with React.js and Node.js. It is designed to be user-friendly and easy to use. It is fully responsive and works on all devices. It is built with newsapi.org API.",
//         image: "/images/projects/Dailybugle2.png",
//         tag: ["All", "Web", "MERN"],
//         githubUrl: "https://github.com/RithendSushanth/DailyBugle-ReactJs",
//         deployedUrl: "https://github.com/RithendSushanth/DailyBugle-ReactJs",
//     },
//     {
//         id: 6,
//         title: "TechStack Chronicles",
//         description: "A personal blog where I share my knowledge and experiences in programming. This platform is designed to help others on their coding journey, featuring tutorials, tips, and insights for developers at all levels.",
//         image: "/images/projects/TechStack-Chronicles.png",
//         tag: ["All", "Web", "NEXTJS"],
//         githubUrl: "https://github.com/RithendSushanth/TechStack-Chronicles",
//         deployedUrl: "https://techstack-chronicles.vercel.app/",
//     }

// ];
// const ProjectsSection = () => {
//     const [tag, setTag] = useState("All");
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     const filteredProjects = projectsData.filter((project) =>
//         project.tag.map(tag => tag.toLowerCase()).includes(tag.toLowerCase())
//     );

//     const cardVariants = {
//         initial: { y: 50, opacity: 0 },
//         animate: { y: 0, opacity: 1 },
//     }




//     const handleTagChange = (newTag) => {
//         setTag(newTag);
//     };

//     return (
//         <section id="projects">
//             <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" id="project">
//                 My Projects
//             </h2>
//             <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-white my-6">
//                 <ProjectTag
//                     name="All"
//                     onClick={handleTagChange}
//                     isSelected={tag === "All"}
//                 />
//                 <ProjectTag
//                     name="Web"
//                     onClick={handleTagChange}
//                     isSelected={tag === "Web"}
//                 />
//                 {/* <ProjectTag
//                     name="Mobile"
//                     onClick={handleTagChange}
//                     isSelected={tag == "Mobile"}
//                 /> */}
//                 <ProjectTag
//                     name="NextJS"
//                     onClick={handleTagChange}
//                     isSelected={tag === "NEXTJS"}
//                 />
//                 <ProjectTag
//                     name="MERN"
//                     onClick={handleTagChange}
//                     isSelected={tag === "MERN"}
//                 />
//             </div>
//             <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
//                 {filteredProjects.map((project, index) => (
//                     <motion.li
//                         key={index}
//                         variants={cardVariants}
//                         initial="initial"
//                         animate={isInView ? "animate" : "initial"}
//                         transition={{ duration: 0.3, delay: index * 0.4 }}
//                     >
//                         <ProjectCard
//                             key={project.id}
//                             title={project.title}
//                             description={project.description}
//                             imgUrl={project.image}
//                             githubUrl={project.githubUrl}
//                             deployedUrl={project.deployedUrl}
//                         />
//                     </motion.li>
//                 ))}
//             </ul>
//         </section>
//     );
// };

// export default ProjectsSection;




"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Eye, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const projectsData = [
  {
    id: 1,
    title: "Prompter : Discover, Create and Share Creative Prompts",
    description: "AI prompting tool to discover, create and share creative prompts.",
    image: "/images/projects/Prompter.png",
    tags: ["All", "Web", "NextJS"],
    githubUrl: "https://github.com/RithendSushanth/Prompter",
    deployedUrl: "https://prompter-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Compressio: A Video Showcase",
    description: "Compressio is a modern and engaging web application for showcasing, transforming, and sharing videos. The platform utilizes Cloudinary for media management and offers a responsive, user-friendly interface built with Next.js, Tailwind CSS, and Clerk.",
    image: "/images/projects/Compressio.png",
    tags: ["All", "Web", "NextJS"],
    githubUrl: "https://github.com/RithendSushanth/Compressio-A-Video-Showcase",
    deployedUrl: "https://compressio-a-video-showcase.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing projects and skills.",
    image: "/images/projects/Portfolio.png",
    tags: ["All", "Web", "NextJS"],
    githubUrl: "https://github.com/RithendSushanth/portfolio",
    deployedUrl: "https://portfolio-rithend-sushanths-projects.vercel.app/",
  },
{
    id: 4,
    title: "TechStack Chronicles",
    description: "Personal blog sharing programming knowledge and experiences.",
    image: "/images/projects/TechStack-Chronicles.png",
    tags: ["All", "Web", "NextJS"],
    githubUrl: "https://github.com/RithendSushanth/TechStack-Chronicles",
    deployedUrl: "https://techstack-chronicles.vercel.app/",
  },

  {
    id: 5,
    title: "DailyBugle",
    description: "News app built with React.js and Node.js, using the newsapi.org API.",
    image: "/images/projects/Dailybugle2.png",
    tags: ["All", "Web", "MERN"],
    githubUrl: "https://github.com/RithendSushanth/DailyBugle-ReactJs",
    deployedUrl: "https://github.com/RithendSushanth/DailyBugle-ReactJs",
  },
  {
    id: 6,
    title: "iNotebook",
    description: "Open-source web application for managing notes, built with React.js and Node.js.",
    image: "/images/projects/iNotebook.png",
    tags: ["All", "Web", "MERN"],
    githubUrl: "https://github.com/RithendSushanth/iNotebook",
    deployedUrl: "https://github.com/RithendSushanth/iNotebook",
  },
]

const ProjectCard = ({ project }) => {
    return (
      <Card className="overflow-hidden bg-[#181818] border-gray-700">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />    
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" aria-label="View deployed project">
                  <Eye className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 text-gray-300">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="mt-2">{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </CardFooter>
      </Card>
    )
  }
  
  export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState("All")
  
    const filteredProjects = projectsData.filter((project) =>
      project.tags.map((tag) => tag.toLowerCase()).includes(activeTab.toLowerCase())
    )
  
    return (
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">My Projects</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="inline-flex h-8 items-center justify-center rounded-lg bg-[#181818] p-2">
                {["All", "Web", "NextJS", "MERN"].map((tab) => (
                  <TabsTrigger 
                    key={tab} 
                    value={tab} 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    )
  }