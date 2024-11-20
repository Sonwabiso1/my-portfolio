import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
    const experiences = [
        {
            date: "Aug 2024 - Present",
            role: "Candidate Software Developer",
            company: "CapaCiti",
            description:
                "Here I also participate in work integrated with learning and have recieved certificates in html, css, javascript, advanced javascript, python, java and fullstack development ",
        },
        {
            date: "Jan 2024 - June 2024",
            role: "Student",
            company: "Codespace Academy",
            description:
                "Here I participated in work integrated learning. I have built several projects and increased my profiency in Javascript, HTML, CSS and React.",
        },
        // {
        //     date: "2020 - 2021",
        //     role: "Intern",
        //     company: "Startup Hub",
        //     description:
        //         "Assisted in designing mockups in Figma and implemented frontend designs using HTML, CSS, and JavaScript.",
        // },
    ];

    return (
        <div className="bg-royal-purple min-h-screen overflow-hidden">
            {/* Heading */}
            <h1 className="font-heading text-tomato-red text-5xl ml-24 mt-0 pt-28 pb-10 flex items-center">
                <span>Experience</span>
                <FaBriefcase className="ml-4" />
            </h1>

            {/* Timeline */}
            <div className="relative ml-24 mt-10">
                {/* Vertical Line */}
                <div className="absolute left-5 top-0 w-1 h-full bg-soft-peach z-0"></div>

                {experiences.map((exp, index) => (
                    <div key={index} className="relative z-10 mb-10 flex items-start">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-green rounded-full flex items-center justify-center text-white font-bold relative z-10">
                            {index + 1}
                        </div>

                        {/* Timeline Content */}
                        <div className="ml-6">
                            <h2 className="text-2xl text-soft-peach font-bold font-heading">
                                {exp.role}
                            </h2>
                            <h3 className="text-xl text-ocean-blue font-semibold font-body">
                                {exp.company}
                            </h3>
                            <p className="text-white text-sm font-body">{exp.date}</p>
                            <p className="text-white mt-2 font-body">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
