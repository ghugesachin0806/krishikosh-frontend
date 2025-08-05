import React from 'react'
import './OverViewCard.css'
import { DollarSign, Tractor, TrendingDown, TrendingUp } from 'lucide-react'

const OverViewCard = ({ cardType, title = "Add Title", value = 1000 }) => {

    const renderContent = () => {
        switch (cardType) {
            case 'revenue':
                return (
                    <>
                        <TrendingUp className='icon' />
                        ₹{value.toLocaleString()}
                    </>
                );
            case 'expense':
                return (
                    <>
                        <TrendingDown className='icon' />
                        ₹{value.toLocaleString()}
                    </>
                );
            case 'profit':
                return (
                    <>
                        <DollarSign className='icon' />
                        ₹{value.toLocaleString()}
                    </>
                )
            case 'area':
                return (
                    <>
                        <Tractor className='icon' />
                        {value.toLocaleString()}
                    </>
                );
            default:
                return (
                    <>
                        <Tractor className='icon' />
                        {value.toLocaleString()}
                    </>
                )
        }
    }

    console.log("sachin-ghue");

    return (
        <div className="overview-card">
            <h3>{title}</h3>
            <div className={`card-data ${cardType}`}>
                {renderContent()}
            </div>
        </div>
    )
}

export default OverViewCard