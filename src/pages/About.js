import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { TypeAnimation } from 'react-type-animation';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="About"
      description="Learn about Joey Li"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>About Me</h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown
          data-aos="zoom-y-out"
          data-aos-delay={300}
        >
          {markdown}
        </Markdown>
        <TypeAnimation
          style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
          sequence={[
            '• Soccer ⚽️\n• VolleyBall 🏐\n• Guitar 🎸\n• Cooking 🍛\n• Video Games 🎮 (Especially EA FC24)\n• Summer 🌞', // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            1500,
            '',
          ]}
          repeat={Infinity}
        />
        {/* -
        -
        - Guitar
        - Cooking
        - Video Games (Especially EA FC24)
        - Summer ! */}
      </article>
    </Main>
  );
};

export default About;
