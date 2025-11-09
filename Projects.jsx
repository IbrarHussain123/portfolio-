


// src/components/Projects.jsx
const projects = [
  { title: "Portfolio Website", desc: "Built with React + Tailwind", img: "images/portfolio1.png" },
  { title: "E-commerce UI", desc: "Product cards, filters & responsive", img: "https://s3-alpha.figma.com/hub/file/3191449246/22f98b38-ccd9-4dbf-80c1-41d6ee983dc0-cover.png" },
  { title: "Dashboard", desc: "Admin panel using Tailwind grid", img: "https://i.ytimg.com/vi/syEq5tfg31U/maxresdefault.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={p.img} alt={p.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
