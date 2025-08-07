import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const AddExpense = () => {
    return (
        <div className='modal-overlay'>
            <div className="modal">
                <div className="modal-header">
                    <h2>Add New Expense</h2>
                    <CustomButton buttonType='closeBtn' />
                </div>
                <form action="">
                    <div className="form-group">
                        <label className='form-label'>Description</label>
                        <input className='form-input' type="text" placeholder='e.g. Cotton, Rice, Wheat' />
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Amount(₹)</label>
                        <input className='form-input' type="text" placeholder='e.g. 5.5' />
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Expense Type</label>
                        <select className='form-input'>
                            <option value="landPreparation">Land Preparation</option>
                            <option value="seedSowing">Seed and Sowing</option>
                            <option value="nutrientWater">Nutrient and Water</option>
                            <option value="pestWeed">Pest and Weed</option>
                            <option value="harvesting">Harvesting</option>
                            <option value="marketing">Marketing</option>
                            <option value="labor">Labor</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Date</label>
                        <input className='form-input' type="date" />
                    </div>
                    <div className="form-actions">
                        <CustomButton title='Cancel' />
                        <CustomButton title='Add Expense' btnColor='dark-green' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpense