import React from "react";
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import { useAnimation} from 'framer-motion'

export default function Groove() {
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
    <div ref={ref}
      id="Groove"
      className="w-4/5 mt-10 gap-10 grid grid-cols-1 md:flex m-auto"
    >
      <motion.figure 
      
      animate={animation}
      
      className="w-full">
        <figcaption className="text-gray-300 text-md sm:text-lg mb-1">
          El Ojo (2016)
        </figcaption>
        <img src="../img/16.jpg" alt="Imagen de un ojo" />
      </motion.figure>
      <motion.div
      
      className="w-full">
        <motion.h3 
        animate={animation}
        className="mb-5 text-2xl text-gray-300 text-center">
          El Ojo, mi primer álbum solista
        </motion.h3>
        <div>
          <motion.p 
          animate={animation}
          className="text-gray-400 text-lg text-center">
            El Ojo es mi primer álbum de estudio. Después de años de recorrer
            diversos géneros y estilos me fuí acercando al Jazz y al Jazz
            Fussión. Y de eso se trata este disco. Tuve el honor de ser miembro
            estable del <span><a href=""> Hot Club de Montevideo</a></span>, la primer escuela de Jazz de
            nuestro país que funciona desde hace más de 70 años. Fué una fuente de crecimiento y aprendizaje inagotable
            durante el tiempo que pude permanecer allí. Luego llegó un momento
            en que mi enfermedad no me permitió continuar, pero atesoro en mi
            corazón el riquísimo intercambio con enormes músicos del Jazz, como
            Horacio "Bocho" Pintos(uno de los fundadores)o Ricardo Leon, uno de los
            mas grandes pianistas que tuve la inmensa fortuna de conocer entre otros.
            También a los músicos que me acompañaron en la construcción de este
            mundo imaginario que es El Ojo, a Guille y a Daniel Rodons y a Daniel Báez les
            estaré eternamente agradecido. A la vez que transcurría en ese
            camino de aprendizaje iba desarrollando a la par el bajo como
            luthier, y en mi curiosidad y búsqueda de sonidos nuevos y nuevas
            posibilidades, le fuí agregando cuerdas, hasta llegar a un instrumento de 8,
            y posteriormente al de 10. Con ese primer experimento de 8 fué que
            se grabó este trabajo. Espero poder llegar a hacer lo propio con el
            de 10 en algún momento.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
