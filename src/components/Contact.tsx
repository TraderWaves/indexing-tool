import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-3xl font-semibold text-white">Subscribe to our Newsletter</h2>
        <div className="flex justify-center">
          <form className="w-full max-w-md">
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[60px] w-full rounded-full border-0 px-6 text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className={`
                  absolute right-1 top-1 h-[50px] w-[160px] rounded-full bg-gradient-to-r from-blue-700 to-indigo-500
                  text-lg font-semibold text-white transition-all duration-300 ease-in-out
                  hover:bg-blue-600 hover:text-white/80
                `}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
