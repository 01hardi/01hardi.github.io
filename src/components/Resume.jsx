import React from 'react';

    function Resume() {
      return (
        <section id="resume">
          <h2>Resume or CV</h2>
          <embed src="resume.pdf" type="application/pdf" width="100%" height="500px" />
          <a href="resume.pdf" download>Download PDF</a>
        </section>
      );
    }

    export default Resume;
