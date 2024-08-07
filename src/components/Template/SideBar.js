import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

// import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section
    id="sidebar"
  >
    <section
      id="intro"

    >
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Joey Li</h2>
        <p className="mt-3"><a href="yizhoul74@gmail.com">yizhoul74@gmail.com</a></p>
        <div className="flex mt-3 justify-center md:justify-start">
          <FaGithub className="github-icon" size={20} />
          <a href="https://github.com/4chuanMcChicken">4chuanMcChicken</a>
        </div>
      </header>
    </section>

    <section
      className="blurb"
    >
      <h2>About</h2>
      <p>Hi, I&apos;m Joey Li. I am Software Engineer.
        I graduated from Western University with a master&apos;s degree
        in computer science. Now I am currently working as a
        Full Stack Developer at Gelenk Network Inc.
      </p>
      <ul className="actions mt-5">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    {/* <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section> */}
  </section>
);

export default SideBar;
