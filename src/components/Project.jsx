import { FaGithub, FaChartLine } from 'react-icons/fa';
const Project = ({ project }) => {
  const { thumbnail, title, github_repo, live } = project;
  return (
    <div className="bg-white shadow-md m-4">
      <img src={thumbnail} alt="thumbnail" className="w-full max-w-full" />
      <div className="px-4 pt-2 pb-4">
        <p className="text-xl text-gray-600 my-2">{title}</p>
        <div className="flex space-x-2">
          <a
            href={github_repo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1 text-white uppercase flex items-center bg-primary text-xs"
          >
            <FaGithub className="mr-1 text-sm" /> Github
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1 text-white uppercase flex items-center bg-secondary text-xs"
          >
            <FaChartLine className="mr-1 text-sm" /> Live demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
