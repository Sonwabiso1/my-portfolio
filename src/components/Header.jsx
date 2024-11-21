import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaLaptopCode, FaBriefcase, FaGraduationCap, FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Toggle Modal
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    // Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
    };

    // Handle Form Submission
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_gipp2dk", // Replace with your EmailJS Service ID
                "template_0hd83cd", // Replace with your EmailJS Template ID
                emailData,
                "y8DMSS6WFjBk9pR9y" // Replace with your EmailJS User ID
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    alert("Message sent successfully!");
                    toggleModal(); // Close the modal after successful submission
                },
                (error) => {
                    console.error("Error sending email:", error.text);
                    alert("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <>
            {/* Header */}
            <div className="flex items-center justify-between font-heading fixed w-full text-soft-peach p-4 bg-royal-purple z-50">
                {/* Logo or Brand */}
                <div className="ml-5 text-3xl font-bold">S. Maloni</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
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

                {/* Contact Me Button */}
                <button
                    className="hidden md:block bg-tomato-red text-white px-6 py-2 rounded-full mr-5 hover:bg-yellow-500 transition"
                    onClick={toggleModal}
                >
                    Contact Me
                </button>

                {/* Hamburger Menu */}
                <button
                    className="md:hidden mr-5 text-soft-peach"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-royal-purple text-soft-peach flex flex-col items-center justify-center space-y-8 z-40">
                    <Link to="/" className="flex items-center space-x-2 text-lg" onClick={toggleMenu}>
                        <FaHome size={20} />
                        <span>Home</span>
                    </Link>
                    <Link to="/Projects" className="flex items-center space-x-2 text-lg" onClick={toggleMenu}>
                        <FaLaptopCode size={20} />
                        <span>Projects</span>
                    </Link>
                    <Link to="/Experience" className="flex items-center space-x-2 text-lg" onClick={toggleMenu}>
                        <FaBriefcase size={20} />
                        <span>Experience</span>
                    </Link>
                    <Link to="/Education" className="flex items-center space-x-2 text-lg" onClick={toggleMenu}>
                        <FaGraduationCap size={20} />
                        <span>Education</span>
                    </Link>
                    <Link to="/About" className="flex items-center space-x-2 text-lg" onClick={toggleMenu}>
                        <FaUserAlt size={20} />
                        <span>About Me</span>
                    </Link>
                    <button
                        className="bg-tomato-red text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition"
                        onClick={() => {
                            toggleModal();
                            toggleMenu();
                        }}
                    >
                        Contact Me
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-soft-peach text-royal-purple p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                        <p className="mb-4">Reach out to me for any inquiries or opportunities!</p>
                        <form className="space-y-4" onSubmit={sendEmail}>
                            <div>
                                <label className="block font-body mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-body mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-body mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Write your message"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-tomato-red text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-500"
                            >
                                Send
                            </button>
                        </form>
                        <button
                            className="mt-4 text-sm text-tomato-red underline"
                            onClick={toggleModal} // Close modal
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;