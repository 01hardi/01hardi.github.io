import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Your Name</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}