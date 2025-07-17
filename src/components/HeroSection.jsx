import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Innovative Solutions with <span class='text-yellow-500'>Cutting-edge Tech</span>",
        "Building <span class='text-yellow-500'>Scalable Applications</span>",
        "Transforming Ideas into <span class='text-yellow-500'>Digital Reality</span>"
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
    <div className="bg-gray-900 pt-28 pb-12 flex flex-col-reverse justify-center items-center  px-5 sm:flex-row  max-w-6xl mx-auto" id="home">
      {/* Left Content - Now with controlled width */}
      <div className="flex-1 text-center sm:text-left w-full sm:w-4/5 lg:w-2/3">
        <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center">
          <h1 className="text-xl font-semibold leading-snug sm:text-3xl md:text-4xl sm:font-bold">
            <span ref={typedRef} />
          </h1>
        </div>
        <h3 className="font-semibold text-xl mt-2 sm:text-3xl md:mt-2">
          Aqeel <span className="text-yellow-500">Abbas</span> Khan | Full Stack Developer
        </h3>
        <p className="text-sm mt-3 sm:text-base md:text-lg leading-relaxed sm:mt-4 md:mt-5 max-w-prose">
          Experienced <b>Software Developer</b> with a proven track record of designing and delivering robust, scalable applications using modern technologies. Passionate about leveraging clean code, innovative architectures, and data-driven insights to create impactful solutions.
        </p>
        
        {/* Skills Section */}
        <div className="mt-5 md:mt-9 flex flex-col gap-3">
  {/* First Row: Skills up to Machine Learning/AI */}
  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
    {[
      "Full Stack", "C++", "Python", "JavaScript", 
      "React.js", "Node.js", "Flask", "Machine Learning/AI"
    ].map((skill, index) => (
      <span 
        key={index}
        className="px-3 py-2 bg-gray-800 rounded-full text-xs font-medium
                   transition-all duration-300 hover:bg-yellow-500 hover:text-gray-900
                   hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30
                   hover:cursor-pointer"
      >
        {skill}
      </span>
    ))}
  </div>
  {/* Second Row: Remaining skills */}
  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
    {[
      "Data Analysis", "MySQL", "MongoDB", "Tailwind", "Bootstrap"
    ].map((skill, index) => (
      <span 
        key={index}
        className="px-3 py-2 bg-gray-800 rounded-full text-xs font-medium
                   transition-all duration-300 hover:bg-yellow-500 hover:text-gray-900
                   hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30
                   hover:cursor-pointer"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
      </div>

      {/* Right Image - Adjusted size */}
      <div className="flex-shrink-0 sm:mb-0 sm:ml-6 md:ml-8 lg:ml-10">
        <img
          className="rounded-full h-44 w-44 border-4 border-yellow-500 shadow-md shadow-yellow-500 
                     sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-80 lg:w-80
                     hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
          src="Aqeel.png"
          alt="Aqeel Abbas Khan - Professional Software Developer"
        />
      </div>
    </div>
  );
};

export default HeroSection;