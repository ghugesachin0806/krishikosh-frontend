import React from 'react'
import './CustomButton.css'
import { BanknoteArrowDown, BanknoteArrowUp, Dock, Plus, RefreshCcw, Shredder, Trash2 } from 'lucide-react'

const CustomButton = ({ buttonType, title = "Button", className }) => {

  const renderContent = () => {
    switch (buttonType) {
      case 'addBtn':
        return (
          <>
            <Plus className='icon' />
          </>
        )
      case 'deleteBtn':
        return (
          <>
            <Trash2 />
          </>
        )
      case 'updateBtn':
        return (
          <>
            <RefreshCcw />
          </>
        )
      case 'clearBtn':
        return (
          <>
            <Shredder />
          </>
        )
      case 'manageBtn':
        return (
          <>
            <Dock />
          </>
        )
      case 'expenseBtn':
        return (
          <>
            <BanknoteArrowDown />
          </>
        )
      case 'revenueBtn':
        return (
          <>
            <BanknoteArrowUp />
          </>
        )
      default:
        return (
          <>
          </>
        )
    }
  }

  return (
    <button className={`cutom-btn ${buttonType} ${className}`}>
      {renderContent()}
      <h3>{title}</h3>
    </button>
  )
}

export default CustomButton