import React from "react";

export default function Bass() {
  return (
    <div
      id="Bass"
      className="w-4/5 m-auto mt-8 grid grid-cols-1"
    >
      
      <div className="w-full ">
      <h3
        className="text-green-500 text-center text-xl  mb-6"> 
          Al
          <span className="text-yellow-500 ">va</span>
          <span className=" text-green-500 ">ren<span className="text-red-500 ">ga</span> </span>
          Gr<span className="text-yellow-500">o</span>o
          <span className="text-red-500 ">Ves</span><span className="text-sm text-white font-light"> Luthier</span>
        </h3>
        
        

        <figure className="w-full m-auto mt-15 mb-5 flex flex-col">
        <img src="../img/bajo.jpg" alt="Imagen de un bajo eléctrico" />
        <figcaption className="text-gray-300 text-xs"><p className=" text-green-500 text-xs">Al
          <span className="text-yellow-500 ">va</span>
          <span className=" text-green-500 ">ren<span className="text-red-500 ">ga</span> </span> 
        Gr<span className="text-yellow-500">
        o</span>
        o
          <span className="text-red-500 ">Ves</span> <span className="text-white">Series P-8A </span>
          </p>
          <p><span className="text-xs">Eigth strings electric bass. (Hand Made)</span></p></figcaption>
          
      </figure>
        
        <div>
          <p className="text-gray-400 text-lg text-center">
            Desde aquella guitarra que tomara prestada de mi hermano para transformar en un bajo en mi adolescencia, mi pasión por la luthiería solo fué en aumento. Trabajar la madera me genera un enorme placer, sus aromas, los caprichosos y bellos dibujos de las vetas y sus nudos, las diferentes texturas y durezas hicieron que esta actividad se transformara en una de las imprescindibles en mi vida. La enorme satisfacción, luego de dedicar incontables horas al proceso de transformación de la madera, medir meticulosamente cada trozo, cortarlos para luego pasar al proceso final de ensamblado y darles lustre,  es algo que no puedo comparar con ninguna otra cosa que haya hecho. Fueron años de perfeccionar el arte de elegir las maderas correctas, estudiando su elasticidad, sus resonancias, su nobleza, para encontrar la más adecuada a la función que debiera cumplir, ya fuera un puente, un clavijero o diapazón. El proceso de finalización, darle los detalles estéticos, la elección de una electrónica adecuada, eran parte de un proceso increíble que acabaría en una sensación muy difícil de explicar, pocas cosas he sentido tan gratificantes como el escuchar los primeros sonidos emergiendo de aquellos trozos amorfos de madera originales, que a fuerza de constancia, esfuerzo y mucha paciencia lograba  transformar.
          </p>
        </div>
      </div>
    </div>
  );
}
