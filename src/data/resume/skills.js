const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Backend ', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'Angular',
    competency: 2,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'VUE 3',
    competency: 4,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'SpringBoot',
    competency: 3,
    category: ['Backend ', 'Java'],
  },
  {
    title: 'Hibernate',
    competency: 3,
    category: ['Backend ', 'Java'],
  },
  {
    title: 'Next.JS',
    competency: 1,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Development Tools', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/MySQL/SQL',
    competency: 3,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Express.JS',
    competency: 3,
    category: ['Backend ', 'Javascript'],
  },
  {
    title: 'JUnit',
    competency: 2,
    category: ['Backend ', 'Java'],
  },
  {
    title: 'Mocha',
    competency: 2,
    category: ['Backend ', 'Javascript'],
  },
  {
    title: 'Pinia',
    competency: 2,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'TDesign',
    competency: 3,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'Bootstrap',
    competency: 3,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'Vant',
    competency: 3,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'Wasabi',
    competency: 2,
    category: ['Development Tools'],
  },
  {
    title: 'Koa.JS',
    competency: 4,
    category: ['Backend ', 'Javascript'],
  },
  {
    title: 'MyBatis',
    competency: 3,
    category: ['Backend ', 'Java'],
  },
  {
    title: 'FastAPI',
    competency: 2,
    category: ['Backend ', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Development Tools'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Development Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Development Tools'],
  },
  {
    title: 'Kafka',
    competency: 2,
    category: ['Backend '],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Frontend', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Frontend', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'CouchDB',
    competency: 3,
    category: ['Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
