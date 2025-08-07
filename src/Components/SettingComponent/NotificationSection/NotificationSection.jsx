import React from 'react'
import '../SettingComponent.css'
import PageHeader from '../../PageHeader/PageHeader'
import NotificationItem from './NotificationItem'

import { notificationSettings } from '../../../DummyData'

const NotificationSection = () => {
    return (
        <div className='setting-sections'>
            <PageHeader title='Notification Preferences' subTitle='Choose how you want to receive notifications about your farming activities.' className='notification-header' />
            <div className="notification-settings">
                {notificationSettings.map((notification)=>(<NotificationItem key={notification.id} title={notification.title} subtitle={notification.subtitle}/>))}
            </div>
        </div>
    )
}

export default NotificationSection