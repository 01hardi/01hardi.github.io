import React from 'react';

    function Contact() {
      return (
        <section id="contact">
          <h2>Contact Information</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/your-profile">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">Email</a>
            </li>
          </ul>
        </section>
      );
    }

    export default Contact;
