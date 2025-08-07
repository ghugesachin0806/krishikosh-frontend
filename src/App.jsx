import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Pages/User/Dashboard/Dashboard'
import "./App.css"
import CropManagement from './Pages/User/CropManagement/CropManagement'
import CropDetail from './Pages/User/CropDetail/CropDetail'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import ForgetPassword from './Pages/Auth/ForgetPassword'
import Setting from './Pages/User/Setting/Setting'
import AddNewCropModal from './Components/Modals/AddNewCropModal'
import AddNewFinancialYearModal from './Components/Modals/AddNewFinancialYearModal'
import AddExpense from './Components/Modals/AddExpense'
import AddRevenue from './Components/Modals/AddRevenue'
import UpdateCrop from './Components/Modals/UpdateCrop'
import DeleteCrop from './Components/Modals/DeleteCrop'
import ClearCropData from './Components/Modals/ClearCropData'

const App = () => {

  const [selectedYear, setSelectedYear] = useState('2024-25');

  const [data, setdata] = useState(() => {
    const savedData = localStorage.getItem('krishikosh-data');
    return savedData ? JSON.parse(savedData) : {
      years: {
        '2024-25': {
          crops: {},
          totalExpenses: 0,
          totalRevenue: 0
        }
      }
    }
  });

  useEffect(() => {
    localStorage.setItem('krishikosh-data', JSON.stringify(data));
  }, [data]);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <Navbar />
      {/* <Sidebar/> */}
      <div className="container">
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <ForgetPassword/> */}
        {/* <Dashboard data={data} updateData={updateData} selectedYear={selectedYear} /> */}
        {/* <CropManagement/> */}
        {/* <CropDetail/> */}
        {/* <Setting/> */}
        {/* <AddNewCropModal/> */}
        {/* <AddNewFinancialYearModal/> */}
        {/* <AddExpense/> */}
        {/* <AddRevenue/> */}
        {/* <UpdateCrop/> */}
        {/* <DeleteCrop/> */}
        {/* <ClearCropData/> */}
      </div>
    </div>
  )
}

export default App