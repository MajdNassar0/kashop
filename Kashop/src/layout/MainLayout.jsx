import React from 'react'
import MyNavbar from '../components/navbar/MyNavbar'
import Footer from "../components/footer/Footer";
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
    <MyNavbar/>
    <Outlet/>
    <Footer/>
    </>
   
  )
}

