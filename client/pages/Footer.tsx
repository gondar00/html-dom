import React from 'react';

import SubscribeForm from '../components/SubscribeForm';

const Footer: React.FC<{}> = () => {
  return (
    <div className='border-t pt-6 pb-16 border-gray-400'>
      <div className='ml-auto mr-auto max-w-3xl px-2 lg:px-0'>
        <SubscribeForm />
        <div className='mt-6'>
          <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Follow me <span className='font-light text-gray-600 ml-2'>I love building products!</span></h3>
          <ul className='flex'>
            <li className='flex-1'>
              <a
                href="https://github.com/gondar00"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
                target="_blank"
              >
                <div className='font-semibold'>Github</div>
                <span className='text-gray-600'>@gondar00</span>
              </a>
            </li>
          </ul>
        </div>

        <div className='pt-4'>
          © 2020 Gandharv kumar garg. Unless otherwise noted, all code is free to use under the MIT License.
        </div>
      </div>
    </div>
  );
};

export default Footer;
