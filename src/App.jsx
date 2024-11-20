import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home';
import Header from './components/Header';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Education' element={<Education />} />
        <Route path='/About' element={<AboutMe />} />
        <Route path='/Footer' element={<Footer/>}/>
      </Routes>
    </Router>
  );
}

export default App;