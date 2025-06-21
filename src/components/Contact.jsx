import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="rounded-2xl p-8 mb-12 max-w-7xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-center text-4xl font-extrabold mt-10 text-pink-600 mb-4">
        My Resume
      </h2>

      <p className="text-center text-neutral-700 dark:text-neutral-900 text-lg mb-8">
        Scroll through the preview below or click to view/download the full
        resume.
      </p>

      {/* Scrollable Resume Preview Box */}
      <div className="flex justify-center mb-8">
        <a
          href="/resume_arpita.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-4xl h-[500px] overflow-y-scroll border border-gray-300 rounded-xl shadow-xl p-4 bg-white hover:shadow-2xl transition-shadow"
        >
          <img
            src="/Icons/resume.jpg"
            alt="Resume Preview"
            className="w-full rounded-md"
          />
        </a>
      </div>

      {/* View / Download Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href="/SavyaGupta-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full transition-colors text-center shadow-md"
        >
          View Resume
        </a>

        <a
          href="/SavyaGupta-Resume.pdf"
          download
          className="bg-white border border-pink-600 text-pink-700 hover:bg-pink-50 font-semibold py-3 px-6 rounded-full transition-colors text-center shadow-md"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
