"use client"
import React, { useEffect, useState } from 'react';
import CardAgents from './Card';

const Agents = () => {
    const [ agents, setAgents] = useState([])
    const [ user, setUser] = useState([])
    
    // const userInfo = {
    //     username: "carlos.lerolle",
    //     agents:[
    //         {
    //             agent: "Agente Azure",
    //             description: "Un asesor de ventas que orienta al cliente sobre características y precios de máquinas virtuales de Azure según sus necesidades."
    //         },
    //         { 
    //             agent: "Agente Licitaciones",
    //             description: "Un asistente legal que ayuda a los usuarios a estudiar, analizar y resumir documentos de procesos licitatorios para encontrar infromación relevante y responder preguntas sobre estos."
    //         }, 
    //         {
    //             agent: "Agente Pruebas",
    //             description: "Descripción del proposito y configuración del agente de pruebas para mostrar en el portal web de VictorIA."
    //         }
    //     ]
    // }
    useEffect(()=>{
        const infoAgents = localStorage.getItem("agents")
        setUser(localStorage.getItem("user"))
        setAgents(JSON.parse(infoAgents))
    },[])

    return (
        <div className=''>
            <div className='p-10 text-5xl'>
                <h1>¡Hola {user}!</h1>
            </div>
            <div className='p-8 text-3xl'>
                <h1>Agentes disponibles</h1>
                <hr className='w-11/12 mt-2 font-bold'/>
            </div>
            <div className='p-8 pt-4 flex flex-wrap gap-5'>
                {agents?.map(agent=>
                <CardAgents key={agent.agent} agent={agent}/>
                )}
            </div>
        </div>
    );
};

export default Agents;