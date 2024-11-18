import React from "react";
import { Link } from 'react-router-dom';
import { FaHome,  FaLaptopCode, FaBriefcase, FaGraduationCap, FaUserAlt } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex items-center justify-between font-heading fixed w-full text-soft-peach p-4 bg-royal-purple">
            {/* Navigation Links */}
            <nav className="flex space-x-10 ml-5">
                <Link to="/" className="flex items-center space-x-2">
                    <FaHome size={20} />
                    <span>Home</span>
                </Link>
                <Link to="/Projects" className="flex items-center space-x-2">
                    <FaLaptopCode size={20} />
                    <span>Projects</span>
                </Link>
                <Link to="/Experience" className="flex items-center space-x-2">
                    <FaBriefcase size={20} />
                    <span>Experience</span>
                </Link>
                <Link to="/Education" className="flex items-center space-x-2">
                    <FaGraduationCap size={20} />
                    <span>Education</span>
                </Link>
                <Link to="/About" className="flex items-center space-x-2">
                    <FaUserAlt size={20} />
                    <span>About Me</span>
                </Link>
            </nav>

            {/* Hire Me Button */}
            <button className="bg-tomato-red text-white px-6 py-2 rounded-full mr-5 hover:bg-yellow-500 transition">
                Hire Me
            </button>
        </div>
    );
}

export default Header;