import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yizhou Li's personal website. "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <div style={{ marginBottom: '1em' }}>
            <p style={{
              fontWeight: '500', fontSize: '1em', verticalAlign: 'middle', display: 'inline-block', marginRight: '0.5em',
            }}
            >Build in ReactJS
            </p>
            <img alt="" style={{ width: '4em' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
          </div>

          <p>
            It is designed to showcase my professional skills, personal projects, and interests.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
