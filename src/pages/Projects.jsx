import React from "react";
import { FaLaptopCode } from "react-icons/fa";

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
                    <h1 className="text-white font-bold text-lg mb-2">Heading</h1>
                    <img src="" alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                    <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo quae eveniet dolore non vitae cupiditate maxime necessitatibus eligendi facere nemo architecto sit cumque at perferendis delectus perspiciatis! Eius, nam?</p>
                </div>

                {/* Project Card 2 */}
                <div className="bg-emerald-green rounded-md overflow-hidden shadow-lg">
                    <h1 className="text-white font-bold text-lg mb-2">Heading</h1>
                    <img src="" alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                    <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo quae eveniet dolore non vitae cupiditate maxime necessitatibus eligendi facere nemo architecto sit cumque at perferendis delectus perspiciatis! Eius, nam?</p>
                </div>

                {/* Project Card 3 */}
                <div className="bg-ocean-blue rounded-md overflow-hidden shadow-lg">
                    <h1 className="text-white font-bold text-lg mb-2">Heading</h1>
                    <img src="" alt="Project Image" className="w-full h-36 bg-white object-cover mb-4" />
                    <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo quae eveniet dolore non vitae cupiditate maxime necessitatibus eligendi facere nemo architecto sit cumque at perferendis delectus perspiciatis! Eius, nam?</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;