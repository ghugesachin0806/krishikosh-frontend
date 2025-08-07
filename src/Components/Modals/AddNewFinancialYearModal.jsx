import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const AddNewFinancialYearModal = () => {
  return (
    <div className='modal-overlay'>
      <div className="modal">
        <div className="modal-header">
          <h2>Add New Financial Year</h2>
          <CustomButton buttonType='closeBtn' />
        </div>
        <form action="">
          <div className="form-group">
            <label className='form-label'>Enter New Financial Year</label>
            <input className='form-input' type="text" placeholder='e.g. 2023-24' />
          </div>
          <div className="form-actions">
             <CustomButton title='Cancel' />
            <CustomButton title='Add Year' btnColor='dark-green'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewFinancialYearModal