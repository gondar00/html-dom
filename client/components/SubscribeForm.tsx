import React from 'react';

const SubscribeForm: React.FC<{}> = () => {
  return (
    <div className='text-center mb-8'>
      <form>
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input pattern="^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email address" aria-label="Full name" required />
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
