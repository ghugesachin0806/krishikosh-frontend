import React, { useState } from 'react'
import './CropDetail.css'
import { ArrowLeft } from 'lucide-react'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import CropCard from '../../../Components/CropCard/CropCard'
import {
  totalExpenses,
  totalRevenue,
  netProfit,
  COLORS,
  cropData,
  cropFilterList,
  expenseFilterList
} from "../../../Utils/DummyData";
import OverViewCard from '../../../Components/OverviewCard/OverViewCard'
import CustomFilter from '../../../Components/CustomFilter/CustomFilter'
import RevenueSummary from '../../../Components/RevenueSummary/RevenueSummary'
import RevenueCard from '../../../Components/RevenueCard/RevenueCard'
import ExpenseCard from '../../../Components/ExpenseCard/ExpenseCard'
import { useNavigate, useParams } from 'react-router-dom'
import UpdateCrop from '../../../Components/Modals/UpdateCrop'
import ClearCropData from '../../../Components/Modals/ClearCropData'
import DeleteCrop from '../../../Components/Modals/DeleteCrop'
import AddExpense from '../../../Components/Modals/AddExpense'
import AddRevenue from '../../../Components/Modals/AddRevenue'

const CropDetail = () => {

  const navigate = useNavigate();
  const { cropId } = useParams();

  const [addNewExpenseOpen, setaddNewExpenseOpen] = useState(false);
  const [addNewRevenueOpen, setaddNewRevenueOpen] = useState(false);
  const [updateCropOpen, setupdateCropOpen] = useState(false);
  const [clearCropOpen, setclearCropOpen] = useState(false);
  const [deleteCropOpen, setdeleteCropOpen] = useState(false);

  return (
    <div className='crop-detail'>
      {/* Crop-Detail Header section */}
      <div className="header-section">
        <div onClick={() => navigate('/crop-management')} className="header-left">
          <ArrowLeft className='icon' />
          <h2>Back</h2>
        </div>
        <div className="header-right">
          <CustomButton buttonType='updateBtn' title='Update Crop' handler={() => setupdateCropOpen(true)} />
          <CustomButton buttonType='clearBtn' title='Clear Data' handler={() => setclearCropOpen(true)} />
          <CustomButton buttonType='deleteBtn' title='Delete Crop' handler={() => setdeleteCropOpen(true)} />
        </div>
      </div>
      {/* Crop-Detail Section */}
      <div className="crop-detail-section">
        <div className="crop-name-header">Rice 🌾</div>
        <div className="overview-cards">
          <OverViewCard cardType='expense' title='Crop Expenses' value={totalExpenses} />
          <OverViewCard cardType='revenue' title='Crop revenue' value={totalRevenue} />
          <OverViewCard cardType='profit' title='Net Profit' value={netProfit} />
          <OverViewCard cardType='area' title='Total Acres' value={netProfit} />
        </div>
      </div>
      {/* Crop-Expenses-content */}
      <div className="crop-activity-section">
        <div className="expense-section content-box">
          <div className="expense-activity-header">
            <div className="start-header">
              <h2>Farming Activities</h2>
              <CustomButton buttonType='expenseBtn' title='Add Expense'  handler={()=>setaddNewExpenseOpen(true)}  />
            </div>
            <CustomFilter list={expenseFilterList} name='farm-activity-filter' id='farm-activity-filter-id' />
          </div>
          <div className="total-section">
            <RevenueSummary title="Total Expenses" amount={250} type='expense' />
          </div>
          <hr />
          <div className="expense-list">
            <ExpenseCard />
            <ExpenseCard />
          </div>
        </div>
        <div className="revenue-section content-box">
          <div className="revenue-activity-header">
            <h2>Revenue Management</h2>
            <CustomButton buttonType='revenueBtn' title='Add Revenue' handler={()=>setaddNewRevenueOpen(true)} />
          </div>
          <div className="total-section">
            <RevenueSummary title="Total Revenue" amount={450} type='revenue' />
          </div>
          <hr />
          <div className="revenue-list">
            <RevenueCard />
            <RevenueCard />
          </div>
        </div>
      </div>
      {updateCropOpen && <UpdateCrop setupdateCropOpen={setupdateCropOpen} />}
      {clearCropOpen && <ClearCropData setclearCropOpen={setclearCropOpen} />}
      {deleteCropOpen && <DeleteCrop setdeleteCropOpen={setdeleteCropOpen} />}
      {addNewExpenseOpen && <AddExpense setaddNewExpenseOpen={setaddNewExpenseOpen} />}
      {addNewRevenueOpen && <AddRevenue setaddNewRevenueOpen={setaddNewRevenueOpen} />}
    </div>
  )
}

export default CropDetail