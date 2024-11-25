import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import retroComputer from "../assets/retro-computer-desk-arrangement.jpg";

const Education = () => {
    return (
        <div className="bg-royal-purple min-h-screen p-6 md:p-10">
            {/* Page Heading */}
            <h1 className="font-heading text-tomato-red text-3xl sm:text-4xl lg:text-5xl flex items-center justify-center pt-14">
                <span>Education</span>
                <FaGraduationCap className="ml-4" />
            </h1>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-10 items-start space-y-10 md:space-y-0 pt-5 px-4 md:px-10">
                {/* Left Section - Education Details */}
                <div className="w-full md:w-1/2 space-y-6">
                    {/* Capaciti Program */}
                    <div className="bg-ocean-blue p-4 md:p-6 rounded-sm shadow-md">
                        <h2 className="text-white text-xl md:text-2xl font-bold mb-2 font-heading">
                            Capaciti Program
                        </h2>
                        <p className="text-white font-body">
                            Currently enrolled, specializing in software development and training.
                        </p>
                    </div>

                    {/* Codespace Academy */}
                    <div className="bg-emerald-green p-4 md:p-6 rounded-sm shadow-md">
                        <h2 className="text-white text-xl md:text-2xl font-bold mb-2 font-heading">
                            Codespace Academy
                        </h2>
                        <p className="text-white font-body">
                            Completed a 6-month course covering HTML, CSS, JavaScript, React, Figma, and Firebase.
                        </p>
                    </div>

                    {/* Wits Education */}
                    <div className="bg-coral-pink p-4 md:p-6 rounded-sm shadow-md">
                        <h2 className="text-white text-xl md:text-2xl font-bold mb-2 font-heading">
                            University of Witwatersrand
                        </h2>
                        <p className="text-white font-body">
                            1st and 2nd Year Computer Science (Incomplete)
                        </p>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <img
                        src={retroComputer}
                        alt="Education Illustration"
                        className="w-3/4 md:w-2/3 lg:w-3/5 object-cover rounded-sm shadow-lg"
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
