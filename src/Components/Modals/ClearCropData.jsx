import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const ClearCropData = () => {
    return (
        <div className='modal-overlay'>
            <div className="modal">
                <div className="modal-header">
                    <h2>Are you want to Clear Crop Data ?</h2>
                    <CustomButton buttonType='closeBtn' />
                </div>
                <p>Crop data will be permenantly deleted.</p>
                <div className="form-actions">
                    <CustomButton title='Cancel' />
                    <CustomButton title='Clear Crop Data' buttonType='clearBtn' />
                </div>
            </div>
        </div>
    )
}

export default ClearCropData