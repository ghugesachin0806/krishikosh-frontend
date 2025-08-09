import React, { useContext, useState } from 'react'
import './Auth.css'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../App'
import { toast } from 'react-toastify'

const ForgetPassword = () => {

  const navigate = useNavigate();
  const { data, setdata } = useContext(DataContext);

  const [otpStatus, setotpStatus] = useState(false);

  const [formData, setformData] = useState({
    mobileNumber: "",
    otp: "",
    newPassword: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const otpStatusHandler = () => {

    const users = data?.users || [];
    const existingUser = users.find(user => formData.mobileNumber === user.mobileNumber)|| null;

    if (existingUser) {
      toast.success("OTP sent successfully");
      setotpStatus(true);
      return;
    }

    toast.error("Enter valid Mobile Number");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = data?.users || [];
    const existingUser = users.find(user => formData.mobileNumber === user.mobileNumber)|| null;

    if (existingUser) {
      if (formData.otp !== "1234") {
        setformData({
          ...formData,
          otp: ""
        })
        toast.error("Wrong OTP !");
        return;
      }

      if (formData.confirmPassword !== formData.newPassword) {
        setformData({
          ...formData,
          confirmPassword: "",
          newPassword: ""
        })
        toast.error("Passwords are not matching !");
        return;
      }

      setdata({
        ...formData,
        users: users.map(
          user => user.mobileNumber === formData.mobileNumber ?
            {
              ...user,
              password: formData.newPassword,
              confirmPassword: formData.confirmPassword
            }
            : user)
      });

      navigate("/login");
      toast.success("Password Changed Successfully");
      return;
    }

    toast.error("User not exist");
    setotpStatus(false);
    navigate("/forget-password");
  }

  return (
    <div className='auth-container'>
      <div className="auth-card">
        <div className="header">
          <h2>Forget Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='form-label' htmlFor='mobileNumber' >Mobile Number</label>
            <input type="tel" className='form-input' id='mobileNumber' name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} placeholder='Enter your Name' required />
          </div>

          {otpStatus &&
            (<>
              <div className="form-group">
                <label className='form-label' htmlFor='otp' >OTP</label>
                <input type="text" className='form-input' id='otp' name='otp' value={formData.otp} onChange={handleChange} placeholder='OTP' required />
              </div>
              <div className="form-group">
                <label className='form-label' htmlFor='newPassword' >New Password</label>
                <input type="password" className='form-input' id='newPassword' name='newPassword' value={formData.newPassword} onChange={handleChange} placeholder='New Password' required />
              </div>
              <div className="form-group">
                <label className='form-label' htmlFor='confirmPassword' >Confirm Password</label>
                <input type="password" className='form-input' id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />
              </div>
            </>)
          }
          <div className="form-actions">
            {otpStatus && <CustomButton type='submit' title='Resest Password' btnColor='dark-green' className='auth-btn' />}
            {!otpStatus && <CustomButton handler={otpStatusHandler} title='Send OTP' btnColor='dark-green' className='auth-btn' />}
          </div>
        </form>
        <div className="auth-links">
          {otpStatus && (
            <p>Already have account? <span onClick={() => navigate('/login')}>Login</span></p>
          )}
          {!otpStatus &&
            (<>
              <p><span onClick={() => navigate('/login')}>Back to Login</span></p>
              <p><span onClick={() => navigate('/signup')}>Sign Up</span></p>
            </>)
          }
        </div>
      </div>

    </div>
  )
}

export default ForgetPassword