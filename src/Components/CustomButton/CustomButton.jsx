import React from 'react'
import './CustomButton.css'
import { BanknoteArrowDown, BanknoteArrowUp, Dock, Edit, Plus, RefreshCcw, Save, Shredder, Trash2, X } from 'lucide-react'

const CustomButton = ({ buttonType, btnColor, title = "Button", className,type='button', handler}) => {

  if (buttonType === 'closeBtn') {
    return (
      <>
        <button onClick={handler}  type={type} className='closeBtn'>
          <X />
        </button>
      </>
    )
  }

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
      case 'editBtn':
        return (
          <>
            <Edit />
          </>
        )
      case 'saveBtn':
        return (
          <>
            <Save />
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
    <button onClick={handler}  type={type} className={`cutom-btn ${buttonType} ${btnColor} ${className}`}>
      {renderContent()}
      <h3>{title}</h3>
    </button>
  )
}

export default CustomButton