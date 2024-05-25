import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { VisitContext } from '../context/VisitContext'; // 假设你将 Provider 放在这个路径

import Main from '../layouts/Main';

const Index = () => {
  const { visitedPages, markPageAsVisited } = useContext(VisitContext);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        if (!visitedPages.about) {
          const response = await axios.get('api/d3js/record_visit/');
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
            <div style={{ marginBottom: '1em' }}>
              <p style={{
                fontWeight: '500', fontSize: '1em', verticalAlign: 'middle', display: 'inline-block', marginRight: '0.5em',
              }}
              >Build in
              </p>
              <img alt="" style={{ width: '4em', marginRight: '1em' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
              <img alt="" style={{ width: '4em', marginRight: '1em' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" />
              <img alt="" style={{ width: '4em', marginRight: '1em' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg" />
              <img alt="" style={{ width: '4em', marginRight: '1em' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg" />

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
};

export default Index;
