// //components/sub/ProjectCard.tsx
// import Image from "next/image";
// import React from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
  
// }

// const ProjectCard = ({ src, title, description }: Props) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
//       <Image
//         src={src}
//         alt={title}
//         width={1000}
//         height={1000}
//         className="w-full object-contain"
//       />

//       <div className="relative p-4">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;





// import Image from "next/image";
// import React from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
// }

// const ProjectCard = ({ src, title, description }: Props) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f861] hover:shadow-xl hover:shadow-[#7042f861] transition-all duration-300 group">
//       <div className="relative h-64 w-full overflow-hidden">
//         <Image
//           src={src}
//           alt={title}
//           fill
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//       </div>

//       <div className="relative p-6 bg-gradient-to-b from-[#030014] to-[#1a0530]">
//         <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
//         <p className="mt-2 text-gray-300 leading-relaxed">{description}</p>
        
//         {/* Add a subtle click indicator */}
//         <div className="mt-4 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <span className="text-sm">Visit Website →</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  websiteLink: string;
}

const ProjectCard = ({ src, title, description, websiteLink }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(websiteLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f861] hover:shadow-xl hover:shadow-[#7042f861] transition-all duration-300 cursor-pointer group"
    >
      <div className="relative">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${isHovered ? 'opacity-60' : ''}`}></div>
      </div>

      <div className="relative p-4 bg-gradient-to-b from-[#030014] to-[#1a0530]">
        <h1 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300">
          {title}
        </h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        {/* Click indicator */}
        <div className="mt-4 pt-3 border-t border-gray-800 border-opacity-50">
          <div className="flex items-center justify-end">
            <span className="text-sm text-purple-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
              Visit Website
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;