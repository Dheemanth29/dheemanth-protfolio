import React from "react";

function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="inline-block px-4 py-1 mb-4 border border-white rounded-full">
          Welcome to my portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi <span role="img" aria-label="wave">👋</span>, I'm <span className="text-cyan-400">Dheemanth</span>
        </h2>
        <p className="text-xl mb-2">Software Engineer @ C4C</p>
        <p className="text-lg mb-6 text-gray-300">
          Passionate about building scalable web applications
        </p>
        <div className="space-x-4">
          <a
            href="/Dheemanth.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold"
          >
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/nomula-dheemanth-3402b8206/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full font-semibold"
          >
            Connect
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Dheemanth Nomula</h2>
        <img
          src="/dhee.jpeg"
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
        />
      </div>
    </section>
  );
}

export default Home;
