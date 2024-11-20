import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import TaskDash from "../assets/TaskDash.png"
import data from "../assets/data.jpg"
import api from "../assets/api.jpg"

const Projects = () => {
    
    return (
        <div className="bg-royal-purple h-max">
            {/* Projects Heading */}
            <h1 className="font-heading text-[#FD5A46] text-5xl ml-24 mt-0 pt-20 flex items-center">
                <span>Projects</span>
                <FaLaptopCode className="ml-4" />
            </h1>
            
            {/* Grid of Projects */}
            <div className="font-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 py-10">
                {/* Project Card 1 */}
                <div className="bg-coral-pink rounded-md overflow-hidden shadow-lg ">
                    <a href="https://github.com/Sonwabiso1/task-management-app">
                        <h1 className="text-white font-bold text-lg mb-2 font-heading">TaskDash</h1>
                        <img src={TaskDash} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                        <p className="text-white text-base font-body">TaskDash is a task management app that is developed using React, Node and MongoDB. I worked on it with my team Coding Stars during our time in Capaciti. It is a tool to help users manage their tasks and projects, with a focus on productivity features and task prioritization.</p>
                    </a>
                </div>

                {/* Project Card 2 */}
                <div className="bg-emerald-green rounded-md overflow-hidden shadow-lg">
                    <a href="https://github.com/Sonwabiso1/Student-graduate-vs-dropout-analysis">
                        <h1 className="text-white font-bold text-lg mb-2 font-heading">Student graduate vs dropout analysis</h1>
                        <img src={data} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                        <p className="text-white text-base font-body">This project aims to analyze and predict student outcomes, specifically focusing on whether a student will graduate or drop out based on various academic, socioeconomic, and personal factors. The primary goal is to identify key predictors of student success and to develop a model that can predict these outcomes using historical data.</p>
                    </a>
                </div>

                {/* Project Card 3 */}
                <div className="bg-ocean-blue rounded-md overflow-hidden shadow-lg">
                    <a href="https://github.com/Sonwabiso1/nodejs-crud-api">
                        <h1 className="text-white font-bold text-lg mb-2 font-heading">REST API</h1>
                        <img src={api} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                        <p className="text-white text-base font-body">This is a simple REST API built with Node.js that performs basic CRUD (Create, Read, Update, Delete) operations for a list of items. The API is built using Node's http module to handle requests and fs module to manage data storage in a JSON file (items.json).</p>
                    </a>
                </div>
                {/* Project Card 4*/}
                <div className="bg-tomato-red rounded-md overflow-hidden shadow-lg">
                    <a href="https://github.com/Sonwabiso1/podpeek-podcast-app.git">
                        <h1 className="text-white font-bold text-lg mb-2 font-heading">Podpeek</h1>
                        <img src={api} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                        <p className="text-white text-base font-body">This a React-based application I did for Codespace that offers a variety of podcasts from different genres. Users can browse podcasts, add their favorites, and get detailed information about each podcast.</p>
                    </a>
                </div>
                {/* Project Card 5 */}
                <div className="bg-coral-pink rounded-md overflow-hidden shadow-lg">
                    <a href="https://github.com/SonwabisoMaloni/WindowsForms-Mini-Project.git">
                        <h1 className="text-white font-bold text-lg mb-2 font-heading">Ticket Booker</h1>
                        <img src={api} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                        <p className="text-white text-base font-body">This is a mini project I did for my Information Systems module in second year, developed with c# using windows forms .NET. This program allows a user to book tickets for a show.</p>
                    </a>
                </div>
                {/* Project Card 6 */}
                <div className="bg-emerald-green rounded-md overflow-hidden shadow-lg">
                    <a href="https://github.com/Sonwabiso1/Bank-Account-Mangement.git">
                        <h1 className="text-white font-bold text-lg mb-2 font-heading">Bank Account Management System</h1>
                        <img src={api} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                        <p className="text-white text-base font-body">his is a simple console-based Java application simulating a basic Bank Account Management System. The application demonstrates essential object-oriented programming (OOP) concepts, including classes and objects, inheritance and polymorphism, and exception handling.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;