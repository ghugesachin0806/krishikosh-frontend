import React from 'react'
import './Auth.css'
import CustomButton from '../../Components/CustomButton/CustomButton'

const ForgetPassword = () => {
  return (
    <div className='auth-container'>
      <div className="auth-card">
        <div className="header">
          <h2>Forget Password</h2>
        </div>
        <form action="">
          <div className="form-group">
            <label className='form-label' >Mobile Number</label>
            <input type="text" className='form-input' />
          </div>
          <div className="form-group">
            <label className='form-label' >OTP</label>
            <input type="text" className='form-input' />
          </div>
          <div className="form-group">
            <label className='form-label' >New Password</label>
            <input type="password" className='form-input' />
          </div>
          <div className="form-group">
            <label className='form-label' >Confirm Password</label>
            <input type="password" className='form-input' />
          </div>
          <div className="form-actions">
            <CustomButton title='Resest Password' btnColor='dark-green' className='auth-btn' />
            <CustomButton title='Send OTP' btnColor='dark-green' className='auth-btn' />
          </div>
        </form>
        <div className="auth-links">
          <p>Already have account? <span>Login</span></p>
          <p><span>Back to Login</span></p>
          <p><span>Sign Up</span></p>

        </div>
      </div>

    </div>
  )
}

export default ForgetPassword