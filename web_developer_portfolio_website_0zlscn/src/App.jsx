import React from 'react';
    import './App.css';
    import About from './components/About';
    import Projects from './components/Projects';
    import Skills from './components/Skills';
    import Resume from './components/Resume';
    import Certifications from './components/Certifications';
    import Testimonials from './components/Testimonials';
    import Contact from './components/Contact';

    function App() {
      return (
        <div className="App">
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Certifications />
          <Testimonials />
          <Contact />
        </div>
      );
    }

    export default App;
