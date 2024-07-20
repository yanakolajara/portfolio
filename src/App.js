import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './routes/Home/Home';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
