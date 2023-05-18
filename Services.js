import React from 'react';

import {BsArrowUpRight} from "react-icons/bs";
import {motion} from "framer-motion";
import { fadeIn } from '../variants';

const service = [
  {
    name: "Website Development",
    description: "Able to develop any website in a way you desire.",
    link: "Learn more",
  },
  {
    name: "Website from scratch",
    description: "If you are not satisfied with the website you have, I can make it better.",
    link: "Learn more",
  },
  {
    name: "Portfolios",
    description: " What can be better than having your own portfolio?.",
    link: "Learn more",
  }
];

const Services = () => {
  return (
  <section id="service" className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : false, amount : 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I do.</h2> 
          <h3 className='h3 max-w-[455px] mb-16'>Experienced in many fields.</h3> 
          <div className='flex gap-x-8 items-center'>
            <a href='https://www.linkedin.com/in/vladyslav-blazhenko-585007206/' className='text-gradient btn-link'>
              See more.
            </a>
          </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : false, amount : 0.3}}
          className='flex-1'>
            <div>
              {service.map((service, index) => {
                const {name, description, link} = service;
                return (
                <div classname="border-b border-white/20 h-[146px] mb-[38px]
                flex" 
                key={index}
                >
                  <div classname="max-w-[476px]">
                    <h4 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center
                    items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div> 
    </section>
  );
};

export default Services;
