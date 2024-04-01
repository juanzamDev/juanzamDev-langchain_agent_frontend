"use client"
import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import FileUpload from "./FileUpoad";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { tenderAgentQuery } from "@/app/api/agentQuery";

const ChatBot = ({ open, openT }) => {

  const [response, setResponse] = useState(false);
  const [ query, setQuery] = useState("");
  const files = []
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const submitHandler = () => {

    tenderAgentQuery(query, files)
    setResponse(true);
  }

  return (
    <div className={`bg-gray-300 p-8 ${!openT || !open ? "hidden" : "block"} sm:block`}>
        <div className="">
          <div className="">
            <h1 className="font-bold mb-3 text-3xl text-center font-sans">
              Agente Licitaciones
            </h1>
            <div className="m-2 gap-1 flex justify-center text-justify">
              <Diversity2Icon className="cursor-pointer hover:text-white "/>
              <h1 className=" text-md ml-1">Un asistente legal que ayuda a los usuarios a estudiar, analizar y resumir documentos de procesos licitatorios para encontrar información relevante y responder preguntas sobre estos</h1>
            </div>
            <div className="mb-4">
              <hr className=" border-gray-900 mb-4" />
              {!response && <p className="mb-4 text-center">No olvides cargar los archivos que quieres analizar</p>}
            </div>
          </div>
          {/* {!response && */}
            <div className="mb-4">
              <FileUpload files={files}/>
            </div>
          {/* } */}
          {response &&
          <>
          <div className="flex flex-col p-2 pt-4 mb-4 gap-2 rounded-md shadow-md text-justify hover:bg-gray-400/25 hover:border-gray-200 overflow-y-scroll no-scrollbar">
            <p className="font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              varius lorem. Fusce sed mi fermentum, aliquam lacus eget, pulvinar
              ipsum. Curabitur quis feugiat diam, ac mattis nulla. In at
              molestie metus, nec luctus dui. Pellentesque elit felis,
              vestibulum in porttitor in, ullamcorper nec diam. Integer in nisi
              ipsum. Donec ut cursus sapien. 
            </p>
          </div>
          <div className="flex flex-col h-80 p-2 pt-4 mb-4 gap-2 rounded-md shadow-md text-justify hover:bg-gray-400/25 hover:border-gray-200 overflow-y-scroll no-scrollbar">
            <p className="font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              varius lorem. Fusce sed mi fermentum, aliquam lacus eget, pulvinar
              ipsum. Curabitur quis feugiat diam, ac mattis nulla. In at
              molestie metus, nec luctus dui. Pellentesque elit felis,
              vestibulum in porttitor in, ullamcorper nec diam. Integer in nisi
              ipsum. Donec ut cursus sapien. Pellentesque lobortis urna elit, ut
              molestie nulla ullamcorper ac.Phasellus quis nibh a nulla tempor
              congue. Duis sollicitudin facilisis faucibus. Curabitur rutrum et
              diam non tincidunt. Nam efficitur aliquam odio ut euismod. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Quisque quis est leo. Vestibulum mollis augue
              vitae tortor scelerisque, a placerat turpis suscipit. Aliquam
              nulla nisl, volutpat non augue hendrerit, ornare suscipit nunc.
              Quisque a pharetra mauris.Vestibulum non dolor vel dolor eleifend
              varius. Vivamus eleifend id tortor ac porta. Mauris auctor vitae
              justo vel pretium. Suspendisse ac neque ligula. Nam mattis tellus
              lacinia, lobortis ex faucibus, feugiat mi. Nulla auctor enim ac
              velit dapibus condimentum vitae ac ipsum. Donec vitae lorem
              interdum, convallis diam a, maximus turpis. In nec ultricies enim.
              Aliquam fermentum tempus dui, quis congue libero. Maecenas
              sollicitudin, sapien tristique vulputate suscipit, turpis nunc
              laoreet risus, quis sodales tortor risus nec eros. Nam justo
              felis, finibus consectetur purus sit amet, sagittis viverra
              ligula. Maecenas ut tempus ligula, ut consectetur nulla.Vivamus ut
              mollis lacus. Nunc sit amet massa imperdiet, ultricies urna vitae,
              tempus mi. Aliquam erat volutpat. Integer fringilla pellentesque
              justo quis ultrices. Aliquam accumsan scelerisque erat, vel
              condimentum erat laoreet ut. Pellentesque viverra sit amet nisl eu
              ultricies. Vestibulum vitae pretium eros, quis placerat sem.
              Nullam sit amet condimentum orci. Nulla vel condimentum diam.
              Proin vitae ex pellentesque, posuere nisi id, volutpat enim.Fusce
              sit amet neque commodo, tincidunt urna eu, scelerisque ante.
              Quisque finibus sit amet orci non fermentum. Suspendisse porttitor
              viverra justo. Integer eu consectetur lectus. Mauris egestas,
              lacus eu feugiat consequat, sapien lorem semper diam, vel mollis
              augue odio sed orci. Maecenas eu finibus nulla. Vivamus accumsan
              eros ut egestas feugiat.
            </p>
          </div>
          </>
          }
        </div>
        <div className="flex flex-col ">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className=""
            >
              <textarea
                placeholder=" Quiero conocer tu consulta..."
                maxLength="5000"
                id="query"
                name="query"
                data-name="query"
                value={query}
                onChange={(e)=> handleChange(e)}
                className="text-field w-3/4 md:w-4/5 shadow-xl rounded-md h-16"
              ></textarea>
              <Button  className="mb-14 bg-blue-gray-300 h-16 ml-2" onClick={(e) => submitHandler(e)}>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  className="w-4 h-4 hover:text-dark text-brown-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg> */}
                <img src="/paper-plane.svg" width={15} height={15}/>
              </Button>
            </form>
        </div>
    </div>
  );
};

export default ChatBot;
