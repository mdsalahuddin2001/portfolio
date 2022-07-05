import SectionTitle from './SectionTitle';
import data from '../projects.json';
import Project from './Project';
import { useState } from 'react';
const Projects = () => {
  const [projects, setProjects] = useState(data);
  return (
    <section className="py-12">
      <SectionTitle>Projects</SectionTitle>
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
