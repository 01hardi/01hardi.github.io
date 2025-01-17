import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code2 className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">
              I write clean, maintainable, and efficient code following best practices and industry standards.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Rocket className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              I love exploring new technologies and implementing innovative solutions to complex problems.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Users className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              I thrive in collaborative environments and enjoy working with cross-functional teams.
            </p>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            With over X years of experience in web development, I've worked on various projects ranging
            from small business websites to large-scale enterprise applications. My passion lies in
            creating efficient, scalable, and user-friendly solutions that solve real-world problems.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not coding, you can find me contributing to open-source projects, writing technical
            blog posts, or mentoring aspiring developers. I believe in continuous learning and staying
            up-to-date with the latest technologies and industry trends.
          </p>
        </div>
      </div>
    </section>
  );
}