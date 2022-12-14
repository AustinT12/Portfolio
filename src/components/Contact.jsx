import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#003366] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/bc357375-5599-4a20-9f93-70c11eeaed41'
        className='flex flex-col max-w-[600px] w-full br-5'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#8892b0] text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4' >
            Submit the form below or send me an email at austintran85@gmail.com.
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2 rounded-lg'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6] rounded-lg'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2 rounded-lg' 
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-[#0b81f6] hover:border-blue-600 rounded-full px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
