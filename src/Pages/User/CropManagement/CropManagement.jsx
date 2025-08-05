import React from 'react'
import "./CropManagement.css"
import { DollarSign, ListFilter, Plus, Tractor, TrendingDown, TrendingUp } from 'lucide-react'
import {
  totalExpenses,
  totalRevenue,
  netProfit,
  COLORS,
  cropData
} from "../../../DummyData";
import CropCard from '../../../Components/CropCard/CropCard';
import Filter from '../../../Components/CustomFilter/CustomFilter';
import AddNewButton from '../../../Components/AddNewButton/AddNewButton';
import OverViewCard from '../../../Components/OverviewCard/OverViewCard';


const CropManagement = () => {

  const cropFilterList = [
    {
      name: "All",
      value: "all"
    },
    {
      name: "Profitale",
      value: "profitable"
    },
    {
      name: "Loss-Making",
      value: "lossMaking"
    }
  ];

  return (
    <div className='crop-management'>
      {/* Header-section */}
      <div className="head-section">
        <div className="text-content">
          <h2>Crop Management</h2>
          <p>Manage and track all your crops for {"2024-25"}</p>
        </div>
        <AddNewButton title="Add New Financial Year" />
      </div>
      {/* Cards-section*/}
      <div className="overview-cards">
        <OverViewCard cardType='expense' title='Total Expenses' value={totalExpenses} />
        <OverViewCard cardType='revenue' title='Total revenue' value={totalRevenue}/>
        <OverViewCard cardType='profit' title='Net Profit' value={netProfit}/>
        <OverViewCard cardType='area' title='Total Acres' value={netProfit}/>
      </div>
      {/* crop-management */}
      <div className="crop-management-cards">
        <div className="section-header">
          <h2>Crops</h2>
          <AddNewButton title="Add New Crop" />
        </div>
        <div className="crop-filter-section">
          <Filter list={cropFilterList} name='crop-filter' id='crop-filter-id' />
        </div>
        <div className="crop-list">
          {cropData.map((crop) => (<CropCard key={crop.id} crop={crop} />))}
        </div>
      </div>
    </div>
  )
}

export default CropManagement