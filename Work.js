import React from 'react';

import {motion} from "framer-motion"
import {fadeIn} from "../variants"
import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/portfolio-img2.png"



const Work = () => {
return (
  <section id="work" className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : false, amount : 0.3}} >
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br />
              Works.
            </h2>
            <p className='max-w-sm mb-16'>
              Previously I have build many portfolios
              but one of the most intresting tasks
              was working on a website providing a 
              learning content with Python Programming
              Language.
            </p>
            <button className='btn btn-sm'>View All projects</button>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : false, amount : 0.3}} 
          className='group relative overflow-hidden border-2
          border-white/50 rounded-x1'>
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500'
            src={Img1} />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24
             transition-all duration-500 z-50'>
              <span className='text-gradient'>Learning website.</span>
             </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14
             transition-all duration-700 z-50'>
              <span>Python learning website.</span>
              </div>
            <div className='absolute -bottom-full left-12
            group:hover:bottom-12 transition-all duration-700 z-50'>

            </div>
          </motion.div>
        </div>
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false, amount : 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
        <div className='group relative overflow-hidden border-2
          border-white/50 rounded-x1'>
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500'
            src={Img2} />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24
             transition-all duration-500 z-50'>
              <span className='text-gradient'>Portfolio</span>
             </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14
             transition-all duration-700 z-50'>
              <span>Created many portfolios.</span>
              </div>
            <div className='absolute -bottom-full left-12
            group:hover:bottom-12 transition-all duration-700 z-50'>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
