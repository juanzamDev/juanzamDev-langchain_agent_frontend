"use client";
import Image from "next/image";
import React, { useState } from "react";
import SelectAgent from "./SelectAgent";
import { createUser } from "@/app/api/createUser";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {

  const router = useRouter();
  // local state
  const [user, setUser] = useState({
    name: '',
    agents: [],
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertTrue, setAlertTrue] = useState(false);
  const [answer, setAnswer] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleChange= (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await createUser(user); 
      console.log(response);
      if(response.message === "¡El usuario ya está registrado!"){
        setAlert(true)
        setAnswer(response.message)
        setAlertTrue(false)
      }else{
        setAlertTrue(true)
        setAnswer(response.message)
        setAlert(false)
        localStorage.setItem("message", response.message);
        router.push('/login');
      }
    } catch (error) {
        console.error('Error al enviar los datos del usuario:', error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-solid">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/impre.png"
          alt="Vercel Logo"
          className="dark:invert mx-8"
          width={50}
          height={50}
          priority
        />
        <h2 className="mt-2 text-3xl leading-9 tracking-tight text-gray-900">
          Registrarse como nuevo usuario
        </h2>
      </div>
      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      {alert && 
      <>
        <div class="bg-yellow-900 text-center py-4 lg:px-4 mb-2 -ml-10 rounded-md">
          <div class="p-2 bg-yellow-800 items-center text-black leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span class="flex rounded-full bg-yellow-500 uppercase px-2 py-1 text-xs font-bold mr-3">Danger</span>
            <span class="font-semibold mr-2 text-left flex-auto">{answer} </span>
            <Link className="font-semibold" href="/login">Iniciar sesión</Link>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
          </div>
        </div> 
        {/* <div role="alert">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>por favor llene todos los campos.</p>
          </div>
        </div>
        <div class="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md mt-2" role="alert">
          <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="font-bold">alerta</p>
              <p class="text-sm">Por favor llene todos los campos.</p>
            </div>
          </div>
        </div> */}
      </>
      }
      
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                value={user.name}
                onChange={(e) => handleChange(e)}
                className=" block w-80 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Agentes autorizados
            </label>
            <div className="mt-2">
              <SelectAgent user={user} setUser={setUser}/>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium  text-gray-900"
            >
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={user.email}
                onChange={(e) => handleChange(e)}
                className="block w-80 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between w-80">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Contraseña
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-xs"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={user.password}
                onChange={handleChange}
                required
                className="block w-80 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
