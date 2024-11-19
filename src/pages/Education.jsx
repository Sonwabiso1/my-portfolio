import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import retroComputer from "../assets/retro-computer-desk-arrangement.jpg";

const Education = () => {
    return (
        <div className="bg-royal-purple h-screen">
            {/* Page Heading */}
            <h1 className="font-heading text-tomato-red text-5xl ml-24 mt-0 pt-28 pb-10 flex items-center">
                <span>Education</span>
                <FaGraduationCap className="ml-4"/>
            </h1>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 lg:space-x-10 pt-10 px-14">
                {/* Left Section - Education Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                    {/* Capaciti Program */}
                    <div className="bg-ocean-blue p-6 rounded-sm shadow-md">
                        <h2 className="text-white text-2xl font-bold mb-2">
                            Capaciti Program
                        </h2>
                        <p className="text-white">
                            Currently enrolled, specializing in software development and training.
                        </p>
                    </div>

                    {/* Codespace Academy */}
                    <div className="bg-emerald-green p-6 rounded-sm shadow-md">
                        <h2 className="text-white text-2xl font-bold mb-2">
                            Codespace Academy
                        </h2>
                        <p className="text-white">
                            Completed a 6-month course covering HTML, CSS, JavaScript, React, Figma, and Firebase.
                        </p>
                    </div>

                    {/* Wits Education */}
                    <div className="bg-coral-pink p-6 rounded-sm shadow-md">
                        <h2 className="text-white text-2xl font-bold mb-2">
                            University of the Witwatersrand
                        </h2>
                        <p className="text-white">
                            1st and 2nd Year Computer Science (Incomplete)
                        </p>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <img
                        src={retroComputer}
                        alt="Education Illustration"
                        className="w-2/3 lg:w-3/5 object-cover rounded-sm shadow-lg"
                    />
                    {/* Attribution */}
                    <p className="text-soft-peach text-xs mt-2">
                        Designed by <a href="https://www.freepik.com" className="underline">Freepik</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;