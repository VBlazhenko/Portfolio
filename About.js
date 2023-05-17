import React from 'react';

import CountUp from "react-countup";
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import {fadeIn, fadein} from "../variants"

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section id="about" className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {}
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false, amount : 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top'>

        </motion.div>
        {}
        <div className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with over 5 years of
             experience.
          </h3>
          <p className='mb-6'>
            Lorem ipsum is placeholder text commonly
            sed in the graphic. Lorem ipsum is placeholder text commonly
            sed in the graphic.
          </p>
          {}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div> 
              <div className='text-[40px] font-teritary text-gradient
              mb-2'> 
                {inView ? <CountUp start={1} end={5} duration={3}/> :
                null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience
              </div>
            </div>
            <div> 
              <div className='text-[40px] font-teritary text-gradient
              mb-2'> 
                {inView ? <CountUp start={1} end={5} duration={3}/> :
                null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
            <div> 
              <div className='text-[40px] font-teritary text-gradient
              mb-2'> 
                {inView ? <CountUp start={1} end={5} duration={3}/> :
                null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
