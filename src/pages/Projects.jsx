import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import TaskDash from "../assets/TaskDash.png";
import data from "../assets/data.jpg";
import api from "../assets/api.jpg";
import bank from "../assets/bank.jpg";
import podcast from "../assets/Podpeek-logo.png";
import ticket from "../assets/ticket.jpg";

const Projects = () => {
    return (
        <div className="bg-royal-purple min-h-screen p-4">
            {/* Projects Heading */}
            <h1 className="font-heading text-tomato-red text-3xl sm:text-4xl lg:text-5xl flex items-center justify-center pt-14">
                <span>Projects</span>
                <FaLaptopCode className="ml-4" />
            </h1>

            {/* Grid of Projects */}
            <div className="font-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-lg py-10">
                {/* Project Cards */}
                <ProjectCard
                    title="TaskDash"
                    description="TaskDash is a task management app developed using React, Node, and MongoDB. It helps users manage their tasks and projects with a focus on productivity features and task prioritization."
                    imgSrc={TaskDash}
                    bgColor="bg-coral-pink"
                    link="https://github.com/Sonwabiso1/task-management-app"
                />
                <ProjectCard
                    title="Student Graduate vs Dropout Analysis"
                    description="This project analyzes and predicts student outcomes based on various academic, socioeconomic, and personal factors, aiming to identify key predictors of student success."
                    imgSrc={data}
                    bgColor="bg-emerald-green"
                    link="https://github.com/Sonwabiso1/Student-graduate-vs-dropout-analysis"
                />
                <ProjectCard
                    title="REST API"
                    description="A simple REST API built with Node.js for basic CRUD operations, demonstrating backend development with JSON file management."
                    imgSrc={api}
                    bgColor="bg-ocean-blue"
                    link="https://github.com/Sonwabiso1/nodejs-crud-api"
                />
                <ProjectCard
                    title="Podpeek"
                    description="A React-based app offering a variety of podcasts from different genres. Users can browse, add favorites, and get detailed information."
                    imgSrc={podcast}
                    bgColor="bg-tomato-red"
                    link="https://github.com/Sonwabiso1/podpeek-podcast-app.git"
                />
                <ProjectCard
                    title="Ticket Booker"
                    description="A mini project for booking tickets, developed in C# with Windows Forms .NET. Created during an Information Systems module in the second year."
                    imgSrc={ticket}
                    bgColor="bg-coral-pink"
                    link="https://github.com/SonwabisoMaloni/WindowsForms-Mini-Project.git"
                />
                <ProjectCard
                    title="Bank Account Management System"
                    description="A console-based Java application demonstrating OOP concepts, including classes, inheritance, polymorphism, and exception handling."
                    imgSrc={bank}
                    bgColor="bg-emerald-green"
                    link="https://github.com/Sonwabiso1/Bank-Account-Mangement.git"
                />
            </div>
        </div>
    );
};

const ProjectCard = ({ title, description, imgSrc, bgColor, link }) => (
    <div className={`${bgColor} rounded-md overflow-hidden shadow-lg`}>
        <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4">
            <h1 className="text-white font-bold text-lg mb-2 font-heading">{title}</h1>
            <img src={imgSrc} alt={title} className="w-full h-36 bg-white object-cover mb-4" />
            <p className="text-white text-base font-body">{description}</p>
        </a>
    </div>
);

export default Projects;
