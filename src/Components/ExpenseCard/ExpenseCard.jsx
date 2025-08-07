import React from 'react'
import './ExpenseCard.css'
import { Edit2 } from 'lucide-react'

const ExpenseCard = ({expense}) => {
    return (
        <div className='expense-card'>
            <div className="expense-info">
                <div className="expense-details">
                    <div className="expense-date">07/07/2025</div>
                    <div className="expense-type">(Nutrient)</div>
                </div>
                <div className="expense-description">Local Mart buyer</div>
            </div>
            <div className="expense-actions">
                <div className="expense-total">₹ 5,600</div>
                <button className='edit-expense-btn'>
                    <Edit2 className='icon' />
                </button>
            </div>
        </div>
    )
}

export default ExpenseCard