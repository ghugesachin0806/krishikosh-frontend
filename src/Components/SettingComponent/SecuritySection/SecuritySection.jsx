import React from 'react'
import '../SettingComponent.css'
import PageHeader from '../../PageHeader/PageHeader'
import CustomButton from '../../CustomButton/CustomButton'

const SecuritySection = () => {
  return (
    <div className='setting-sections'>
        <PageHeader title='Security Settings' subTitle='Manage your account security and privacy.' className='security-section-header'/>
        <div className="password-section">
            <h4>Change Password</h4>
            <div className="form-group">
                <label className="form-label">
                    Current Password
                </label>
                <input type="password" className='form-input' />
            </div>
            <div className="form-group">
                <label className="form-label">
                    New Password
                </label>
                <input type="password" className='form-input' />
            </div>
            <div className="form-group">
                <label className="form-label">
                    Confirm New Password
                </label>
                <input type="password" className='form-input' />
            </div>
            <div className="form-action">
            <CustomButton title='Update Password' btnColor='dark-green'/>
            </div>
        </div>
    </div>
  )
}

export default SecuritySection