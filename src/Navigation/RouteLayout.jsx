import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'

const RouteLayout = () => {
  return (
    <>
      {/* <Sidebar /> */}
      {/* <Navbar/> */}
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default RouteLayout