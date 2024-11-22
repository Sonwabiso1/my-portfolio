import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-emerald-green text-soft-peach p-4 mt-0 pt-10 pb-10">
            <div className="flex justify-center space-x-6">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/sonwabiso-maloni-2811ba27b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                >
                    <FaLinkedin size={30} />
                </a>

                {/* GitHub */}
                <a
                    href="https://https://github.com/Sonwabiso1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                >
                    <FaGithub size={30} />
                </a>
            </div>
            <div className="text-center mt-4 text-sm">
                <p>&copy; 2024 Sonwabiso. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;