import React from 'react';
import homeimage from '../assets/3d-aesthetics-with-shapes-vaporwave-style.jpg'
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import AboutMe from './AboutMe';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-2 bg-royal-purple text-soft-peach p-4 h-screen items-center">
                <div  className="ml-20">
                    <h1 className="text-4xl font-heading font-bold mb-4">
                        Hello World, I am Sonwabiso.
                    </h1>
                    <p className="font-body">
                        a Systems Development Intern at CapaCiti.
                    </p>
                    <button className="bg-tomato-red text-white p-2 font-body font-bold rounded-md mt-4 hover:bg-yellow-500">Find out more</button>
                </div>
                <div className="justify-self-center">
                    <img src={homeimage} className='h-72 rounded-sm ' />
                    {/* Attribution */}
                    <p className="text-soft-peach text-xs mt-2">
                        Designed by <a href="https://www.freepik.com" className="underline">Freepik</a>
                    </p>
                </div>
            </div>
            <Projects/>
            <Experience/>
            <Education />
            <AboutMe />
            <Footer/>
        </>
        
    );
};

export default Home;
