import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate Full Stack Developer specializing in building exceptional digital experiences.
              I love creating elegant solutions to complex problems.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
              alt="Coding workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}