import React from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/profile.jpg"; // Replace with your actual image path
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className="min-h-screen bg-royal-purple flex flex-col items-center justify-center text-soft-peach px-6 md:px-12">
            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl space-y-10 md:space-y-0">
                {/* Left Section - Text */}
                <div className="text-center md:text-left md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
                        Hi, I'm Sonwabiso!
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed font-body">
                        A passionate software developer specializing in creating
                        engaging user interfaces and innovative solutions. Welcome to my
                        portfolio!
                    </p>
                    <Link
                        to="/Projects"
                        className="font-body inline-flex items-center bg-tomato-red text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition"
                    >
                        View My Work <FaArrowRight className="ml-2" />
                    </Link>
                </div>

                {/* Right Section - Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={myImage}
                        alt="Sonwabiso"
                        className="w-2/3 md:w-3/4 lg:w-2/3 object-cover rounded-full shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
