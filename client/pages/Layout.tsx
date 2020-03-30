import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Filter from '../components/Filter';
import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className='flex-1 px-2 lg:px-0'>
        <div className="ml-auto mr-auto max-w-3xl mb-8">
          <div className='flex items-center justify-between py-8'>
            <Link to='/' className='bg-black p-1 rounded text-2xl sm:text-3xl font-light text-white'>&lt;/dom&gt;</Link>
            <div className='w-2/3 sm:w-1/2'>
              <Filter />
            </div>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
