import { useState } from 'react';
import Button from './Button';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <section className="bg-brownWhite py-12">
      <div className="container">
        <SectionTitle>Contact</SectionTitle>
        <div className="flex items-center max-w-4xl m-auto bg-white">
          <img
            src="/illustration.svg"
            alt="illustration"
            className="hidden lg:block max-w-sm p-12"
          />
          <form className="p-8 w-full space-y-4">
            <input
              type="text"
              className="block w-full border border-gray-400 px-2 py-2 text-gray-800 font-light focus:outline-none"
              placeholder="Full name"
            />
            <input
              type="email"
              placeholder="Email"
              className="block w-full border border-gray-400 px-2 py-2 text-gray-800 font-light focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="block w-full border border-gray-400 px-2 py-2 text-gray-800 font-light h-24 focus:outline-none"
            ></textarea>

            <Button type="submit" className="text-xs">
              Send Your Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
