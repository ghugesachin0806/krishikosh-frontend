import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Pages/User/Dashboard/Dashboard'
import "./App.css"

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
        <Dashboard data={data} updateData={updateData} selectedYear={selectedYear} />
      </div>
    </div>
  )
}

export default App