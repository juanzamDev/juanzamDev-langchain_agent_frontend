import React, { useState } from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import Image from "next/image"; 

const Graphics = ({ open, openT }) => {
  
  return (
    <>
      <div className={`flex-initial m-4 p-4 hidden sm:block`}>
        <div className="">
          <div className="">
            <div className="flex font-sans font-bold gap-1">
              <BarChartIcon className=" cursor-pointer hover:text-white "/>
              <h1 className="text-xl text-center">Análisis de documentos</h1>
            </div>
            <hr className=" border-gray-900 mt-4" />
            <Image src="/documents.jpg" width={500} height={500} alt="Chart" className=" cursor-pointer"/>
            <p className="mt-2">Nombre documento</p>
          </div>
          <div className="">
            <div className="flex  font-sans font-bold mt-5 gap-2 m-2">
              <BarChartIcon className=" cursor-pointer hover:text-white "/>
              <h1 className="text-xl ml-7">Descripción</h1>
            </div>
            <Image src="/documentsecond.jpg" width={500} height={500} alt="Chart" />
            <div className="flex justify-between mt-10 w-68 bg-gray-100 rounded-md m-2 shadow-md pb-2">
              <p className="ml-2 mt-3 text-blue-gray-700">consulta externa</p>
              <button className="  font-bold py-2 px-4 rounded border-collapse mt-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-initial m-4 p-4 ${openT  ? "hidden sm:block" : "sm:block"} sm:hidden`}>
        <div className="">
          <div className="">
            <div className="flex flex-wrap font-sans font-bold gap-1">
              <BarChartIcon className=" cursor-pointer hover:text-white "/>
              <h1 className="text-xl">Análisis de documentos</h1>
            </div>
            <hr className=" border-gray-900 m-4" />
            <Image src="/documents.jpg" width={500} height={500} alt="Chart" className=" cursor-pointer"/>
            <p className="mt-2">Nombre documento</p>
          </div>
          <div className="">
            <div className="flex flex-wrap font-sans font-bold mt-5 gap-2 m-2">
              <BarChartIcon className=" cursor-pointer hover:text-white "/>
              <h1 className="text-xl">Descripción</h1>
            </div>
            <Image src="/documentsecond.jpg" width={500} height={500} alt="Chart" />
            <div className="flex justify-between mt-10 w-68 bg-gray-100 rounded-md m-2 shadow-md pb-2">
              <p className="ml-2 mt-3 text-blue-gray-700">consulta externa</p>
              <button className="  font-bold py-2 px-4 rounded border-collapse mt-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphics;
