/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileDownload, FaEye } from 'react-icons/fa';
import Main from '../layouts/Main';
import Skills from '../components/Resume/Skills';
import Timeline from '../components/Resume/Timeline';
import { skills, categories } from '../data/resume/skills';

const sections = {
  Timelines: () => <Timeline />,
  Skills: () => <Skills skills={skills} categories={categories} />,
};

const handleDownload = () => {
  const url = `${process.env.PUBLIC_URL}/file/Joey Li resume.pdf`;
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Joey Li Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleViewOnline = () => {
  const url = 'https://fs-yizhouli-bucket.s3.us-west-2.amazonaws.com/Joey+Li+resume.pdf';
  window.open(url);
};

const Resume = () => (
  <>
    <Main
      title="Resume"
      description="Joey Li's Resume."
    >
      <article className="post" id="resume">
        <header>
          <div className="title title-flex">
            <div style={{ display: 'flex' }}>
              <h2><Link to="/resume">Resume</Link></h2>
              <FaEye
                className="download-resume-icon"
                onClick={handleViewOnline}
                onMouseOver={(e) => e.currentTarget.style.color = 'blue'}
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
              />
              <FaFileDownload
                className="download-resume-icon"
                onClick={handleDownload}
                onMouseOver={(e) => e.currentTarget.style.color = 'blue'}
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
              />
            </div>
            <span>This section lists my timeline from undergraduate studies to present, including education, internships, work experiences, and skill set. You can check online or download my resume.</span>
            <div className="link-container">
              {Object.keys(sections).map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div>
          </div>
        </header>

        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}

      </article>
    </Main>
  </>
);

export default Resume;
