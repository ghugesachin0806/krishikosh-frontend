import React from 'react'
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
} from "../../../DummyData";
import OverViewCard from '../../../Components/OverviewCard/OverViewCard'
import CustomFilter from '../../../Components/CustomFilter/CustomFilter'
import RevenueSummary from '../../../Components/RevenueSummary/RevenueSummary'
import RevenueCard from '../../../Components/RevenueCard/RevenueCard'
import ExpenseCard from '../../../Components/ExpenseCard/ExpenseCard'

const CropDetail = () => {

  return (
    <div className='crop-detail'>
      {/* Crop-Detail Header section */}
      <div className="header-section">
        <div className="header-left">
          <ArrowLeft className='icon' />
          <h2>Back</h2>
        </div>
        <div className="header-right">
          <CustomButton buttonType='updateBtn' title='Update Crop' />
          <CustomButton buttonType='clearBtn' title='Clear Data' />
          <CustomButton buttonType='deleteBtn' title='Delete Crop' />
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
              <CustomButton buttonType='expenseBtn' title='Add Expense' />
            </div>
              <CustomFilter list={expenseFilterList} name='farm-activity-filter' id='farm-activity-filter-id' />
          </div>
          <div className="total-section">
            <RevenueSummary title="Total Expenses" amount={250} type='expense' />
          </div>
          <hr/>
          <div className="expense-list">
            <ExpenseCard/>
            <ExpenseCard/>
          </div>
        </div>
        <div className="revenue-section content-box">
          <div className="revenue-activity-header">
            <h2>Revenue Management</h2>
            <CustomButton buttonType='revenueBtn' title='Add Revenue'/>
          </div>
          <div className="total-section">
            <RevenueSummary title="Total Revenue" amount={450} type='revenue' />
          </div>
          <hr/>
          <div className="revenue-list">
            <RevenueCard/>
            <RevenueCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CropDetail