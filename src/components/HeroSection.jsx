import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaDownload } from "react-icons/fa";

const HeroSection = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Building <span class='text-yellow-500'>Production AI Systems</span>",
        "Shipping <span class='text-yellow-500'>Full-Stack Products</span>",
        "Designing <span class='text-yellow-500'>Scalable APIs & Pipelines</span>"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      contentType: 'html',
      onStringTyped: () => {
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) cursor.style.verticalAlign = 'baseline';
      }
    };

    typedInstance.current = new Typed(typedRef.current, options);

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <section
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-5 flex flex-col-reverse justify-center items-center sm:flex-row max-w-6xl mx-auto w-full"
      id="home"
    >
      <div className="flex-1 text-center sm:text-left w-full min-w-0 sm:pr-4">
        <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-medium tracking-[0.12em] sm:tracking-[0.2em] uppercase text-yellow-500/90 leading-relaxed">
          Available for hire
          <span className="mx-1.5 sm:mx-2.5 text-gray-600">/</span>
          Remote
          <span className="mx-1.5 sm:mx-2.5 text-gray-600">/</span>
          Onsite
          <span className="mx-1.5 sm:mx-2.5 text-gray-600">/</span>
          Freelance
        </p>
        <div className="min-h-[72px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center sm:justify-start">
          <h1 className="text-lg xs:text-xl font-semibold leading-snug sm:text-3xl md:text-4xl sm:font-bold text-white break-words">
            <span ref={typedRef} />
          </h1>
        </div>
        <h2 className="font-semibold text-xl mt-2 sm:text-3xl md:mt-2 text-white">
          Aqeel <span className="text-yellow-500">Abbas</span> Khan | Software Engineer
        </h2>
        <p className="text-sm mt-3 sm:text-base md:text-lg leading-relaxed sm:mt-4 md:mt-5 max-w-prose mx-auto sm:mx-0 text-gray-400">
          Software Engineer building AI-powered web applications and scalable backend systems.
          I work across React, Node.js, FastAPI, and PostgreSQL, with hands-on experience shipping
          production features in RAG, LLM agents, and data pipelines.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 justify-center sm:justify-start">
          <a href="#projects" className="btn-primary">
            View Work
          </a>
          <a href="#opportunity" className="btn-secondary border-yellow-500/30">
            Hire Me
          </a>
          <a href="/Aqeel_Abbas_Khan_Resume.pdf" download className="btn-secondary">
            <FaDownload className="text-yellow-500 text-xs" />
            Resume
          </a>
        </div>

        <div className="mt-5 md:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
          {[
            "Software Engineer", "React.js", "Node.js", "Python",
            "FastAPI", "Supabase", "LangChain", "Docker"
          ].map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gray-800/80 border border-yellow-500/20 rounded-full text-[11px] sm:text-xs font-medium text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex-shrink-0 mb-6 sm:mb-0 sm:ml-6 md:ml-8 lg:ml-10">
        <div className="absolute inset-0 rounded-full bg-yellow-500/25 blur-2xl scale-110"></div>
        <img
          className="relative rounded-full h-36 w-36 xs:h-44 xs:w-44 object-cover object-top border-4 border-yellow-500 shadow-gold
                     sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-80 lg:w-80
                     ring-4 ring-yellow-500/15"
          src="Aqeel.png"
          alt="Aqeel Abbas Khan - Software Engineer"
        />
      </div>
    </section>
  );
};

export default HeroSection;
