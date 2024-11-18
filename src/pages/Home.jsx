import React from 'react';
import homeimage from '../assets/Sonwabiso.jpg'
import Projects from './Projects';
import Experience from './Experience';

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-2 bg-royal-purple text-soft-peach p-4 h-screen items-center">
                <div  className="ml-20">
                    <h1 className="text-4xl font-heading font-bold mb-4">
                        Hello World, I am Sonwabiso.
                    </h1>
                    <p className="font-body">
                        I am a Systems Development Intern at CapaCiti.
                    </p>
                    <button className="bg-tomato-red text-white p-2 font-body font-bold rounded-md mt-4 hover:bg-yellow-500">Find out more</button>
                </div>
                <div className="justify-self-center">
                    <img src={homeimage} className='h-52 rounded-sm ' />
                </div>
            </div>
            <Projects/>
            <Experience/>
        </>
        
    );
};

export default Home;
