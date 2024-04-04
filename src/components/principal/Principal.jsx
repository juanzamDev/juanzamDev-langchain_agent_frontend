"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Principal = async() => {
    
  return (
        <div className='container mx-auto flex flex-col'>
            <div className="">
              <h1 className="text-2xl md:text-5xl mb-4 font-bold font-sans text-center">Plataforma de Agentes impulsados por IA</h1>
              <p className="text-md md:text-lg text-center text-gray-500">&#129302; Este portal te permite consultar diversos agentes expertos en áreas/procesos específicos de Impresistem.</p>
              <br/>
            </div>
            <div className='flex justify-start flex-col md:flex-row mt-0 md:mt-10'>
                <div className="">
                  <h1 className="text-2xl md:text-5xl font-bold font-sans mb-2 mt-4">Automatización, análisis y mejora continua</h1>
                  <p className="text-md font-serif text-gray-700 mb-4 md:text-2xl">La inteligencia artificial y los modelos de lenguaje de gran escala (LLM, por sus siglas en inglés) están revolucionando la forma en que las empresas optimizan sus procesos y mejoran la experiencia de sus clientes.</p>
                  <div className="mb-10 md:mb-4">
                    <Link className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded text-xl" href="https://www.impresistem.com/es/" target="_blank">
                      Impresistem
                    </Link>
                  </div>
                </div>
                <div className='ml-0 md:ml-2'>
                  <Image
                      src="/inicio.jpg"
                      alt="inicio"
                      width={2500}
                      height={1000}
                      className='rounded-lg static'
                      priority={true}
                  />
                </div>
            </div>
        </div>
    );
};

export default Principal;