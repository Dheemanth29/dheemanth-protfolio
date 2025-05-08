import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <header className="flex justify-between items-center p-6 lg:px-24 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-cyan-400">Dheemanth Nomula</h1>
          <nav className="space-x-6 text-lg">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            <Link to="/about" className="hover:text-cyan-400">About</Link>
            <Link to="/projects" className="hover:text-cyan-400">Projects</Link>
            <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          </nav>
        </header>

        <main className="px-6 py-12 md:px-12 lg:px-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
