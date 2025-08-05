import React from 'react'
import './AddNewButton.css'
import { Plus } from 'lucide-react'

const AddNewButton = ({title}) => {
  return (
    <button className='add-new-btn'>
        <Plus className='icon'/>
        <h3>{title}</h3>
    </button>
  )
}

export default AddNewButton