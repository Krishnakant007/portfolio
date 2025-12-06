// //components/main/Projects.
// "use client";

// import React, { useState } from "react";
// import ProjectCard from "../sub/ProjectCard";

// const projects = [
//   {
//     src: "/pipe.png",
//     title: "Modern Business Portfolio",
//     description:
//       "A sleek and modern portfolio website designed for businesses to showcase their services, team, and achievements. Built with responsive design and smooth animations.",
//     websiteLink: "https://jkpipe2-krishnakant007s-projects.vercel.app/",
//   },
//   {
//     src: "/brain.png",
//     title: "Interactive Modern Website",
//     description:
//       "An interactive and dynamic website featuring AI-powered tools and modern UI/UX design. Perfect for tech startups and innovative projects.",
//     websiteLink: "https://brainwave07.vercel.app/",
//   },
//   {
//     src: "/interior.png",
//     title: "Interior Designer Website",
//     description:
//       "A visually stunning website for interior designers to showcase their portfolio, services, and client testimonials. Designed with elegance and creativity in mind.",
//     websiteLink: "https://interiordesignertina.vercel.app/",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="flex flex-col items-center justify-center py-20" id="projects">
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         My Projects
//       </h1>
//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         {projects.map((project, index) => (
//           <a
//             key={index}
//             href={project.websiteLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cursor-pointer"
//           >
//             <ProjectCard {...project} />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;










// components/main/Projects.tsx
"use client";

import React from "react";

const projects = [
  {
    src: "/pipe.png",
    title: "Modern Business Portfolio",
    description: "A sleek and modern portfolio website designed for businesses to showcase their services, team, and achievements. Built with responsive design and smooth animations.",
    websiteLink: "https://jkpipe2-krishnakant007s-projects.vercel.app/",
  },
  {
    src: "/brain.png",
    title: "Interactive Modern Website",
    description: "An interactive and dynamic website featuring AI-powered tools and modern UI/UX design. Perfect for tech startups and innovative projects.",
    websiteLink: "https://brainwave07.vercel.app/",
  },
  {
    src: "/interior.png",
    title: "Interior Designer Website",
    description: "A visually stunning website for interior designers to showcase their portfolio, services, and client testimonials. Designed with elegance and creativity in mind.",
    websiteLink: "https://interiordesignertina.vercel.app/",
  },
];

const Projects = () => {
  // SIMPLE function that ALWAYS works
  const openWebsite = (url: string) => {
    console.log("Opening website:", url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      {/* TEST DIV - This MUST work
      <div 
        onClick={() => {
          console.log("TEST DIV CLICKED!");
          window.open("https://google.com", "_blank", "noopener,noreferrer");
        }}
        className="mb-10 p-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg cursor-pointer hover:scale-105 transition-transform"
      >
        <strong>TEST: Click me to open Google</strong>
      </div> */}

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center">
        {projects.map((project, index) => (
          <div 
            key={index}
            onClick={() => openWebsite(project.websiteLink)}
            className="project-card relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f861] hover:shadow-xl hover:shadow-[#7042f861] transition-all duration-300 flex-1 max-w-[400px] min-w-[300px]"
            style={{ 
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            {/* Image - Using img tag for reliability */}
            <div className="w-full h-64 bg-gradient-to-br from-[#0a0a0a] to-[#1a0530] flex items-center justify-center p-4">
              <img
                src={project.src}
                alt={project.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-gradient-to-b from-[#030014] to-[#1a0530]">
              <h1 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h1>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              
              {/* Click indicator */}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400 font-medium">
                    ↗ Click to visit
                  </span>
                  <span className="text-xs text-gray-500">
                    New tab
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;