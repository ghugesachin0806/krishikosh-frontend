import "./Sidebar.css"
import { BarChart3, Calendar, Crop, FileText, HelpCircle, Home, Mail, MapPin, Phone, Settings, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import CustomButton from '../CustomButton/CustomButton';
import { useContext } from "react";
import { SignupContext } from "../../App";
import { UserContext } from "../../Navigation/ProtectedRoutes";

const menuItems = [
  {
    path: '/dashboard',
    icon: Home,
    label: 'Dashboard',
    description: 'Overview and analytics'
  },
  {
    path: '/crop-management',
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
    path: '/report',
    icon: FileText,
    label: 'Reports',
    description: 'Financial reports'
  }
];

const Sidebar = ({ sidebarOpen, setsidebarOpen }) => {

  const { user, setuser } = useContext(UserContext);

  const sidebarHandler = () => {
    setsidebarOpen(prev => !prev);
  }

  return (
    sidebarOpen && (
      <div onClick={sidebarHandler} className="sidebar-overlay">
        <div onClick={(e) => e.stopPropagation()} className="sidebar">
          <div className="siderbar-header">
            <div className="sidebar-logo">
              <span className="logo-icon">🌾</span>
              <h2>KrishiKosh</h2>
            </div>
            <CustomButton buttonType='closeBtn' handler={sidebarHandler} />
          </div>
          <div className="sidebar-profile">
            <ProfileIcon className='profile-avatar' />
            <div className="profile-info">
              <h3>{user?.name ?? 'User'}</h3>
              <p>Farmer</p>
              <div className="profile-details">
                <div className="detail-item">
                  <MapPin className='detail-icon' /> <span>{user?.location || 'India'}</span>
                </div>
                <div className="detail-item">
                  <Phone className='detail-icon' /> <span>{user?.mobileNumber || '--'}</span>
                </div>
                <div className="detail-item">
                  <Mail className='detail-icon' /><span>{user?.email || '--'}</span>
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
                    onClick={sidebarHandler}
                    className='nav-item'
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
              <NavLink onClick={sidebarHandler} className="nav-item" to='/setting'>
                <Settings className="nav-icon" />
                <div className="nav-content">
                  <span className="nav-label">Settings</span>
                  <span className="nav-description">Account preferences</span>
                </div>
              </NavLink>
              <NavLink onClick={sidebarHandler} className="nav-item" to='/login'>
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
                <div className="farm-detail">
                  <span className="detail-label">Total Land:</span>
                  <span className="detail-value">{user?.farmSize || '--'}</span>
                </div>
                <div className="farm-detail">
                  <span className="detail-label">Active Crops:</span>
                  <span className="detail-value">{user?.activeCrop || '--'}</span>
                </div>
                <div className="farm-detail">
                  <span className="detail-label">This Year:</span>
                  <span className="detail-value">{user?.selectedYear || '--'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
  )
}

export default Sidebar