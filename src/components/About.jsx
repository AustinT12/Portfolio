import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#003366] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-8 gap-1'>
          <div className='sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#8892b0]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 space-lg tracking-wide'>
          <div className='sm:text-left text-4xl font-bold'>
            <p>
              Hi
              <span className='waving-hand'>👋🏻</span>
              I'm Austin, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p
              className='letter-spacing: 0.025em tracking-wide 
              '
            >
              <div>
                I am a driven, goal-oriented, problem solver who takes immense
                pleasure in helping others succeed.
              </div>
              <br />
              <div>
                I am currently a student at Clayton State University, where I am
                majoring in Computer Science (4th year).
              </div>
              <br />
              <div>
                I am passionate about building excellent software that improves
                the lives of those around me.
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
