import React, { createContext, useEffect, useState } from 'react'
import AppRoutes from './Navigation/AppRoutes'
import { ToastContainer } from 'react-toastify';

export const DataContext = createContext();
export const LoginStatusContext = createContext();

const App = () => {

  const [isLoggedin, setisLoggedin] = useState(false);

  const [data, setdata] = useState(() => {
    const savedData = localStorage.getItem('krishikosh');
    return savedData ? JSON.parse(savedData) : {}
  })

  useEffect(() => {
    localStorage.setItem('krishikosh', JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setdata }}>
      <LoginStatusContext.Provider value={{ isLoggedin, setisLoggedin }}>
        <AppRoutes />
        <ToastContainer />
      </LoginStatusContext.Provider>
    </DataContext.Provider>
  )
}

export default App