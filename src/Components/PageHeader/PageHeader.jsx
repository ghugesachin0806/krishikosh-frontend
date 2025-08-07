import React from 'react'
import './PageHeader.css'

const PageHeader = ({ title, subTitle }) => {
    return (
        <div className='page-header'>
            <h2 className='page-tile'>{title}</h2>
            <p className='page-subtitle'>{subTitle}</p>
        </div>
    )
}

export default PageHeader