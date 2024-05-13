import React from "react";

function Project({ projects }) {
  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <div className="w-[90%] h-24 rounded-full mt-10 flex justify-center items-center bg-gradient-to-r from-black via-gray-700 to-black drop-shadow-lg text-center italic text-4xl font-semibold tracking-tight font-serif text-gray-100">
        Project 📁
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://www.shutterstock.com/image-photo/project-manager-working-on-laptop-260nw-2175846471.jpg"
              alt=""
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{project.heading}</h3>
            <p className="text-gray-700 text-justify mt-2">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 hover:text-white font-semibold  bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              🔗 {project.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;