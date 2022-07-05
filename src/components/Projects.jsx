import SectionTitle from './SectionTitle';
import data from '../projects.json';
import Project from './Project';
import { useEffect, useState } from 'react';
const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const filteredProjects =
      activeCategory === 'all'
        ? data
        : data.filter((project) => project.category === activeCategory);
    setProjects(filteredProjects);
  }, [activeCategory]);
  // update activeCategory
  const updateActiveCategory = (cat) => {
    setActiveCategory(cat);
  };
  return (
    <section className="py-12">
      <SectionTitle>Projects</SectionTitle>
      <div className="container flex items-center justify-center space-x-4 mb-8">
        <button
          type="button"
          className={`px-4 py-1 md:px-6 md:py-2 bg-white shadow-md uppercase text-xs text-gray-600 hover:bg-primary hover:text-white transition ${
            activeCategory === 'all' && 'bg-primary text-white'
          }`}
          onClick={() => updateActiveCategory('all')}
        >
          all
        </button>
        <button
          type="button"
          className={`px-4 py-1 md:px-6 md:py-2 bg-white shadow-md uppercase text-xs text-gray-600 hover:bg-primary hover:text-white transition ${
            activeCategory === 'frontend' && 'bg-primary text-white'
          }`}
          onClick={() => updateActiveCategory('frontend')}
        >
          frontend
        </button>
        <button
          type="button"
          className={`px-4 py-1 md:px-6 md:py-2 bg-white shadow-md uppercase text-xs text-gray-600 hover:bg-primary hover:text-white transition ${
            activeCategory === 'full stack' && 'bg-primary text-white'
          }`}
          onClick={() => updateActiveCategory('full stack')}
        >
          full stack
        </button>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const { id } = project;
          return <Project key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
