import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const DeleteCrop = () => {
    return (
        <div className='modal-overlay'>
            <div className="modal">
                <div className="modal-header">
                    <h2>Are you want to Delete Crop ?</h2>
                    <CustomButton buttonType='closeBtn' />
                </div>
                <p>Crop will be permenantly deleted.</p>
                <div className="form-actions">
                    <CustomButton title='Cancel' />
                    <CustomButton title='Delete Crop' buttonType='deleteBtn' />
                </div>
            </div>
        </div>
    )
}

export default DeleteCrop