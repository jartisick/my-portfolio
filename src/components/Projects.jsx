import React from "react";
import orchestra from "../../public/assets/projects/homeOrchestra.jpg";
import countries from "../../public/assets/projects/homeCountries.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects">
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-44">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I've built?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Network of Popular Orchestras"
              backgroundImg={orchestra}
              stack="Next.js, TypeScript, Prisma, Postgres, React.js"
              projectUrl="https://www.miorquesta.net"
            />
            <ProjectItem
              title="Countries App"
              backgroundImg={countries}
              stack="JavaScript, Postgres, SQL, React.js, Node.js"
              projectUrl="https://github.com/jartisick/PI-Countries"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
