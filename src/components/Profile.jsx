import React from "react";

import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import { useAnimation} from 'framer-motion'


export default function Profile() {
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
      animation.start({x: '200vw'})
    }
  }, [inView])
  return (
    <div 
      ref={ref}
      id="Profile"
      className="w-4/5 grid grid-cols-1 m-auto"
    >
      <motion.figure 
      animate={animation} 
      
      className="w-full mb-5">
        <figcaption className="m-auto text-sm text-start text-gray-300">
          Alvaro con su {" "}
          <a href="#Header" className="text-green-500 text-md">
            Pa
            <span className="text-yellow-500 ">ce</span>
            <span className=" text-green-500 ">llo </span>
          </a>
          8A
        </figcaption>
        <img 
        src="../img/Alvaro_hor.jpg" alt="Imagen de un ojo" 
        className="w-full m-auto"
        />
      </motion.figure>
      
      <div className="w-full">
        <motion.h3
         animate={animation} 
        
        className="mt-6 mb-1 text-2xl font-bold text-gray-300 text-center">
          Profile
        </motion.h3>

          <motion.p
           animate={animation} 
           
           className="text-gray-400 text-lg text-center">
            Mi nombre es Alvaro. Vivo en Montevideo, una pequeña ciudad al
            oriente del río Uruguay, donde nací, vecina a nuestra querida hermana Buenos
            Aires. Pero cuando tenía 9 años mis padres decidieron irse a vivir a Rivera, una ciudad más pequeña aún, que se
            encuentra hacia el noroeste de nuestro país y es lindera a nuestros
            hermanos del Brasil, permanecimos allí durante 15 años pero siempre haciendo alguna visita a la capital. Así fué como crecí escuchando sambas, bossas, milongas y
            tangos. Más de adolescente me cautivaría el rock, sobre todo el más
            pesado. Por aquel entonces, le tomé una guitarra en desuso prestada
            a mi hermano, y la convertí en un bajo. Ese fué el primer
            instrumento que toqué y la primer adaptación que llevé adelante como
            luthier, dos de las tres actividades que más me han apasionado a lo
            largo de mi vida y que he cultivado de manera casi totalmente
            autodidacta. La tercera es el dibujo, quizás la que realizara desde
             edad más temprana, tanto, que no logro recordar cuando dibujé
            por primera vez. Ya de adulto decidí comenzar una formación en la
            Escuela de Bellas Artes de Montevideo, para poder desarrollar mi
            investigación del tiempo, del espacio y de la armonía también en ese campo. Pero de
            esa parte de la historia ya les hablaré más adelante.
          </motion.p>
      </div>
        
        
      
    </div>
  );
}
