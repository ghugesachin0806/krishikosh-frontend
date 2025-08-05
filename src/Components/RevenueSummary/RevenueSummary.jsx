import React from 'react'
import './RevenueSummary.css'
import { Package } from 'lucide-react'

const RevenueSummary = ({title='name',amount=999,type}) => {
  return (
    <div className='revenue-summary'>
        <div className='revenue-card'>
            <Package className={`icon ${type}`}/>
            <div className="revenue-info">
                <h3>{title}</h3>
                <span className={`amount ${type}`}>₹{amount}</span>
            </div>
        </div>
    </div>
  )
}

export default RevenueSummary