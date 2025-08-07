import React from 'react'
import { X } from 'lucide-react'
import CustomButton from '../CustomButton/CustomButton'

const AddNewCropModal = () => {
  return (
    <div className='modal-overlay'>
      <div className="modal">
        <div className="modal-header">
          <h2>Add New Crop</h2>
          <CustomButton buttonType='closeBtn'/>
        </div>
        <form>
          <div className="form-group">
            <label className='form-label'>Crop Name</label>
            <input className='form-input' type="text" placeholder='e.g. Cotton, Rice, Wheat' />
          </div>
          <div className="form-group">
            <label className='form-label'>Area(in acres)</label>
            <input className='form-input' type="text" placeholder='e.g. 5.5' />
          </div>
          <div className="form-actions">
            <CustomButton title='Cancel' />
            <CustomButton title='Add Crop' btnColor='dark-green'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewCropModal