import React, { useContext, useState } from 'react'
import './Auth.css'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { DataContext, LoginStatusContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();
    const { data, setdata } = useContext(DataContext);
    const { isLoggedin, setisLoggedin } = useContext(LoginStatusContext);

    const [formData, setformData] = useState({
        mobileNumber: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = data?.users || [];
        const exist = users.some(user => user.mobileNumber === formData.mobileNumber && user.password === formData.password);

        if (exist) {
            setisLoggedin(true);
            navigate("/dashboard");
            toast.success("Login successful");
            return;
        }
        toast.error("Login Error");
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
                    <h2>Login</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='form-label' htmlFor='mobileNumber' >Mobile Number</label>
                        <input type="tel" className='form-input' id='mobileNumber' name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} placeholder='Enter Mobile Number' required />
                    </div>
                    <div className="form-group">
                        <label className='form-label' htmlFor='password' >Password</label>
                        <input type="password" className='form-input' id='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' required />
                    </div>
                    <div className="form-actions">
                        <CustomButton title='Login' btnColor='dark-green' className='auth-btn custom-login-btn' />
                    </div>
                </form>
                <div className="auth-links">
                    <p>Don't have account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
                    <p><span onClick={() => navigate('/forget-password')}>Forget Password?</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login