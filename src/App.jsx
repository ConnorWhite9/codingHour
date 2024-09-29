import { useState } from 'react';
import reactLogo from './assets/react.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import viteLogo from '/vite.svg';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
        <Footer />
      </Router>
      </div>

      
    </>
  )
}

export default App
