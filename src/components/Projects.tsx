import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Project Three',
    description: 'A mobile-first progressive web application for task management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}