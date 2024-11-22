import React from "react";
import myImage from "../assets/profile.jpg"; // Replace with your actual image path
import { FaUserAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaJava, FaFigma } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";

const AboutMe = () => {
    return (
        <div className="bg-royal-purple min-h-screen flex flex-col  p-6 md:p-10 space-y-10">
            {/* Heading with Icon on the Right */}
            <h1 className="font-heading text-tomato-red text-3xl sm:text-4xl lg:text-5xl flex items-center justify-center pt-14">
                <span>About Me</span>
                <FaUserAlt className="ml-4" />
            </h1>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-10 md:space-y-0 w-full">
                {/* Left Section - Image */}
                <div className="flex justify-center md:w-1/2">
                    <img
                        src={myImage}
                        alt="My Profile"
                        className="w-2/3 md:w-1/2 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Section - Description and Skills */}
                <div className="text-soft-peach md:w-1/2 space-y-6">
                    {/* Short Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Who I Am</h2>
                        <p>
                            Hi! I'm Sonwabiso, a passionate front-end and software developer based in South Africa. 
                            I love building user-friendly applications and creating innovative solutions. 
                            When I'm not coding, I enjoy photography, exploring creative projects, and diving into cybersecurity challenges.
                        </p>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
                        <div className="grid grid-cols-2 gap-4 text-base">
                            <div className="flex items-center space-x-2">
                                <FaHtml5 size={20} />
                                <span>HTML</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaCss3Alt size={20} />
                                <span>CSS & Tailwind CSS</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaJs size={20} />
                                <span>JavaScript</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaReact size={20} />
                                <span>React</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaFigma size={20} />
                                <span>Figma</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <IoLogoFirebase size={20} />
                                <span>Firebase</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaPython size={20} />
                                <span>Python</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaDatabase size={20} />
                                <span>MySQL</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaJava size={20} />
                                <span>Java</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <TbBrandCpp size={20} />
                                <span>C++</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
