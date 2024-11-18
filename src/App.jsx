import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home';
import Header from './components/Header';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;