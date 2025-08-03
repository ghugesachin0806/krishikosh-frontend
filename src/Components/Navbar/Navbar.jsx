import React from 'react'
import "./Navbar.css"
import { Calendar, Menu, User } from 'lucide-react'

const Navbar = () => {


  return (
    <div className='navbar'>
      <div className='nav-left'>
        <button className='nav-btn'>
          <Menu />
        </button>
        <div className='nav-logo'>
          <h2>🌾 KrishiKosh</h2>
          <h3>Farmer's Expense & Revenue Tracker</h3>
        </div>
      </div>
      <div className="nav-right">
        <div className="year-selection">
          <Calendar/>
          <select className="year-select" id="financial_year" name="financial_year">
            <option value="2024-25">2024-25</option>
          </select>
        </div>
        <div className="profile-container">
            <button className='profile-btn'>
              <User/>
              <h3>Rohit Sharma</h3>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Navbar