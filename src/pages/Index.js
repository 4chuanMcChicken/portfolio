import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TypeAnimation } from 'react-type-animation';
import { VisitContext } from '../context/VisitContext'; // 假设你将 Provider 放在这个路径

import Main from '../layouts/Main';

const Index = () => {
  const { visitedPages, markPageAsVisited } = useContext(VisitContext);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        if (!visitedPages.about) {
          const response = await axios.get('https://yizhou.me/api/d3js/record_visit/');
          console.log('Visit recorded successfully!', response.data);
          markPageAsVisited('about');
        }
      } catch (error) {
        console.error('Error recording visit:', error);
      }
    };

    recordVisit();
  }, [visitedPages, markPageAsVisited]);

  return (
    <Main
      description={"Joey Li's personal website. "}
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2><Link to="/">About this site</Link></h2>
            <div style={{ marginBottom: '1em' }} className="flex items-center mt-4">
              <p style={{
                fontWeight: '500', fontSize: '1em', marginRight: '0.5em',
              }}
              >Build in
              </p>
              <div className="flex py-3">
                <img alt="" className="img-animated" style={{ width: '4em', marginRight: '1em' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                <img alt="" className="img-animated" style={{ width: '4em', marginRight: '1em' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
                <img alt="" className="img-animated" style={{ height: '5em', marginRight: '1em', marginBottom: '-1em' }} src="https://cloudiofy.com/wp-content/uploads/2020/06/aws-ec2.png" />
              </div>
            </div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'It is designed to showcase my professional skills, personal projects, and interests 😬',
                1000,
              ]}
              speed={50}
              // repeat={Infinity}
            />
          </div>
        </header>
        <p
          className="pb-5"
          data-aos="zoom-x-out"
          data-aos-delay={300}
        > Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          <Link to="/projects">projects</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
      </article>
    </Main>
  );
};

export default Index;
