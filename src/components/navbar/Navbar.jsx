"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {

  // Router
  const router = useRouter();
  
  //local state
  const [state, setState] = useState(false);
  const [activeLink, setActiveLink] = useState("Inicio");
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn);
    setActiveLink("Perfil");
  }, []);

  useEffect(() => {
    setState(prevState => !prevState);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setActiveLink("Inicio")
    router.push("/");
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={()=> setState( newState => !newState)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5 "></span>
              {/* <span className="sr-only">Open main menu</span> */}
              {/* 
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
             */}
              <svg
                className={ `${state ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className={`${state? 'hidden': 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  src="/victoria-logo-light.png"
                  alt="Victoria"
                  className="dark:invert mx-4"
                  width={150}
                  height={150}
                  priority
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${activeLink === "Inicio" && "underline"}`}
                  onClick={() => setActiveLink("Inicio")}
                >
                  Inicio
                </Link>
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/agents"
                      className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${activeLink === "Perfil" && "underline"}`}
                      onClick={() => setActiveLink("Perfil")}
                    >
                      Perfil
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Salir
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${activeLink === "Ingresar" && "underline"}`}
                      onClick={() => setActiveLink("Ingresar")}
                    >
                      Ingresar
                    </Link>
                    <Link
                      href="/register"
                      className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${activeLink === "Registrarse" && "underline"}`}
                      onClick={() => setActiveLink("Registrarse")}
                    >
                      Registrarse
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div className="relative ml-3 flex">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu" style={{display: state ? 'none' : ''}}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${activeLink === "Inicio" && "underline"}`}
            onClick={() => setActiveLink("Inicio")}
          >
            Inicio
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                href="/agents"
                className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${activeLink === "Perfil" && "underline"}`}
                onClick={() => setActiveLink("Perfil")}
              >
                Perfil
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Salir
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${activeLink === "Ingresar" && "underline"}`}
                onClick={() => setActiveLink("Ingresar")}
              >
                Ingresar
              </Link>
              <Link
                href="/register"
                className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${activeLink === "Registrarse" && "underline"}`}
                onClick={() => setActiveLink("Registrarse")}
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
Navbar;
