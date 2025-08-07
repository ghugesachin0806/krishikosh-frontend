import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './Modal.css'

const AddRevenue = () => {
    return (
        <div className='modal-overlay'>
            <div className="modal">
                <div className="modal-header">
                    <h2>Add New Revenue</h2>
                    <CustomButton buttonType='closeBtn' />
                </div>
                <form action="">
                    <div className="form-group">
                        <label className='form-label'>Date</label>
                        <input className='form-input' type="date" placeholder='e.g. Cotton, Rice, Wheat' />
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Quantity (qtl)</label>
                        <input className='form-input' type="text" placeholder='e.g. 5 , 5.8' />
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Rate per qtl (₹)</label>
                        <input className='form-input' type="number" placeholder='e.g. 5500' />
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Buyer Name</label>
                        <input className='form-input' type="text" placeholder='e.g. local' />
                    </div>
                    <div className="total-preview">
                        <div className="form-label">Total Amount</div>
                        <div className="total-amount">₹ 5500</div>
                    </div>
                    <div className="form-actions">
                        <CustomButton title='Cancel' />
                        <CustomButton title='Add Revenue' btnColor='dark-green' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRevenue