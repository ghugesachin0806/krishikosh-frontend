import React from 'react'
import './Setting.css'
import PageHeader from '../../../Components/PageHeader/PageHeader'
import { settingTabs } from '../../../DummyData'
import ProfileSection from '../../../Components/SettingComponent/ProfileSection'

const Setting = () => {
  return (
    <div className='setting-page'>
      <div className="setting-header">
        <PageHeader title='Settings' subTitle='Manage your account preferences and application settings' />
      </div>
      <div className="setting-container">
        <div className="setting-sidebar">
          <div className="setting-navbar">
            {settingTabs.map((tab) => (
              <button key={tab.id} className='nav-tab'>
                <tab.icon className='icon' />
                <span className='nav-label'>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="setting-content">
          <ProfileSection/>
        </div>
      </div>
    </div>
  )
}

export default Setting