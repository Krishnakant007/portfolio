"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = [
  {
    src: "/pipe.png",
    title: "Modern Business Portfolio",
    description:
      "A sleek and modern portfolio website designed for businesses to showcase their services, team, and achievements. Built with responsive design and smooth animations.",
    websiteLink: "https://jkpipe2-krishnakant007s-projects.vercel.app/",
  },
  {
    src: "/brain.png",
    title: "Interactive Modern Website",
    description:
      "An interactive and dynamic website featuring AI-powered tools and modern UI/UX design. Perfect for tech startups and innovative projects.",
    websiteLink: "https://brainwave07.vercel.app/",
  },
  {
    src: "/interior.png",
    title: "Interior Designer Website",
    description:
      "A visually stunning website for interior designers to showcase their portfolio, services, and client testimonials. Designed with elegance and creativity in mind.",
    websiteLink: "https://interiordesignertina.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <ProjectCard {...project} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
