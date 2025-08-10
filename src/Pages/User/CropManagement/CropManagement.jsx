import React, { useState } from 'react'
import "./CropManagement.css"
import { DollarSign, ListFilter, Plus, Tractor, TrendingDown, TrendingUp } from 'lucide-react'
import {
  totalExpenses,
  totalRevenue,
  netProfit,
  COLORS,
  cropData,
  cropFilterList
} from "../../../Utils/DummyData";
import CropCard from '../../../Components/CropCard/CropCard';
import CustomFilter from '../../../Components/CustomFilter/CustomFilter';
import OverViewCard from '../../../Components/OverviewCard/OverViewCard';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import PageHeader from '../../../Components/PageHeader/PageHeader';
import AddNewFinancialYearModal from '../../../Components/Modals/AddNewFinancialYearModal';
import AddNewCropModal from '../../../Components/Modals/AddNewCropModal';


const CropManagement = () => {

  const [addNewYearOpen, setaddNewYearOpen] = useState(false);
  const [addNewCropOpen, setaddNewCropOpen] = useState(false);

  return (
    <div className='crop-management'>
      {/* Header-section */}
      <div className="head-section">
        <PageHeader title='Crop Management' subTitle='Manage and track all your crops for 2024-25' />
        <CustomButton buttonType='addBtn' title="Add New Financial Year" handler={()=>setaddNewYearOpen(true)} />
      </div>
      {/* Cards-section*/}
      <div className="overview-cards">
        <OverViewCard cardType='expense' title='Total Expenses' value={totalExpenses} />
        <OverViewCard cardType='revenue' title='Total revenue' value={totalRevenue} />
        <OverViewCard cardType='profit' title='Net Profit' value={netProfit} />
        <OverViewCard cardType='area' title='Total Acres' value={netProfit} />
      </div>
      {/* crop-management */}
      <div className="crop-management-cards">
        <div className="section-header">
          <PageHeader title='Crops' />
          <CustomButton buttonType='addBtn' title="Add New Crop" handler={()=>setaddNewCropOpen(true)}/>
        </div>
        <div className="crop-filter-section">
          <CustomFilter list={cropFilterList} name='crop-filter' id='crop-filter-id' />
        </div>
        <div className="crop-list">
          {cropData.map((crop) => (<CropCard key={crop.id} crop={crop} cropManage={true} />))}
        </div>
      </div>
      {addNewYearOpen && <AddNewFinancialYearModal setaddNewYearOpen={setaddNewYearOpen} />}
      {addNewCropOpen && <AddNewCropModal setaddNewCropOpen={setaddNewCropOpen} />}
    </div>
  )
}

export default CropManagement