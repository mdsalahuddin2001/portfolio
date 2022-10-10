import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  //   Toggle links
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // handle scroll
  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };
  return (
    <nav className="py-4 shadow fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="container lg:flex items-center justify-between">
        <div className="flex items-center justify-between">
          <img
            src="./logo.png"
            alt="logo"
            className="w-8
          "
          />
          <button
            className="lg:hidden text-primary text-2xl"
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          ref={linksContainerRef}
          className="h-0 overflow-hidden lg:overflow-visible lg:!h-auto transition-all duration-400"
        >
          <ul
            ref={linksRef}
            className="block lg:flex list-none m-0 pt-6  lg:pt-0 space-y-2 lg:space-y-0 items-center lg:space-x-6 uppercase text-sm text-gray-600   "
          >
            <li className="hover:text-primary transition cursor-pointer">
              <a href="#home" onClick={handleScroll}>
                home
              </a>
            </li>
            <li className="hover:text-primary transition cursor-pointer">
              <a href="#about" onClick={handleScroll}>
                about
              </a>
            </li>
            <li className="hover:text-primary transition cursor-pointer">
              <a href="#projects" onClick={handleScroll}>
                projects
              </a>
            </li>
            <li className="hover:text-primary transition cursor-pointer">
              <a href="#contact" onClick={handleScroll}>
                contact
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#contact"
                onClick={handleScroll}
                className="px-8 py-3 cursor-pointer uppercase transition duration-300 hover:shadow-xl rounded-sm active:scale-95 bg-primary text-white"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
