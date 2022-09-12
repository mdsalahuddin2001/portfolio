import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import Skills from './Skills';

const About = () => {
  return (
    <section className="bg-brownWhite py-12 pb-20">
      <div className="container">
        <SectionTitle>About</SectionTitle>
        <div className="max-w-4xl bg-white px-4 pb-8  m-auto mt-20 relative">
          <img
            src="https://avatars.githubusercontent.com/u/70274046?v=4"
            alt="profile"
            className="block absolute w-32 h-32 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md"
          />
          <h4 className="text-2xl uppercase text-center text-gray-600 font-raleway mb-4 pt-20">
            MD Salahuddin
          </h4>

          <Skills />
          <p className="lg:text-justify text-gray-400 font-light max-w-3xl m-auto mb-4">
            Hi I am MD Salahuddin. A Frontend Web Developer from Bangldesh. I
            love coding,solving problems,building projects,reading books. I
            believe ,there's no limit of learning!
          </p>
          <div className="max-w-3xl m-auto">
            <p className="text-gray-400">
              <span className="text-gray-500 mr-2">Email: </span>{' '}
              mdsalahuddin465465@gmail.com
            </p>
            <p className="text-gray-400">
              <span className="text-gray-500 mr-2">Mobile: </span>
              +8801785240648
            </p>
            <p className="text-gray-400">
              <span className="text-gray-500 mr-2">Address: </span>
              Narsingdi,Dhaka,Bangladesh
            </p>
          </div>
          <div className="flex items-center justify-center space-x-8 my-4">
            <a
              href="https://www.facebook.com/mdsalahuddin2001"
              className="block text-3xl text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="www.github.com/mdsalahuddin2001"
              className="block text-3xl text-gray-400 hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://bd.linkedin.com/mdsalahuddin2001"
              className="block text-3xl text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
