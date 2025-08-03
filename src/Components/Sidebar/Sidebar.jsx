import React from 'react'
import "./Sidebar.css"
import { BarChart3, Calendar, Crop, FileText, HelpCircle, Home, Mail, MapPin, Phone, Settings, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const profile = {
  name: 'Rajesh Kumar',
  email: 'rajesh.kumar@example.com',
  role: 'Farmer',
  avatar: '👨‍🌾',
  location: 'Punjab, India',
  phone: '+91 98765 43210',
  farmSize: '25 acres',
  activeCrop: 4,
  currentYear: "2024-25"
};

const menuItems = [
  {
    path: '/',
    icon: Home,
    label: 'Dashboard',
    description: 'Overview and analytics'
  },
  {
    path: '/crops',
    icon: Crop,
    label: 'Crop Management',
    description: 'Manage your crops'
  },
  {
    path: '/analytics',
    icon: BarChart3,
    label: 'Analytics',
    description: 'Detailed reports'
  },
  {
    path: '/calendar',
    icon: Calendar,
    label: 'Calendar',
    description: 'Farming schedule'
  },
  {
    path: '/reports',
    icon: FileText,
    label: 'Reports',
    description: 'Financial reports'
  }
];

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-overlay"></div>
      <div className="sidebar">
        <div className="siderbar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">🌾</span>
            <h2>KrishiKosh</h2>
          </div>
          <button className="sidebar-close-btn">
            <X />
          </button>
        </div>
        <div className="sidebar-profile">
          <div className="profile-avtar">👨‍🌾</div>
          <div className="profile-info">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <div className="profile-details">
              <div className="detail-item">
                <MapPin className='detail-icon' /> <span>{profile.location}</span>
              </div>
              <div className="detail-item">
                <Phone className='detail-icon' /> <span>{profile.phone}</span>
              </div>
              <div className="detail-item">
                <Mail className='detail-icon' /><span>{profile.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-nav">
          <div className="nav-section">
            <h4>Main Menu</h4>
            {
              menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                  <item.icon className="nav-icon" />
                  <div className="nav-content">
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-description">{item.description}</span>
                  </div>
                </NavLink>
              ))}
          </div>
          <div className="nav-section">
            <h4>Account</h4>
            <NavLink className="nav-item">
              <Settings className="nav-icon" />
              <div className="nav-content">
                <span className="nav-label">Settings</span>
                <span className="nav-description">Account preferences</span>
              </div>
            </NavLink>
            <NavLink className="nav-item">
              <HelpCircle className="nav-icon" />
              <div className="nav-content">
                <span className="nav-label">Help & Support</span>
                <span className="nav-description">Get assistance</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="farm-info">
            <h4>Farm Information</h4>
            <div className="farm-details">
              <div class="farm-detail">
                <span class="detail-label">Total Land:</span>
                <span class="detail-value">{profile.farmSize}</span>
              </div>
              <div class="farm-detail">
                <span class="detail-label">Active Crops:</span>
                <span class="detail-value">{profile.activeCrop}</span>
              </div>
              <div class="farm-detail">
                <span class="detail-label">This Year:</span>
                <span class="detail-value">{profile.currentYear}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar