import React from "react";

// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white fixed w-full z-10 shadow">
      <h1 className="text-2xl font-bold">Ibrar.dev</h1>
      <div className="space-x-6">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
