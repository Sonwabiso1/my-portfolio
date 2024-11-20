import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import TaskDash from "../assets/TaskDash.png"
import data from "../assets/data.jpg"
import api from "../assets/api.jpg"

const Projects = () => {
    
    return (
        <div className="bg-royal-purple h-screen">
            {/* Projects Heading */}
            <h1 className="font-heading text-[#FD5A46] text-5xl ml-24 mt-0 pt-20 flex items-center">
                <span>Projects</span>
                <FaLaptopCode className="ml-4" />
            </h1>
            
            {/* Grid of Projects */}
            <div className="font-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 my-10">
                {/* Project Card 1 */}
                <div className="bg-coral-pink rounded-md overflow-hidden shadow-lg ">
                    <h1 className="text-white font-bold text-lg mb-2">TaskDash</h1>
                    <img src={TaskDash} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                    <p className="text-white text-sm">TaskDash is a task management app that is developed using react, node and mongodb. I worked on it with my team Coding Stars during our time in Capaciti.</p>
                </div>

                {/* Project Card 2 */}
                <div className="bg-emerald-green rounded-md overflow-hidden shadow-lg">
                    <h1 className="text-white font-bold text-lg mb-2">Student-graduate-vs-dropout-analysis Public</h1>
                    <img src={data} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                    <p className="text-white text-sm">This project aims to analyze and predict student outcomes, specifically focusing on whether a student will graduate or drop out based on various academic, socioeconomic, and personal factors. The primary goal is to identify key predictors of student success and to develop a model that can predict these outcomes using historical data.</p>
                </div>

                {/* Project Card 3 */}
                <div className="bg-ocean-blue rounded-md overflow-hidden shadow-lg">
                    <h1 className="text-white font-bold text-lg mb-2">Node Api</h1>
                    <img src={api} alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                    <p className="text-white text-sm">This is a simple REST API built with Node.js that performs basic CRUD (Create, Read, Update, Delete) operations for a list of items. The API is built using Node's http module to handle requests and fs module to manage data storage in a JSON file (items.json).</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;