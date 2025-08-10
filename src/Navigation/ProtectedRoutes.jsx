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
    // console.log("state");
    const users = data?.users ?? [];
    const currentUserId = data?.currentUser?.id ?? null;
    if (currentUserId === null) return null;
    return users.find(user => currentUserId === user.id) || null;
  });

  useEffect(() => {
    // console.log("effect");
    const users = data?.users ?? [];
    const currentUserId = data?.currentUser?.id ?? null;
    if (currentUserId === null) return;
    const newData = {
      ...data,
      users: users.map(localuser => currentUserId===localuser.id ? user : localuser)
    }
    setdata(newData);
  }, [user]);

  // console.log(user);

  return signupState.status && user ? (
    <>
      <UserContext.Provider value={{ user, setuser }} >
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