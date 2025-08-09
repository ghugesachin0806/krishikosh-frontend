import React, { createContext, useEffect, useState } from 'react'
import AppRoutes from './Navigation/AppRoutes'
import { ToastContainer } from 'react-toastify';

export const DataContext = createContext();
export const SignupContext = createContext();

const App = () => {

  const [data, setdata] = useState(() => {
    const defaultData = {
      counter: 0
    };

    const savedData = localStorage.getItem('krishikosh');

    // if JSON parse fail
    try {
      if (savedData) {
        return JSON.parse(savedData);
      }
      return defaultData;
    } catch {
      return defaultData;
    }

  });

  const [signupState, setsignupState] = useState(() => {
    const defaultSignupState = {
      id: null,
      status: false
    };

    const savedData = localStorage.getItem('krishikosh');

    try {
      const parseData = JSON.parse(savedData);
      return parseData?.currentUser ?? defaultSignupState;
    } catch (error) {
      return defaultSignupState;
    }
  });

  useEffect(() => {
    localStorage.setItem('krishikosh', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const newData = {
      ...data,
      currentUser: signupState
    };

    setdata(newData);

    localStorage.setItem('krishikosh', JSON.stringify(newData));
  }, [signupState]);

  return (
    <DataContext.Provider value={{ data, setdata }}>
      <SignupContext.Provider value={{ signupState, setsignupState }}>
        <AppRoutes />
        <ToastContainer autoClose={1000} />
      </SignupContext.Provider>
    </DataContext.Provider>
  )
}

export default App