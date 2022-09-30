import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button';
import SectionTitle from './SectionTitle';
import Loader from './Loader';
import { useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // handle contact form
  const [state, handleSubmit] = useForm('mjvzrgyz');
  const { submitting, succeeded } = state || {};

  useEffect(() => {
    let successTimeout;
    if (succeeded) {
      setName('');
      setEmail('');
      setMessage('');
      setSuccessMessage('We received your message! Thank You.');
      successTimeout = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
    return () => {
      clearTimeout(successTimeout);
    };
  }, [succeeded]);
  return (
    <section className="py-12">
      <div className="container">
        <SectionTitle>Contact</SectionTitle>
        <div className="flex items-center max-w-4xl m-auto bg-white shadow-lg">
          <img
            src="/illustration.svg"
            alt="illustration"
            className="hidden lg:block max-w-sm p-12"
          />
          <form className="p-8 w-full space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border border-gray-400 px-2 py-2 text-gray-800 font-light focus:outline-none"
              placeholder="Full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="block w-full border border-gray-400 px-2 py-2 text-gray-800 font-light focus:outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              placeholder="Your Message"
              className="block w-full border border-gray-400 px-2 py-2 text-gray-800 font-light h-24 focus:outline-none"
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <Button
              type="submit"
              className="text-xs w-48 hover:bg-primary hover:text-white hover:shadow-lg flex items-center justify-center"
            >
              {submitting ? <Loader /> : 'Send Your Message'}
            </Button>
            <p className="text-green-500">{successMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
