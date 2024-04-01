"use client" // component client
import React, { useEffect, useState } from "react";
import SideBar from "./sidecomponents/SideBar";
import ButtonSideBar from "../buttons/ButtonSideBar";
import ChatBot from "./sidecomponents/ChatBot";
import Graphics from "./sidecomponents/Graphics";
import ButtonSideBarT from "../buttons/ButtonSideBarT";
// import { getUsers, getUsersTwo } from "@/app/api/getUsers";

const TenderAgent = () => {

  // Local State
  const [open, setOpen] = useState(true);
  const [openT, setOpenT] = useState(true);

  // useEffect(()=>{
  //   getUsers()
  //   getUsersTwo()
  // },[])

  return (
    // <section className="container">
      <div className="flex flex-row">
        <SideBar open={open}  setOpen={setOpen} openT={openT}/>
        <ButtonSideBar open={open} setOpen={setOpen}/>
        <ChatBot open={open} openT={openT} />
        <ButtonSideBarT open={open} openT={openT} setOpenT={setOpenT}/>
        <Graphics open={open} openT={openT} setOpenT={setOpenT} />
      </div>
    // </section>
  );
};

export default TenderAgent;
