import React from 'react'
import './RevenueCard.css'
import { Edit2 } from 'lucide-react'

const RevenueCard = ({revenue}) => {
  return (
    <div className='revenue-card'>
        <div className="revenue-info">
          <div className="revenue-detail">
            <span className='revenue-date'>07/07/2025</span>
            <span className='revenue-buyer'>Local Mart</span>
          </div>
          <div className="revenue-quantity">10 qtl @ ₹100/qtl</div>
        </div>
        <div className="revenue-actions">
          <span className='revenue-total' >₹ 5,600</span>
          <button className='edit-revenue-btn'>
            <Edit2 className='icon'/>
          </button>
        </div>
    </div>
  )
}

export default RevenueCard