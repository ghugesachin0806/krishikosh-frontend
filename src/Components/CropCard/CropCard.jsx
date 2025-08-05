import React from 'react'
import "./CropCard.css"

const CropCard = ({ crop, cropManage}) => {
    return (
        <div className='crop-card'>
            <h3>{crop.name}</h3>
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
            <div className="crop-profit positive">
                +{crop.profit.toLocaleString()}
            </div>
        </div>
    )
}

export default CropCard