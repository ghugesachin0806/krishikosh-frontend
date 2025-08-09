import React, { useContext } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import ForgetPassword from '../Pages/Auth/ForgetPassword';
import { Navigate, Outlet, RouterProvider } from 'react-router';
import Dashboard from '../Pages/User/Dashboard/Dashboard';
import CropManagement from '../Pages/User/CropManagement/CropManagement';
import Setting from '../Pages/User/Setting/Setting';
import CropDetail from '../Pages/User/CropDetail/CropDetail';
import ProfileSection from '../Components/SettingComponent/ProfileSection/ProfileSection';
import NotificationSection from '../Components/SettingComponent/NotificationSection/NotificationSection';
import PreferenceSection from '../Components/SettingComponent/PreferenceSection/PreferenceSection';
import SecuritySection from '../Components/SettingComponent/SecuritySection/SecuritySection';
import DataMgmtSection from '../Components/SettingComponent/DataMgmtSection/DataMgmtSection';
import { SignupContext } from '../App';
import ProtectedRoutes from './ProtectedRoutes';
import RouteLayout from './RouteLayout';

const AppRoutes = () => {

  const router = createBrowserRouter(createRoutesFromElements
    (
      <Route path='/' element={<RouteLayout/>}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forget-password' element={<ForgetPassword />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='crop-management' element={<CropManagement />} />
          <Route path='crop-detail' element={<CropDetail />} />
          <Route path='setting' element={<Setting />} >
            <Route index element={<Navigate to="profile" replace />} />
            <Route path='profile' element={<ProfileSection />} />
            <Route path='notifications' element={<NotificationSection />} />
            <Route path='preferences' element={<PreferenceSection />} />
            <Route path='security' element={<SecuritySection />} />
            <Route path='data-management' element={<DataMgmtSection />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes