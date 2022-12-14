import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#003366]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ccd6f6] text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Austin Tran
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Jr. Software Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] tracking-wide fs-10 text-md'>
          I’m a software developer specializing in building occasionally
          exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications. 
        </p>
        <Link to='work'>
          <button className='text-white group border-2 rounded-full px-6 py-3 my-2 flex items-center hover:bg-[#0b81f6] hover:border-blue-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
