import { useState } from 'react';
import reactLogo from './assets/react.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import viteLogo from '/vite.svg';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[#ffe8fa] w-[100vw] h-[100vh]">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </Router>
      </div>

      
    </>
  )
}

export default App
