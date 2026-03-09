import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;