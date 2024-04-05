"use client";
import Image from "next/image";
import React, { useState } from "react";
import CarouselSideBar from "./CarouselSideBar";
import EditNoteIcon from '@mui/icons-material/EditNote';

const SideBar = ({ open }) => {

  return (
    <>
    {/* component PC */}
    <div className={`p-3 hidden sm:${ open ? "block" : "hidden"} bg-gray-200 w-80 shadow-sm`}>
        <div className="flex m-2 gap-1 rounded-sm">
          <Image
            src="/agent2.jpg"
            alt="victoria-logo-light"
            width={70}
            height={70}
            className=" rounded-md"
          />
          <h1 className=" text-xl ml-1 text-center">Agente Licitaciones</h1>
        </div>
        <div className="h-60 w-64 mt-4 bg-gray-400/75 border-gray-500/75 hover:border-2 shadow-2xl rounded-md overflow-y-scroll no-scrollbar">
          <div className="ml-2">
            <div className="mt-3">
              <h4 className=" text-sm font-serif mt-3">CONVERSACIONES ANTERIORES:</h4>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación uno
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación dos
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación tres
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación cuatro
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación cinco
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación seis
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación siete
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación ocho
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 ml-24 w-16 h-8 rounded-xl bg-blue-gray-800/50 hover:bg-blue-gray-800 hover:text-white cursor-pointer">
          <button className="">
            +
          </button>
        </div>
        <div className=" text-gray-700 font-bold text-md text-center w-56 mt-2 ml-2">
          Capacitaciones
          <div className="mt-2">
            <CarouselSideBar />
          </div>
        </div>
        <div className="flex flex-row m-2 mt-7 text-slate-300 font-bold text-md text-center pt-4">
          <div className="">
            <p className=" hover:text-white">
              Descubre los beneficios de AI Project
            </p>
          </div>
          <div className="flex align-middle">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>
    </div>
    {/* Component movil */}
    <div className={`flex-initial bg-gray-200 p-3 ${ !open ? "block w-full pl-20" : "hidden"} sm:hidden `}>
        <div className="m-2 gap-1 flex items-center rounded-sm">
          <Image
            src="/agent2.jpg"
            alt="victoria-logo-light"
            width={70}
            height={70}
            className=" rounded-md"
          />
          <h1 className=" text-xl ml-1">Agente Licitaciones</h1>
        </div>
        <div className="h-60 w-64 mt-4 bg-gray-400/75 border-gray-500/75 hover:border-2 shadow-2xl rounded-md overflow-y-scroll no-scrollbar">
          <div className="ml-2">
            <div className="mt-3">
              <h4 className=" text-sm font-serif mt-3">CONVERSACIONES ANTERIORES:</h4>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación uno
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación dos
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación tres
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación cuatro
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación cinco
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación seis
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación siete
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
            <div className="flex justify-between">
              <p className=" m-2 font-serif hover:text-white cursor-pointer">
                Conversación ocho
              </p>
              <EditNoteIcon className="mt-2 cursor-pointer hover:text-white mr-7"/>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 ml-24 w-20 h-10 rounded-xl bg-blue-gray-800/50 hover:bg-blue-gray-800 hover:text-white cursor-pointer">
          <button className="">
            +
          </button>
        </div>
        <div className="m-2 text-gray-300 font-bold text-md text-center w-56 pt-2">
          Capacitaciones
          <div className="mt-2">
            <CarouselSideBar />
          </div>
        </div>
        <div className="flex flex-row m-2 text-slate-300 font-bold text-sm md:text-md text-center pt-4">
          <div className="">
            <p className=" hover:text-white">
              Descubre los beneficios de AI Project
            </p>
          </div>
          <div className="flex align-middle">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>
    </div>
    </>
  );
};

export default SideBar;
