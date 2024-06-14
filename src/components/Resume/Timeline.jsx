import React from 'react';
import { Chrono } from 'react-chrono';

const Timeline = () => {
  const items = [{
    title: 'September 2023',
    cardTitle: 'Gelenk Network Inc.',
    url: 'http://www.history.com',
    cardSubtitle: 'Full Stack Developer',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://media.licdn.com/dms/image/C4E0BAQFwgYTUOHa0NQ/company-logo_200_200/0/1631377365977/gelenk_networks_inc_logo?e=2147483647&v=beta&t=fPgly9tYug3OFtNoZGw2qFUe1E8gPCMTnJBbfEAQJFY',
      },
    },
  }, {
    title: 'September 2021',
    cardTitle: 'Western University',
    url: 'http://www.history.com',
    cardSubtitle: 'Master of Science',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdxCGiCnzkpZGMqh8ZPAfCRQN5pMWmtJYWg&s',
      },
    },
  }, {
    title: 'September 2020',
    cardTitle: 'Inspur Group',
    url: 'http://www.history.com',
    cardSubtitle: 'Full Stack Developer Intern',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://media.licdn.com/dms/image/C4D0BAQE-MQcrJofQbA/company-logo_200_200/0/1631350196554?e=2147483647&v=beta&t=XH68KGxcI3d40qiJw1ShYmG8UI_KQz49Piy_lJXVxPQ',
      },
    },
  }, {
    title: 'June 2019',
    cardTitle: 'Sichuan KDSIYU Technology Co., Ltd',
    url: 'http://www.history.com',
    cardSubtitle: 'Software Developer Intern',
    media: {
      type: 'IMAGE',
      source: {
        url: 'http://someurl/image.jpg',
      },
    },
  }, {
    title: 'September 2016',
    cardTitle: 'Southesat University',
    url: 'https://www.seu.edu.cn/',
    cardSubtitle: 'Bechalor of Science',
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
        <div style={{ width: '100%', height: '650px', padding: '10px' }}>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            disableToolbar
            cardHeight={150}
            fontSizes={{
              cardSubtitle: '0.7rem',
              cardText: '0.8rem',
              cardTitle: '1rem',
              title: '1rem',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Timeline;
