import React from 'react'
import './Auth.css'
import CustomButton from '../../Components/CustomButton/CustomButton'

const Login = () => {
    return (
        <div className='auth-container'>
            <div className="auth-card">
                <div className="header">
                    <h2>Login</h2>
                </div>
                <form action=''>
                    <div className="form-group">
                        <label className='form-label' >Mobile Number</label>
                        <input type="tel" className='form-input' />
                    </div>
                    <div className="form-group">
                        <label className='form-label' >Password</label>
                        <input type="password" className='form-input' />
                    </div>
                    <div className="form-actions">
                        <CustomButton title='Login' btnColor='dark-green' className='auth-btn custom-login-btn'/>
                    </div>
                </form>
                <div className="auth-links">
                    <p>Don't have account? <span>Sign up</span></p>
                    <p><span>Forget Password?</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login