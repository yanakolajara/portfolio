import { Routes, Route } from 'react-router';
import Home from './routes/Home/Home';
import './App.scss';
import Navbar from './components/Navbar';

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
