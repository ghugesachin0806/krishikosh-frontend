import React from 'react'
import '../SettingComponent.css'

const NotificationItem = ({title,subtitle,handler}) => {
  return (
    <div className='notification-item'>
        <div className="notification-info">
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
        <div className="toggle-switch">
            <input type="checkbox"/>
        </div>
    </div>
  )
}

export default NotificationItem