import React from 'react'
import '../SettingComponent.css'
import ProfileIcon from '../../ProfileIcon/ProfileIcon'
import CustomButton from '../../CustomButton/CustomButton'

const ProfileSection = () => {
  return (
    <div className='setting-sections'>
      <div className="profile-header">
        <ProfileIcon/>
        <div className="profile-info">
          <h2>Rohit Sharma</h2>
          <p>Farmer</p>
        </div>
        <CustomButton buttonType='editBtn' title='Edit'/>
      </div>
      <div className="form-section">
        <div className="form-group">
          <label className='form-label'>Full Name</label>
          <input type="text" className='form-input' />
        </div>
        <div className="form-group">
          <label className='form-label'>Mobile Number</label>
          <input type="text" className='form-input' />
        </div>
        <div className="form-group">
          <label className='form-label'>Email</label>
          <input type="text" className='form-input' />
        </div>
        <div className="form-group">
          <label className='form-label'>Location</label>
          <input type="text" className='form-input' />
        </div>
        <div className="form-group">
          <label className='form-label'>Farm Size</label>
          <input type="text" className='form-input' />
        </div>
        <div className="form-group">
          <label className='form-label'>Farming Experience</label>
          <input type="text" className='form-input' />
        </div>
      </div>
      <div className="form-actions">
        <CustomButton title='Cancel'/>
        <CustomButton title='Save Changes' buttonType='saveBtn'/>
      </div>
    </div>
  )
}

export default ProfileSection