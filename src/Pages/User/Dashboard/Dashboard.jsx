import React from 'react'
import "./Dashboard.css"
import { DollarSign, Plus, TrendingDown, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import {
  totalExpenses,
  totalRevenue,
  netProfit,
  expenseByCrop,
  revenueByCrop,
  crops,
  COLORS
} from "../../../DummyData";
import CropCard from '../../../Components/CropCard/CropCard';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      {/* Overview cards */}
      <div className="overview-cards">
        <div className="overview-card">
          <h3>Total Expenses</h3>
          <div className="amount expense">
            <TrendingDown className='icon' />
            ₹{totalExpenses.toLocaleString()}
          </div>
        </div>
        <div className="overview-card">
          <h3>Total revenue</h3>
          <div className="amount revenue">
            <TrendingUp className='icon' />
            ₹{totalRevenue.toLocaleString()}
          </div>
        </div>
        <div className="overview-card">
          <h3>Net Profit</h3>
          <div className={`amount ${netProfit >= 0 ? 'profit' : 'expense'}`}>
            <DollarSign className='icon' />
            ₹{netProfit.toLocaleString()}
          </div>
        </div>
      </div>
      {/* Charts section */}
      <div className="dashboard-grid">
        <div className="chart-container">
          <h3>Expense Distribution by Crop</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseByCrop}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {expenseByCrop.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <h3>Revenue by Crop</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByCrop}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Bar dataKey="value" fill="#4a7c59" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Crop management */}
      <div className="crop-management">
        <div className="section-header">
          <h2>Crop Management</h2>
          <button className='section-btn'>
            <Plus className='icon'/>
             <h3>Add New Crop</h3>
          </button>
        </div>
        <div className="crop-list">
          {crops.map((crop)=>(<CropCard crop={crop}/>))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard