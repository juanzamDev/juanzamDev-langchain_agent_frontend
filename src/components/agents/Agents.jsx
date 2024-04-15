"use client"
import React, { useEffect, useState } from 'react';
import CardAgents from './Card';

const Agents = () => {

    // Local state
    const [ agents, setAgents] = useState([]);
    const [ user, setUser] = useState([]);

    // logged user info 
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