/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Genvoice Telecom',
    position: 'Full Stack Developer',
    url: 'https://www.genvoice.net/',
    startDate: '2023-09-01',
    summary: 'Developed both front-end and back-end of a subsciprtion based web application "<a href="https://app.unifans.io" style="color: blue;">Unifans</a>", utilizing Node.js, Vue.js, Koa.js, NoSQL database CouchDB, and Wasabi for cloud storage. ',
    highlights: [
      'Developed over 15 new features, including utilizing WebSockets and Redis to construct a real-time private messaging system, post collection, createing sitemap for improving Google SEO, calling OpenAI API for content translation, build a beta environment by configuring HAProxy for user testing new features, etc.',
      'Designed an email system capable of sending incoming statistics and new feature notifications emails to over 20,000 recipients simultaneously, and created 10+ email templates using HTML and CSS.',
      'Built a video compression and upload pipeline with multer and fluent-ffmpeg, implementing cloud storage with Wasabi.',
      'Implemented unit and integreted test using Mocha, imporving API reliability.',
      'Participated in the development of the web user interface using Vue 3 and TypeScript, utilized Axios for efficient management of HTTP requests, and implemented dynamic routing with Vue Router.',
      'Leveraged Pinia for state management and TDesign and Vant for responsive components catering to both web and mobile platforms, and capable of a bilingual interface switch between Chinese and English.',
      'Performed routine updates using Docker and AWS, leveraging Git for version control.',
      'Developed an AI QRCode generator with stable-diffusion, using Python, FastAPI and Vuetify. Deployed the project on RunPod using Docker, achieving 300 + daily usage.',
    ],
  },
  {
    name: 'Western University',
    position: 'Research Assistant and Teaching Assistant',
    url: 'https://www.uwo.ca/index.html',
    startDate: '2022-01-01',
    endDate: '2023-07-01',
    summary: 'Serving as a research assistant, responsible for conducting research on tandem mass spectrometry. Published a thesis <a href="https://ir.lib.uwo.ca/etd/9373/" style="color: blue;">DpNovo: A DEEP LEARNING MODEL COMBINED WITH DYNAMIC PROGRAMMING FOR DE NOVO PEPTIDE SEQUENCING</a>, reaching 100+ downloads . Additionally, serving as a teaching assistant for undergraduate students, overseeing the grading of assignments and exams, and conducting weekly office hours to address any questions or concerns.',
    highlights: [
      'Implemented Deep Learning models to predict amino acid sequences from tandem mass spectra using Python.',
      'Trained Convolutional Neural Networks model with PyTorch, extracting spectral features and scoring each peak.',
      'Utilized dynamic programming to optimize accumulated score calculations, and employed backtracking for precise sequence prediction, achieving a similar accuracy compared to other commercial models.',
      'Worked as a teaching assistant for courses: Data Structures and Algorithms, Analysis of Algorithms.',
    ],
  },
  {
    name: 'Inspur Group',
    position: 'Full Stack Developer Intern',
    startDate: '2020-09-01',
    endDate: '2021-05-01',
    summary: 'Developed a metrics collection and monitoring platform, processing 5 million real-time data points from data centers.',
    highlights: [
      'Built data collection servers using Java, SpringBoot and integrated with Kafka for message processing.',
      'Devised 10+ message subscribers catering to different data processing needs.',
      'Utilized Redis to cache and manage last-time and real-time values and implemented KPI calculations.',
      'Enhanced metrics visualization query speed by 40% through MySQL optimization, employing MyBatis as the ORM for developing RESTful APIs to support CRUD operations.',
      'Augmented unit test coverage from 50% to 95% with JUnit and Mockito, ensuring code reliability.',
      'Implemented responsive web application with React for data display. Utilized React Hooks for efficient state management, Echarts library for data visualization and styled responsive components with Bootstrap.',
    ],
  },
  {
    name: 'Sichuan KDSIYU Technology Co., Ltd',
    position: 'Software Developer Intern',
    startDate: '2019-06-01',
    endDate: '2019-09-01',
    highlights: [
      'Developed a full-stack business loan service for the bank based on SpringBoot and Angular.',
      'Build responsive user information collecting components using Angular (TypeScript), and designed data models and integrated SQL Server and Hibernate for storing user loan information.',
      'Developed services to work with credit bureau’s API, reached 200+ daily transactions.',
    ],
  },
];

export default work;
