import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos';
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles
import { VisitProvider } from './context/VisitContext';

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Playground = lazy(() => import('./pages/Playground')); // AOS JS

const App = () => {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <VisitProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </VisitProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
