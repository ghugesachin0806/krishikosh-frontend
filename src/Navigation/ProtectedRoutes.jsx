import React, { createContext, useContext, useEffect, useState } from 'react'
import { DataContext, SignupContext } from '../App';
import { Navigate, Outlet } from 'react-router-dom';
import '../App.css'
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';

export const UserContext = createContext();

const ProtectedRoutes = () => {

  const { signupState } = useContext(SignupContext);
  const { data, setdata } = useContext(DataContext);
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const [user, setuser] = useState(() => {
    const users = data?.users ?? [];
    const currentUser = data?.currentUser ?? null;
    return users.find(user => currentUser?.id === user.id) || null;
  });

  useEffect(() => {
    const users = data?.users ?? [];
    const currentUser = data?.currentUser ?? null;

    const newData = {
      ...data,
      users: users.map(localuser => user.id === currentUser?.id ? user : localuser)
    }

    setdata(newData);
  }, [user]);

  return signupState.status && user ? (
    <>
      <UserContext.Provider value={{user, setuser}} >
        <Navbar setsidebarOpen={setsidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
        <div className="container">
          <Outlet />
        </div>
      </UserContext.Provider>
    </>
  ) : <Navigate to='/login' />;
}

export default ProtectedRoutes