// import React from "react";



// // src/components/Hero.jsx
// export default function Hero() {
//   return (
//     <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
//       <h1 className="text-5xl font-extrabold mb-4">
//         Hi, I’m <span className="text-blue-600">Ibrar</span>
//       </h1>
//       <p className="text-gray-700 text-xl mb-8">
//         Frontend Developer | React | Tailwind | Vite
//       </p>
//       <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
//         View My Work
//       </button>
//     </section>
//   );
// }

import React from "react";

export default function CodeWaveHero() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
 
      <section className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
        {/* Left column: copy */}
        <div className="space-y-6">
          <p className="text-sm text-orange-400 font-semibold tracking-wide">FULL-STACK DEVELOPER/MERN Stack Developer</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            I&apos;m a <span className="text-blue-400">Mern Stack Developer</span>
            <br />
            <span className="block text-white"> At Code Crafter Technology</span>
          </h1>

          <p className="max-w-xl text-gray-200/90 text-base">
                Developer | React | Tailwind CSS | Vite | Node.js | Express.js | MongoDB | HTML | JavaScript | CSS
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-orange-500 text-white font-medium shadow hover:bg-orange-600 transition"
            >
              Hire me
            </a>
            <a
              href="#projects"
              className="inline-block px-4 py-3 rounded-lg border border-white/20 text-sm hover:bg-white/5 transition"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Right column: image + decorative tech icons */}
        <div className="relative flex justify-center md:justify-end">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            {/* Grayscale portrait with subtle circular frame */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-full border border-white/5 blur-lg opacity-" aria-hidden />

              <img
                src="/images/pic.jpg"
                alt="CodeWave portrait"
                className="w-full max-h-[500px] py -2 m-3 p-4  object-cover rounded-2xl filter grayscale shadow-2xl"
                style={{ mixBlendMode: 'normal' }}
              />

              {/* Example decorative icons (SVGs) positioned around the image */}
              <span className="hidden md:inline-block absolute -left-6 top-6 p-2 rounded-full bg-white/5 text-blue-300">
                {/* React icon (simple atom) */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 18c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM4.22 7.22c-.39.39-.39 1.03 0 1.42C6.59 11.41 9.64 13 12 13s5.41-1.59 7.78-4.36c.39-.39.39-1.03 0-1.42-.39-.39-1.03-.39-1.42 0C16.41 9.59 14.36 11 12 11S7.59 9.59 5.64 5.8c-.39-.39-1.03-.39-1.42 0z" />
                </svg>
              </span>

              <span className="hidden md:inline-block absolute -right-6 top-12 p-2 rounded-full bg-white/5 text-green-300">
                {/* Node/JS hexagon-ish mark (simplified) */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
                </svg>
              </span>

              <span className="hidden md:inline-block absolute left-6 bottom-8 p-2 rounded-full bg-white/5 text-purple-300">
                {/* Redux-like swirl */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
                </svg>
              </span>
            </div>

            {/* small caption under image for accessibility */}
            <p className="sr-only">Portrait of the developer</p>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-8 text-sm text-white/60">
        © {new Date().getFullYear()} CodeWave. All rights reserved.
      </footer>
    </main>
  );
}
