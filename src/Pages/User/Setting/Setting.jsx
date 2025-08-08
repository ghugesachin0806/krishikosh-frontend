import React, { useState } from 'react'
import './Setting.css'
import PageHeader from '../../../Components/PageHeader/PageHeader'
import { settingTabs } from '../../../DummyData'
import ProfileSection from '../../../Components/SettingComponent/ProfileSection/ProfileSection'
import NotificationSection from '../../../Components/SettingComponent/NotificationSection/NotificationSection'
import SecuritySection from '../../../Components/SettingComponent/SecuritySection/SecuritySection'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Setting = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();
  const [activeTab, setactiveTab] = useState(currentPath);

  const navigateButtonHandler = (tabId) => {
    setactiveTab(tabId);
    navigate(tabId);
  }

  return (
    <div className='setting-page'>
      <div className="setting-header">
        <PageHeader title='Settings' subTitle='Manage your account preferences and application settings' />
      </div>
      <div className="setting-container">
        <div className="setting-sidebar">
          <div className="setting-navbar">
            {settingTabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => navigateButtonHandler(tab.id)}
              >
                <tab.icon className='icon' />
                <span className='nav-label'>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="setting-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Setting