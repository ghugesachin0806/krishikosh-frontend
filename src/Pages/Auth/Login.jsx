import React, { useContext, useState } from 'react'
import './Auth.css'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DataContext, SignupContext } from '../../App';

const Login = () => {

    const navigate = useNavigate();
    const { data, setdata } = useContext(DataContext);
    const { signupState, setsignupState } = useContext(SignupContext)

    const [formData, setformData] = useState({
        mobileNumber: "",
        password: ""
    })

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = data?.users || [];
        const existinUser = users.find(user => user.mobileNumber === formData.mobileNumber 
            && user.password === formData.password) || null;

        if (existinUser) {

            const newSignupState = {
                id: existinUser.id,
                status:true
            };

            setsignupState(newSignupState);

            setdata({
                ...data,
                currentUser: newSignupState
            });
            navigate("/dashboard");
            toast.success("Login successful");
            return;
        }

        toast.error("Login Error");
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
                        <CustomButton type='submit' title='Login' btnColor='dark-green' className='auth-btn custom-login-btn' />
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