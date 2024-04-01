"use client";
import Image from "next/image";
import React, { useState } from "react";
import CarouselSideBar from "./CarouselSideBar";

const SideBar = ({ open }) => {

  return (
    <>
    {/* component PC */}
    <div className={`bg-indigo-800 text-white p-3 hidden sm:${ open ? "block" : "hidden"}`}>
        <Image
          src="/victoria-logo-light.png"
          alt="victoria-logo-light"
          width={170}
          height={170}
          className="p-2 m-4 ml-7 mt-2 shadow-md bg-blue-indigo-900 opacity-90 hover:opacity-100"
        />
        <div className="h-60 w-64 border-indigo-500/75 hover:border-2 shadow-2xl rounded-md overflow-y-scroll no-scrollbar">
          <div className="ml-2">
            <div className="">
              <h4 className="titleSide text-gray-400 font-serif">Hoy</h4>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Quiero conocer las estadisti...
              </p>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Quiero conocer las estadisti...
              </p>
            </div>
          </div>
          <div className="ml-2">
            <div className="">
              <h4 className="titleSide text-gray-400 font-serif">Semana Anterior</h4>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cuales son los laptops co...
              </p>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cuales son los laptops co...
              </p>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cuales son los laptops co...
              </p>
            </div>
          </div>
          <div className="ml-2">
            <div className="">
              <h4 className="titleSide text-gray-400 font-serif">Mes Anterior</h4>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cual es el promedio de ventas men...
              </p>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cual es el promedio de ventas men...
              </p>
            </div>
          </div>
        </div>
        <div className="m-2 text-gray-300 font-bold text-md text-center w-56 pt-2">
          Capacitaciones
          <div className="mt-2">
            <CarouselSideBar />
          </div>
        </div>
        <div className="flex flex-row m-2 text-slate-300 font-bold text-md text-center pt-4">
          <div className="">
            <p className=" hover:text-cyan-500">
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
                className="w-8 h-8 hover:text-cyan-500"
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
    <div className={`flex-initial bg-indigo-800 text-white p-3  ${ !open ? "block" : "hidden"} sm:hidden`}>
        <Image
          src="/victoria-logo-light.png"
          alt="victoria-logo-light"
          width={170}
          height={170}
          className="p-2 m-4 ml-7 mt-2 shadow-md bg-blue-indigo-900 opacity-90 hover:opacity-100"
        />
        <div className=" h-60 w-64 border-indigo-500/75 hover:border-2 shadow-2xl rounded-md overflow-y-scroll no-scrollbar">
          <div className="ml-2">
            <div className="">
              <h4 className="titleSide text-gray-400 font-serif">Hoy</h4>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Quiero conocer las estadisti...
              </p>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Quiero conocer las estadisti...
              </p>
            </div>
          </div>
          <div className="ml-2">
            <div className="">
              <h4 className="titleSide text-gray-400 font-serif">Semana Anterior</h4>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cuales son los laptops co...
              </p>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cuales son los laptops co...
              </p>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cuales son los laptops co...
              </p>
            </div>
          </div>
          <div className="ml-2">
            <div className="">
              <h4 className="titleSide text-gray-400 font-serif">Mes Anterior</h4>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cual es el promedio de ventas men...
              </p>
            </div>
            <div className="">
              <p className="descriptionSide m-2 font-serif hover:text-cyan-500 cursor-pointer">
                Cual es el promedio de ventas men...
              </p>
            </div>
          </div>
        </div>
        <div className="m-2 text-gray-300 font-bold text-md text-center w-56 pt-2">
          Capacitaciones
          <div className="mt-2">
            <CarouselSideBar />
          </div>
        </div>
        <div className="flex flex-row m-2 text-slate-300 font-bold text-md text-center pt-4">
          <div className="">
            <p className=" hover:text-cyan-500">
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
                className="w-8 h-8 hover:text-cyan-500"
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
