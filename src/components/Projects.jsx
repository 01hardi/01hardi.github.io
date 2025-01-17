import React from 'react';

    function Projects() {
      return (
        <section id="projects">
          <h2>Projects Showcase</h2>
          <div className="projects-container">
            <div className="project">
              <h3>Project 1</h3>
              <p>Project description.</p>
              <img src="project1-image.jpg" alt="Project 1 Image" />
              <a href="https://project1-demo.com">Live Demo</a>
              <a href="https://github.com/project1-repo">Repository</a>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Project description.</p>
              <img src="project2-image.jpg" alt="Project 2 Image" />
              <a href="https://project2-demo.com">Live Demo</a>
              <a href="https://github.com/project2-repo">Repository</a>
            </div>
          </div>
        </section>
      );
    }

    export default Projects;
