import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SubscribeForm from '../components/SubscribeForm';
import PostList from '../constants/PostList';
import { unslugify } from '../helpers/slugify';
import Layout from './Layout';

const HomePage = () => {
  return (
    <Layout>
      {/* <Helmet>
        <title>gabru.code</title>
        <meta name='description' content='A collection of all the handy tips and gists for a developer' />
      </Helmet> */}
      <h1 className='font-bold mt-24 text-center text-2xl sm:text-4xl px-1'>This is my <span className='bg-blue-200 p-1'>technical</span> blog</h1>
      <h4 className='font-light mb-16 text-xl text-center italic'>I will send out a short email each weekend with code snippets, tools, techniques, and interesting stuff from around the web you can hit the Subscribe button for the latest news on my posts. No spam. Ever!</h4>
      <SubscribeForm />
      <div className='ml-auto mr-auto max-w-4xl'>
        <ul>
          {
            PostList.map((post, index) => {
              const idx = (index < 9) ? `0${index + 1}` : `${index + 1}`;
              return (
                <li key={post.slug} className='mb-4'>
                  <Link
                    to={`/${post.slug}`}
                    className='bg-gray-200 px-2 py-1 flex items-center justify-between'
                  >
                    <span className='mr-2'>{idx} — {unslugify(post.slug)}</span>
                    <span
                      className={`
                        p-1 text-sm text-white rounded
                        ${post.level === 'Basic' ? 'bg-gray-600' : ''}
                        ${post.level === 'Intermediate' ? 'bg-blue-600' : ''}
                        ${post.level === 'Advanced' ? 'bg-red-600' : ''}
                    `}
                    >
                      {post.level.toLowerCase()}
                    </span>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </Layout>
  );
};

export default HomePage;
