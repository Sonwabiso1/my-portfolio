import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
    const experiences = [
        {
            date: "2023 - Present",
            role: "Frontend Developer",
            company: "Tech Innovators",
            description: "Developed responsive web interfaces using React and Tailwind CSS, ensuring cross-browser compatibility and improved user experiences."
        },
        {
            date: "2021 - 2023",
            role: "Junior Web Developer",
            company: "Web Solutions Co.",
            description: "Collaborated on building scalable web applications using JavaScript and Firebase, while adhering to best coding practices."
        },
        // {
        //     date: "2020 - 2021",
        //     role: "Intern",
        //     company: "Startup Hub",
        //     description: "Assisted in designing mockups in Figma and implemented frontend designs using HTML, CSS, and JavaScript."
        // }
    ];

    return (
        <div className="bg-royal-purple h-screen overflow-y-auto">
            {/* Heading */}
            <h1 className="font-heading text-tomato-red text-5xl ml-24 mt-0 pt-28 pb-10 flex items-center">
                <span>Experience</span>
                <FaBriefcase className="ml-4"/>
            </h1>
            
            {/* Timeline */}
            <div className="font-body relative ml-24 mt-10">
                
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-10 flex items-start">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-green rounded-full flex items-center justify-center text-white font-bold">
                            {index + 1}
                        </div>
                        
                        {/* Timeline Content */}
                        <div className="ml-6">
                            <h2 className="text-2xl text-soft-peach font-bold">{exp.role}</h2>
                            <h3 className="text-xl text-ocean-blue font-semibold">{exp.company}</h3>
                            <p className="text-white text-sm">{exp.date}</p>
                            <p className="text-white mt-2">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
