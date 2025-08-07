import React from 'react'
import './Auth.css'
import CustomButton from '../../Components/CustomButton/CustomButton'

const Signup = () => {
  return (
    <div className='auth-container'>
      <div className="auth-card">
        <div className="header">
          <h2>Sign Up</h2>
        </div>
        <form action="">
          <div className="form-group">
            <label className='form-label' >Name</label>
            <input type="text" className='form-input' />
          </div>
          <div className="form-group">
            <label className='form-label' >Mobile Number</label>
            <input type="tel" className='form-input' />
          </div>
          <div className="form-group">
            <label className='form-label' >Email</label>
            <input type="email" className='form-input' />
          </div>
          <div className="form-group">
            <label className='form-label' >Password</label>
            <input type="password" className='form-input' />
          </div>
          <div className="form-group">
            <label className='form-label' >Confirm Password</label>
            <input type="password" className='form-input' />
          </div>
          <div className="form-actions">
            <CustomButton title='Sign Up' btnColor='dark-green' className='auth-btn custom-signup-btn' />
          </div>
        </form>
        <div className="auth-links">
          <p>Already have account? <span>Login</span></p>
        </div>
      </div>

    </div>
  )
}

export default Signup