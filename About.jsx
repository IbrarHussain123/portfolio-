import React from "react";

// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="text-blue-400 leading-relaxed">
            Hello! I’m <span className="text-blue-600 font-semibold">Ibrar Hussain</span>,
            a passionate <span className="text-blue-400">MERN Stack Developer</span> from
            Pakistan. I specialize in building modern, responsive, and efficient web
            applications using React, Node.js, Express, and MongoDB.
          </p>

          <p className="text-blue-400 leading-relaxed mt-4">
            I love transforming ideas into reality using code. With strong expertise in
            <span className="text-blue-400"> JavaScript, Tailwind CSS, and Vite</span>,
            I create seamless user experiences with a focus on performance and design.
          </p>

          <p className="text-blue-400 leading-relaxed mt-4">
            My goal is to grow as a full-stack developer, contribute to meaningful
            projects, and continuously learn new technologies that shape the web.
          </p>

          
            
    </section>
  );
}
