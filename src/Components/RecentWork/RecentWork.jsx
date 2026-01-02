import React from 'react'
import { AiFillTikTok } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
import { motion } from 'framer-motion'
import { a, link } from 'framer-motion/client'

function RecentWork() {
    const projects = [
        {
            title: "E-COMMERCE-SHOP  Demo Live click on the picture to view the project",
            description:

            "click on the picture to view the project i made it's a Front end  E-commerce shop  made with Tailwind CSS and React Vite. Modern =>.... ",
            image: "/image.png",
            link: "https://shope-eosin.vercel.app/"
        },
        {
            title: "Example Project",
            description:
                "E-commerce Front end made with Tailwind CSS and React Vite. Modern portfolio design.",
            image: "/work_2.png",
        },
        {
            title: "Example Project",
            description:
                "E-commerce Front end made with Tailwind CSS and React Vite. Modern portfolio design.",
            image: "/work_3.png",
        },
        {
            title: "Example Project",
            description:
                "E-commerce Front end made with Tailwind CSS and React Vite. Modern portfolio design.",
            image: "/work_4.png",
        },
    ];

    return (

        <div className="w-full py-[60px] bg-[#18052d]">
            <div className="container mx-auto px-4 md:px-0 ">

                {/* Header */}
                <div className="flex flex-col items-center gap-6 mb-16 text-center">
                    <motion.h3 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="text-5xl font-josefin font-semibold bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] bg-clip-text text-transparent">
                        Recent work
                    </motion.h3>

                    <motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-xl text-[#fafafa] font-josefin font-normal leading-7 max-w-[800px] w-full'>
                        A collection of projects I've Worked on.
                    </motion.p>
                </div>

                {/* Projects */}
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-10 mb-20
                          ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Text */}
                        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            className='md:w-1/2 w-full space-y-6'
                        >
                            <h4 className="text-[#5dffff] font-semibold">
                                featured project
                            </h4>

                            <h2 className="text-3xl text-white font-bold">
                                {project.title}
                            </h2>

                            <div className="p-4 rounded-lg bg-gradient-to-r from-[#dc00d3] to-[#5dffff] text-white">
                                {project.description}
                            </div>

                            {/* Social links*/}
                            <div className="flex gap-4 text-2xl text-white">
                                <FaGithub />
                                <SlSocialInstagram />
                                <AiFillTikTok />
                                <FaLinkedin />
                            </div>
                        </motion.div>
                        {/* image */}
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
                            className='md:w-1/2 w-full'
                        >
                           
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block aspect-[16/9] overflow-hidden rounded-xl shadow-xl"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                                />
                            </a>


                        </motion.div>



                    </div>
                ))}
            </div>
        </div>

    );
};

export default RecentWork