import React from 'react';
import { Chrono } from 'react-chrono';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Timeline = () => {
  const items = [
    {
      title: 'September 2023 - Current',
      cardTitle: 'Gelenk Network Inc.',
      url: 'https://www.linkedin.com/company/genvoice/',
      cardSubtitle: 'Full Stack Developer',
      cardDetailedText: 'Developed both frontend and backend of a Web App ”Unifans” with over 200,000 registered users, utilizing: Node.js, Express.js, Vue, TypeScript, MongoDB, Redis, AWS EC2 and AWS S3.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://media.licdn.com/dms/image/C4E0BAQFwgYTUOHa0NQ/company-logo_200_200/0/1631377365977/gelenk_networks_inc_logo?e=2147483647&v=beta&t=fPgly9tYug3OFtNoZGw2qFUe1E8gPCMTnJBbfEAQJFY',
        },
      },
    },
    {
      title: 'September 2021 - August 2023',
      cardTitle: 'Western University',
      url: 'https://www.uwo.ca/',
      cardSubtitle: 'Research Assistance',
      cardDetailedText: 'Implemented Deep Learning models using Python to predict amino acid sequences from tandem mass spectra',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdxCGiCnzkpZGMqh8ZPAfCRQN5pMWmtJYWg&s',
        },
      },
    },
    {
      title: 'September 2021 - August 2023',
      cardTitle: 'Western University',
      url: 'https://www.uwo.ca/',
      cardSubtitle: 'Master of Science',
      cardDetailedText: 'Computer Science',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdxCGiCnzkpZGMqh8ZPAfCRQN5pMWmtJYWg&s',
        },
      },
    }, {
      title: 'September 2020 - May 2021',
      cardTitle: 'Inspur Group',
      url: 'https://en.inspur.com/',
      cardSubtitle: 'Full Stack Developer Intern',
      cardDetailedText: 'Developed a metrics collection and monitoring platform, processing 5 million real-time data points from data centers, and the corresponding Data Monitoring and Management System using SpringBoot and React.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://media.licdn.com/dms/image/C4D0BAQE-MQcrJofQbA/company-logo_200_200/0/1631350196554?e=2147483647&v=beta&t=XH68KGxcI3d40qiJw1ShYmG8UI_KQz49Piy_lJXVxPQ',
        },
      },
    }, {
      title: 'June 2019 - September 2019',
      cardTitle: 'Sichuan KDSIYU Technology Co., Ltd',
      // url: 'http://www.history.com',
      cardSubtitle: 'Software Developer Intern',
      cardDetailedText: 'Developed a full-stack business loan service for the bank based on SpringBoot and Angular.',
      media: {
        type: 'IMAGE',
        source: {
          url: `${PUBLIC_URL}/images/KDSY.jpg`,
        },
      },
    }, {
      title: 'September 2016 - May 2020',
      cardTitle: 'Southesat University',
      url: 'https://www.seu.edu.cn/',
      cardSubtitle: 'Bechalor of Science',
      cardDetailedText: 'Computer Science',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://upload.wikimedia.org/wikipedia/zh/thumb/0/07/%E4%B8%9C%E5%8D%97%E5%A4%A7%E5%AD%A6logo.svg/1200px-%E4%B8%9C%E5%8D%97%E5%A4%A7%E5%AD%A6logo.svg.png',
        },
      },
    }];

  return (
    <>
      <div>
        <div className="time-line-container">
          <Chrono
            textOverlay
            items={items}
            mode="VERTICAL_ALTERNATING"
            disableToolbar
            cardHeight={250}
          />
        </div>
      </div>
    </>
  );
};

export default Timeline;
