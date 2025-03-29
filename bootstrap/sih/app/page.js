"use client"

import React from 'react'
import AppCard from './Components/Swiper'
import Navbar from './Components/Navbar';
import  Buttons from './Components/Buttons'
import './globals.css'

import handleSubmit from './handler/handlesubmit';
import { useRef } from 'react';

// import MyCarousel from './Components/Carousel'
const page = () => {

  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }

  return (
    <>
    <Navbar/>
  
        <AppCard />
        <Buttons />
    

    <div>
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>
    </>
  );
};




export default page;
