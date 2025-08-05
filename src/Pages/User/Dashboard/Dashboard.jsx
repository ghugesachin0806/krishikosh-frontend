import React from 'react'
import "./Dashboard.css"
import { DollarSign, Plus, TrendingDown, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie,BarChart, Tooltip, Cell, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import {
  totalExpenses,
  totalRevenue,
  netProfit,
  COLORS,
  cropData,
  cropFilterList
} from "../../../DummyData";
import CropCard from '../../../Components/CropCard/CropCard';
import CustomFilter from '../../../Components/CustomFilter/CustomFilter';
import CustomBarChart from '../../../Components/Graphs/CustomBarChart/CustomBarChart';
import CustomPieChart from '../../../Components/Graphs/PieChart/CustomPieChart';
import OverViewCard from '../../../Components/OverviewCard/OverViewCard';

const Dashboard = () => {

  const barData = [
    {
      dataKey: "totalExpenses",
      fill: "#dc3545",
      name: "Expense"
    },
    {
      dataKey: "totalRevenue",
      fill: "#4a7c59",
      name: "Revenue"
    }
  ]

  return (
    <div className='dashboard'>
      {/* Overview cards */}
      <div className="overview-cards">
        <OverViewCard cardType='expense' title='Total Expenses' value={totalExpenses} />
        <OverViewCard cardType='revenue' title='Total revenue' value={totalRevenue}/>
        <OverViewCard cardType='profit' title='Net Profit' value={netProfit}/>
      </div>
      {/* Charts section */}
      <div className="dashboard-grid">
        <div className="chart-container">
          <h3>Expense Distribution by Crop</h3>
          <CustomPieChart cropData={cropData} dataKeyName="totalExpenses" labelName='name' outerRadius={80} width='100%' height={300}  />
        </div>
        <div className="chart-container">
          <h3>Expenses & Revenue by Crop</h3>
          <CustomBarChart cropData={cropData} XAxisName="name" barData={barData} width='100%' height={300}/>
        </div>
      </div>
      {/* Crop management */}
      <div className="crop-management">
        <div className="section-header">
          <h2>Crop Management</h2>
          <CustomFilter list={cropFilterList} />
        </div>
        <div className="crop-list">
          {cropData.map((crop) => (<CropCard key={crop.id} crop={crop} showProfit={true} />))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard