import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
