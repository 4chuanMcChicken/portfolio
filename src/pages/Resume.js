/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';
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

// const handleViewOnline = () => {
//   const url = 'https://fs-yizhouli-bucket.s3.us-west-2.amazonaws.com/Joey%20Li%20resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEoBBfAY8dJQS1liVwt%2F3ZTVjlJ%2BvD9b8OABi%2FTsKxVGAiARwHuISOs%2Bm8NcUAvl7kQpHAI9HXBRuG9eB3SsIoR9KSrkAggdEAEaDDQyNDUxODY5NzQ2MCIMfCmdTHqN78qYadMdKsECNP%2BmlGiRA0g5J78OFIF5Aave6%2BuK4URHGwoaf1Q0LQuaqMOAmKwGLvhQDeFU%2FtzWk60V1KzsPWyNxbZV%2FUTvsrAiypLIKYs4AFD%2FHMBXG0tU5WOlLnVi498xjsmLRrHwPwiHCZJ0hKUwBpHxCPtvB39sqAbocbgsZOYpzCOwj%2B4TCy0KM0HNTIE3wqw3K9U33ApkHcJtvHdRiLTu8d0abPYaHs7rcZNL26lTj%2BVCiN1cxnAVmFu%2B6lHWjXbAjiJWIJAZY8X66UDoJbQAWiHI5RZ9laGPAavUz4fNbxqhPuxfpHurCqDt1%2FXqn8EtOuvDc1EecWUdi%2FHMnP1e6vCYxo0g1%2FgUVDsrkblKsjOxRNo7ILu5bJ6pPyFw44rTEUP7bfUHAt86lXkSI17nkjKenkb0ZjaYdxUS1idKXu61eTfWMKDUx7MGOrQCdzbxEDXwJHVcdSsnBwkvF3H9EbnGaaq4CgSW3vYIeJE6qIkEMCP%2BU5UZgScTCxJ%2FCgUCWRqMEPxCDVi857ZDUtuYSQvZajLc01Ijl5AY4gd%2F%2BbB0iQ%2FOZTjpRX7FvZ%2FnVlgAhimUamXFhcMl92dZxK6YR5A3X0%2B5BJyyHnYRq%2BdfuGuqderVorq270S2Z0IRpWhjbxKDaxI4xVXKnybS%2BQetzJ7nEj3omYfyzGsxX1EmFaeVdncZwP3V1X09%2F0KLtMGKzXkdT7cz9PzGac1Epb4WS2l2TGH1Wgu9z1Rswjz4OLAOdpkuGRFqEF2oHfe%2FTAEd92iwFj5B1gh3OW8A3ibeHfNrBQTkj%2BHfTEpTm4q758%2Br8ep2ouIp6ibQ7%2FoCQhrtosH2oeYvQeto6RAsB%2BSvbxg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240618T202426Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWFV2JIH2CLP7U662%2F20240618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e5a470ca66d57268c2841fbc0a476dd898ef92655f5d385f0268d444da9729ce';
//   window.open(url);
// };

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
              {/* <FaEye
                className="download-resume-icon"
                onClick={handleViewOnline}
                onMouseOver={(e) => e.currentTarget.style.color = 'blue'}
                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
              /> */}
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
