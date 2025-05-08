import React from "react";

function Contact() {
  return (
    <section className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact Me</h2>
      <p className="text-lg text-gray-300 mb-6">
        I'd love to hear from you! Reach out via email or LinkedIn.
      </p>
      <a
        href="mailto:nomuladheemanth2000@gmail.com"
        className="inline-block bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold"
      >
        Send Email
      </a>
    </section>
  );
}

export default Contact;
