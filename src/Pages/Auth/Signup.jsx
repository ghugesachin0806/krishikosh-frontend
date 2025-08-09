import React, { useContext, useState } from 'react'
import './Auth.css'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { DataContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {

  const navigate = useNavigate();
  const { data, setdata } = useContext(DataContext);

  const [formData, setformData] = useState({
    name: null,
    mobileNumber: null,
    email: null,
    password: null,
    confirmPassword: null,
    farmSize: null,
    farmingExperience: null,
    selectedYear: "2024-25",
    location: null,
    years: [{ year: "2024-25" }]
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = data?.users || [];
    const exist = users.some(user => user.mobileNumber === formData.mobileNumber);

    if (!exist) {

      setdata({
        ...data,
        counter: data.counter + 1,
        users: [...users,
        {
          ...formData,
          id: data.counter + 1
        }
        ]
      });

      navigate("/login");
      toast.success("Signup successful");
      return;
    }

    toast.error("Mobile Number exist");
  }

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className='auth-container'>
      <div className="auth-card">
        <div className="header">
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='form-label' htmlFor='name' >Name</label>
            <input type="text" className='form-input' id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your Name' required />
          </div>
          <div className="form-group">
            <label className='form-label' htmlFor='mobileNumber' >Mobile Number</label>
            <input type="tel" className='form-input' id='mobileNumber' name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} placeholder='Enter Mobile Number' required />
          </div>
          <div className="form-group">
            <label className='form-label' htmlFor='email' >Email</label>
            <input type="email" className='form-input' id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email' />
          </div>
          <div className="form-group">
            <label className='form-label' htmlFor='password' >Password</label>
            <input type="password" className='form-input' id='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' required />
          </div>
          <div className="form-group">
            <label className='form-label' htmlFor='confirm-password'>Confirm Password</label>
            <input type="password" className='form-input' id='confirm-password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />
          </div>
          <div className="form-actions">
            <CustomButton type='submit' title='Sign Up' btnColor='dark-green' className='auth-btn custom-signup-btn' />
          </div>
        </form>
        <div className="auth-links">
          <p>Already have account? <span onClick={() => navigate('/login')}>Login</span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup