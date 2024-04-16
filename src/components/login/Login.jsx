"use client";
import { loginUser } from "@/app/api/createUser";
import { loginInfo } from "@/redux/features/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Login = () => {

  // Dispatch instance
  const dispatch = useDispatch() 

  // Router
  const router = useRouter();
  
  // Local state
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [alertLoginFalse, setAlertLoginFalse] = useState(false);
  const [alertTrue, setAlertTrue] = useState(false);
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState(false);

  // User created success
  useEffect(() => {
    const messageFromStorage = localStorage.getItem("message");
    if (messageFromStorage === "Usuario registrado con éxito") {
      setMessage(messageFromStorage);
      setAlertTrue(true);
      const timeout = setTimeout(() => {
        setMessage("");
        setAlertTrue(false);
        localStorage.removeItem("message");
        localStorage.removeItem("refresh");
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, []);

  // Last value state user
  const handleChange= (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // Remember function
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // Show/hide password function
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  // Remember or not user
  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedPassword = localStorage.getItem('rememberedPassword');

    if (storedEmail && storedPassword) {
      setUser({
        email: storedEmail,
        password: storedPassword
      });
      setRememberMe(true);
    }
  }, []);

  // Remember storage
  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', user.email);
      localStorage.setItem('rememberedPassword', user.password);
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }
  }, [rememberMe, user]);

  // Request login
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await loginUser(user);
      if(response.success === true){
        dispatch(loginInfo(response))
        localStorage.setItem("refresh", true);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("agents", JSON.stringify(response.agents));
        localStorage.setItem("user", response.username);
        router.push('/agents');
      }else if(response.success === false){
        setAlertLoginFalse(true);
        setAnswer(response.message)
      }else{
        console.log("error autenticación")
      }
    }catch (error) {
      console.log("error al iniciar sesión",error)
    }

  };
  
  return (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-4 lg:px-8 border-solid">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <Image
          src="/impre.png"
          alt="Vercel Logo"
          className="dark:invert mx-8 mt-4"
          width={50}
          height={50}
          priority
        />
        <h2 className="mt-2 leading-9 tracking-tight text-gray-900">
          Inicia sesión para continuar
        </h2>
        {alertTrue && 
        <div class="bg-green-900 text-center py-3 -ml-10 ">
          <div class="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">exitoso</span>
            <span class="font-semibold mr-2 text-left flex-auto">{message}</span>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
          </div>
        </div>
        }
        {alertLoginFalse &&
          <div class="bg-red-900 text-center py-4 lg:px-4 mb-2 mt-3 -ml-10 rounded-md">
            <div class="p-2 bg-red-800 items-center text-black leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Alerta</span>
              <span class="font-semibold mr-2 text-left flex-auto text-black/75">{answer} </span>
              <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
          </div>
        }
      </div>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
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
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                contraseña
              </label>
              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Olvido contraseña?
                </a>
              </div> */}
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
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
              Recuérdame
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
