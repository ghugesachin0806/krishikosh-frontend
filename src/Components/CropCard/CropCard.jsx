import React from 'react'
import "./CropCard.css"
import { Dock } from 'lucide-react'
import CustomButton from '../CustomButton/CustomButton'

const CropCard = ({ crop, cropManage, showProfit }) => {
    return (
        <div className='crop-card'>
            <div className="crop-name">
                <h3>{crop.name} 🌾</h3>
            </div>
            <div className="crop-stats">
                <div className="crop-stat">
                    <div className="crop-stat-label">Area</div>
                    <div className="crop-stat-value">{crop.area.toLocaleString()}</div>
                </div>
                <div className="crop-stat">
                    <div className="crop-stat-label">Expenses</div>
                    <div className="crop-stat-value">₹{crop.totalExpenses.toLocaleString()}</div>
                </div>
                <div className="crop-stat">
                    <div className="crop-stat-label">Revenue</div>
                    <div className="crop-stat-value">₹{crop.totalRevenue.toLocaleString()}</div>
                </div>
                <div className="crop-stat">
                    <div className="crop-stat-label">Profit</div>
                    <div className="crop-stat-value">₹{crop.profit.toLocaleString()}</div>
                </div>
            </div>

            {showProfit &&
                <div className="crop-profit positive">
                    +{crop.profit.toLocaleString()}
                </div>}

            {cropManage &&
                <CustomButton buttonType='manageBtn' className='customBtnStyle' title='Manage Crop'/>
            }
        </div>
    )
}

export default CropCard