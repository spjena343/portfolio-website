import React from 'react';
import Lottie from "react-lottie";

import { HiArrowNarrowRight } from 'react-icons/hi'
const Home = () => {

  return (
    <div name='home' className='w-full h-screen bg-[#070708] flex flex-row'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <p className='text-[#c1a6db] '>Hi, my name is</p>

        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] pl-39'>
         STHITA
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Developer.
        </h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specially intrested in frontend devlopment. Currently, I’m focused on
          building responsive front-end of web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5430a8] hover:bg-[#5430a8]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
   
        </div>
       
      </div>

      <div>
   
      </div>
<div>

</div>
    
      
    </div>
  );
};

export default Home;
