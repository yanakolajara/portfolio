import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './routes/Home/Home';
import Navbar from './components/Navbar';
import './App.scss';
import Project from './routes/Project/Project';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:projectName' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
