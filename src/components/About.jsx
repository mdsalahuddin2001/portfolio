import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-brownWhite py-12 pb-20">
      <div className="container">
        <SectionTitle>About</SectionTitle>
        <div className="max-w-4xl bg-white px-4 py-8  m-auto mt-20 relative">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="absolute w-32 h-32 -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-md"
          />
          <h4 className="text-2xl uppercase text-center text-gray-600 font-raleway mb-4 mt-12 ">
            MD Salahuddin
          </h4>
          <div className="flex items-center justify-center space-x-6 mb-6">
            <a
              href="https://www.facebook.com/mdsalahuddin2001"
              className="block text-3xl text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="www.github.com/mdsalahuddin2001"
              className="block text-3xl text-gray-400 hover:text-black transition"
              text-2xl
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
          <p className="lg:text-justify text-gray-400 font-light max-w-3xl m-auto">
            Hi I am MD Salahuddin. A Frontend Web Developer from Bangldesh. I
            love coding,solving problems,building projects,reading books. I
            believe ,there's no limit of learning!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
