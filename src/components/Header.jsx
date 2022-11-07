import React from "react";
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import { useAnimation} from 'framer-motion'

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });
  const animation = useAnimation();
  useEffect(() => {
    if(inView) {
      animation.start({
        x: 0,
        transition: {
          type: ' spring', duration: 1, bounce: 0.3
        }
      });
    }
    if(!inView) {
      animation.start({x: '-100vw'})
    }
  }, [inView])
  return (
    <div 
    ref={ref}
    
      id="Header"
      className="w-4/5 m-auto mb-5 flex flex-col items-center sm:flex-row justify-between"
    >
      <motion.a
        animate={animation}
        href="#Header">
        <h3
        
         
        
        
        className="text-green-500 text-center text-4xl mb-3 font-extrabold "> 
          Al
          <span className="text-yellow-500 ">va</span>
          <span className=" text-green-500 ">ren<span className="text-red-500 ">ga</span> </span>
          Gr<span className="text-yellow-500">o</span>o
          <span className="text-red-500 ">Ves</span>
        </h3>
      </motion.a>
    

      <motion.a
         animate={animation}
        
        href="#Profile"
        className="font-bold  text-gray-300 hover:text-yellow-500"
      >
        Profile
      </motion.a>
      <motion.a
      animate={animation}  
        
        href="#Groove" 
        className="font-bold text-gray-300 hover:text-red-500 "
        >
        Groove
      </motion.a>
      <motion.a
        animate={animation}
       
        href="#ElOjo" 
        className="font-bold text-gray-300 hover:text-lime-500 "
        >
        Listen
      </motion.a>
      <motion.a
       animate={animation}  
        
        href="#Bass" 
        className="font-bold text-gray-300 hover:text-red-500 "
        >
        Bass
      </motion.a>
      <motion.a
       animate={animation}  
        
        href="#Paint"
        className="font-bold text-gray-300 hover:text-yellow-500 "
      >
        Paint
      </motion.a>
    
    </div>
  );
};

export default Header;
