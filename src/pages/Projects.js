import React from "react";

function Projects() {
  const projects = [
    {
      title: "Voice-Based Email for Blind",
      description: " Developed an accessible web application for visually impaired users to send emails using voice commands.",
      Techstack:"Python, Django, HTML, CSS, JavaScript, SQL",
      Features:"Send Email, Receive Email, Speech-to-text conversion",
    },
    {
      title: "Criminal Face Detection",
      description: "Designed a computer vision system to identify criminals using real-time facial recognition.",
      techstack: "Python, Open CV, Machine Learning",
      Features: "Integrated system with traffic cameras, alerting authorities upon identification, Face Recognition"
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-lg hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
