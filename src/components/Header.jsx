import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center justify-between font-heading fixed w-full text-soft-peach p-4 ">
            {/* Navigation Links */}
            <nav className="flex space-x-10 ml-5">
                <Link to="/">Home</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Education">Experience</Link>
                <Link to="/FindMe">Education</Link>
                <Link to="/About">About Me</Link>
            </nav>
            
            {/* Hire Me Button */}
            <button className="bg-tomato-red text-white px-6 py-2 rounded-full mr-5 hover:bg-yellow-500 transition">
                Hire Me
            </button>
        </div>
    );
}

export default Header;
