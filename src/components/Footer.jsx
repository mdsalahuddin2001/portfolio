const Footer = () => {
  return (
    <footer class=" bg-[#535461]  shadow md:px-6 py-4 flex items-center justify-center">
      <img src="./logo.png" class="mr-3 h-8" alt="Flowbite Logo" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{' '}
        <a
          href="https://www.linkedin.com/in/mdsalahuddin2001/"
          target="_blank"
          rel="noreferrer"
          class="hover:underline"
        >
          MD Salahuddin
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
export default Footer;
