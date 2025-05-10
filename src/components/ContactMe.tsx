"use client";

import { useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    error: false,
    success: false
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, error: false, success: false });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: `${formData.firstName} ${formData.lastName}`,
          message: formData.message,
          from_email: formData.email,
          title: "Portfolio Contact Form"
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus({ loading: false, error: false, success: true });
      setFormData({ firstName: '', lastName: '', email: '', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ loading: false, error: true, success: false });
    }
  };

  return (
    <div className="isolate min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-20 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Contact Me
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">
          Let&apos;s connect and discuss your project or opportunity.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-semibold leading-6 text-gray-200"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                required
                id="from_name"
                name="from_name"
                type="text"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-semibold leading-6 text-gray-200"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                required
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="from_email"
              className="block text-sm font-semibold leading-6 text-gray-200"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                id="from_email"
                name="from_email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-200"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={status.loading}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center hover:cursor-pointer text-sm font-semibold text-white shadow-sm transition-all duration-300 
              ${status.loading 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              }`}
          >
            {status.loading ? 'Sending...' : 'Lets talk'}
          </button>

          {status.success && (
            <p className="mt-4 text-center text-green-500">
              Message sent successfully!
            </p>
          )}

          {status.error && (
            <p className="mt-4 text-center text-red-500">
              Failed to send message. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
