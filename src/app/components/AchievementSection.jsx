"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
    () => {
        return import("react-animated-numbers");
    },
    { ssr: false }
);

const achievementsList = [
    {
        prefix: "💼",
        metric: "Projects",
        value: " 8",
        postfix: "+",
    },
    {
        prefix: "👨‍💻",
        metric: "Users",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "📊",
        metric: "Commits",
        value: "200",
        postfix: "+",
    },
    {
        prefix: "⏳",
        metric: "Years",
        value: "2",
        postfix: "+",
    }
];

const AchievementsSection = () => {
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                        >
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {achievement.prefix && `${achievement.prefix} `}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    className="text-white text-4xl font-bold"
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tension: 140 * (index + 1),
                                        };
                                    }}
                                />
                                {achievement.postfix && `${achievement.postfix} `}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementsSection;


// 'use client'

// import React from "react"
// import dynamic from "next/dynamic"
// import { motion } from "framer-motion"

// const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false })

// const achievementsList = [
//   {
//     metric: "Projects",
//     value: "8",
//     postfix: "+",
//     icon: "💼",
//   },
//   {
//     metric: "Users",
//     value: "100",
//     postfix: "+",
//     icon: "👥",
//   },
//   {
//     metric: "Commits",
//     value: "200",
//     postfix: "+",
//     icon: "📊",
//   },
//   {
//     metric: "Years",
//     value: "2",
//     postfix: "+",
//     icon: "⏳",
//   },
// ]

// const AchievementsSection = () => {
//   return (
//     <section className="py-12 px-4 sm:py-24">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-8"
//         >
//           {achievementsList.map((achievement, index) => (
//             <motion.div
//               key={index}
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: index * 0.1, duration: 0.3 }}
//               className="flex flex-col items-center justify-center text-center"
//             >
//               <span className="text-4xl mb-2">{achievement.icon}</span>
//               <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
//                 <AnimatedNumbers
//                   includeComma
//                   animateToNumber={parseInt(achievement.value)}
//                   locale="en-US"
//                   className="text-white"
//                   configs={(_, index) => ({
//                     mass: 1,
//                     friction: 100,
//                     tension: 140 * (index + 1),
//                   })}
//                 />
//                 <span className="text-white ml-1">{achievement.postfix}</span>
//               </h2>
//               <p className="text-[#ADB7BE] text-sm uppercase tracking-wide">{achievement.metric}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default AchievementsSection



