import React from 'react';
import About from '../components/About';
import Achievements from '../components/Achievments';
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
      <Achievements />
      <Contact />
    </>
  );
};

export default Home;
