import React, { useEffect, useState } from 'react'
import AppRoutes from './Navigation/AppRoutes'

const App = () => {

  // const [data, setdata] = useState(() => {
  //   const savedData = localStorage.getItem('krishikosh-data');
  //   return savedData ? JSON.parse(savedData) : {
  //     users: {

  //     }
  //   }
  // })

  return (
    <AppRoutes data={data} setdata={setdata}/>
  )
}

export default App